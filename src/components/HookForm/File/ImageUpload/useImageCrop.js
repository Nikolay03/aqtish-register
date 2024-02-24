import { useState, useCallback } from 'react'
import { path } from 'ramda'

import { getCroppedImg } from './utils'

import * as API from '~/constants/api'
import request from '~/utils/request'

function readFile (file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

export default function useImageCrop ({ onChange, dispatch }) {
  const [imageSrc, setImageSrc] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [isOpenPreview, setOpenPreview] = useState(false)

  const onOpenPreview = useCallback(() => {
    setOpenPreview(true)
  }, [])

  const onClosePreview = useCallback(() => {
    setOpenPreview(false)
    setCroppedImage(null)
  }, [])

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const onUploadProgress = useCallback((event) => {
    const percentCompleted = Math.floor((event.loaded * 100) / event.total)
    dispatch({ progress: percentCompleted })
  }, [])

  const onUploadCroppedImage = useCallback(async () => {
    try {
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels)

      onChange(null)
      dispatch({ isLoading: true })
      setOpenPreview(false)

      const formData = new FormData()
      formData.append('file', croppedImageBlob, 'image.png')

      request().upload(API.FILE_CREATE, formData, onUploadProgress)
        .then(response => {
          dispatch({ isLoading: false, error: null, progress: 0 })
          onChange(response.data)
        })
        .catch(error => {
          const errorData = path(['response', 'data'], error)
          dispatch({ isLoading: false, error: errorData, progress: 0 })
        })
    }
    catch (e) {
      // Resolve error
    }
  }, [imageSrc, croppedAreaPixels])

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const imageDataUrl = await readFile(file)

      e.target.value = ''

      setImageSrc(imageDataUrl)
      onOpenPreview()
    }
  }

  return {
    imageSrc,
    crop,
    zoom,
    croppedImage,
    onCropChange: setCrop,
    onZoomChange: setZoom,
    onCropComplete,
    onUploadCroppedImage,
    onFileChange,
    isOpenPreview,
    onClosePreview
  }
}
