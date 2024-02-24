import React from 'react'

import SvgIcons from './SvgIcon'

const Clock = ({ color, ...props }) => {
  return (
    <SvgIcons viewBox={'0 0 24 24'} fill={color} {...props}>
      <path
        d={'M15.25 13.5H11.25C10.836 13.5 10.5 13.164 10.5 12.75V6.75C10.5 6.336 10.836 6 11.25 6C11.664 6 12 6.336 12 6.75V12H15.25C15.664 12 16 12.336 16 12.75C16 13.164 15.664 13.5 15.25 13.5ZM12 2C6.478 2 2 6.478 2 12C2 17.522 6.478 22 12 22C17.522 22 22 17.522 22 12C22 6.478 17.522 2 12 2Z'}
      />
    </SvgIcons>
  )
}

export default Clock
