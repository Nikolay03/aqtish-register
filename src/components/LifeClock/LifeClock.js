import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useToken } from '@chakra-ui/react'

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & svg {
    display: block;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  };
`

const LifeClock = () => {
  const primary300 = useToken('colors', 'primary.300')
  const cloackRef = useRef(null)
  useEffect(() => {
    const hands = []
    hands.push(document.querySelector('#secondhand > *'))
    hands.push(document.querySelector('#minutehand > *'))
    hands.push(document.querySelector('#hourhand > *'))

    const cx = 100
    const cy = 100

    function shifter (val) {
      return [val, cx, cy].join(' ')
    }

    const date = new Date()
    const hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2
    const minuteAngle = 360 * date.getMinutes() / 60
    const secAngle = 360 * date.getSeconds() / 60

    hands[0].setAttribute('from', shifter(secAngle))
    hands[0].setAttribute('to', shifter(secAngle + 360))
    hands[1].setAttribute('from', shifter(minuteAngle))
    hands[1].setAttribute('to', shifter(minuteAngle + 360))
    hands[2].setAttribute('from', shifter(hoursAngle))
    hands[2].setAttribute('to', shifter(hoursAngle + 360))
    for (let i = 1; i <= 12; i++) {
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      el.setAttribute('x1', '100')
      el.setAttribute('y1', '30')
      el.setAttribute('x2', '100')
      el.setAttribute('y2', '40')
      el.setAttribute('transform', 'rotate(' + (i * 360 / 12) + ' 100 100)')
      el.style = ('style', `stroke: ${primary300};`)
      cloackRef.current.appendChild(el)
    }
  }, [])
  return (
    <Styled>
      <svg width={'200'} height={'200'} ref={cloackRef}>

        <filter id={'innerShadow'} x={'-20%'} y={'-20%'} width={'140%'} height={'140%'}>
          <feGaussianBlur in={'SourceGraphic'} stdDeviation={'3'} result={'blur'} />
          <feOffset in={'blur'} dx={'2.5'} dy={'2.5'} />
        </filter>

        <g>
          {/* <circle id={'shadow'} */}
          {/*  style={{ fill: 'rgba(0,0,0,0.1)' }} */}
          {/*  cx={'97'} cy={'100'} r={'87'} filter={'url(#innerShadow)'} */}
          {/* /> */}
          {/* <circle id={'circle'} */}
          {/*  style={{ stroke: primary300, strokeWidth: '12px', fill: 'transparent' }} */}
          {/*  cx={'100'} cy={'100'} r={'80'} */}
          {/* /> */}
        </g>
        <g>
          <line x1={'100'} y1={'100'} x2={'100'} y2={'55'} transform={'rotate(80 100 100)'}
            style={{ strokeWidth: '3px', stroke: primary300 }} id={'hourhand'}>
            <animatetransform attributeName={'transform'}
              attributeType={'XML'}
              type={'rotate'}
              dur={'43200s'}
              repeatCount={'indefinite'} />
          </line>
          <line x1={'100'} y1={'100'} x2={'100'} y2={'40'}
            style={{ strokeWidth: '4px', stroke: primary300 }}
            id={'minutehand'}>
            <animatetransform attributeName={'transform'}
              attributeType={'XML'}
              type={'rotate'}
              dur={'3600s'}
              repeatCount={'indefinite'} />
          </line>
          <line x1={'100'} y1={'100'} x2={'100'} y2={'30'}
            style={{ strokeWidth: '2px', stroke: primary300 }}
            id={'secondhand'}>
            <animatetransform attributeName={'transform'}
              attributeType={'XML'}
              type={'rotate'}
              dur={'60s'}
              repeatCount={'indefinite'} />
          </line>
        </g>
        <circle id={'center'}
          style={{ fill: '#128A86', stroke: '#C1EFED', strokeWidth: '2px' }}
          cx={'100'} cy={'100'} r={'3'} />
      </svg>
    </Styled>
  )
}

export default LifeClock
