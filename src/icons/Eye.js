import React from 'react'

import SvgIcons from './SvgIcon'

const Eye = ({ color, ...props }) => {
  return (
    <SvgIcons viewBox={'0 0 22 22'} fill={color} {...props}>
      <path
        // eslint-disable-next-line max-len
        d={'M19.5765 9.44549C17.5927 7.26212 14.3012 4.9542 10.9999 5.00071C7.69854 4.95344 4.40697 7.26287 2.42243 9.44549C2.1504 9.74963 2 10.1434 2 10.5514C2 10.9595 2.1504 11.3532 2.42243 11.6574C4.38296 13.8175 7.62876 16.1051 10.8791 16.1051H11.1101C14.3717 16.1051 17.616 13.8175 19.5788 11.6566C19.8504 11.3523 20.0004 10.9586 20 10.5506C19.9996 10.1427 19.8488 9.74923 19.5765 9.44549ZM7.54848 10.5529C7.54848 9.87031 7.7509 9.20302 8.13014 8.63545C8.50938 8.06787 9.04841 7.6255 9.67907 7.36427C10.3097 7.10305 11.0037 7.0347 11.6732 7.16787C12.3427 7.30104 12.9577 7.62975 13.4403 8.11244C13.923 8.59512 14.2517 9.2101 14.3849 9.8796C14.5181 10.5491 14.4497 11.2431 14.1885 11.8737C13.9273 12.5044 13.4849 13.0434 12.9173 13.4226C12.3498 13.8019 11.6825 14.0043 10.9999 14.0043C10.0845 14.0043 9.20662 13.6407 8.55936 12.9934C7.9121 12.3462 7.54848 11.4683 7.54848 10.5529Z'}
      ></path>
      <path
        // eslint-disable-next-line max-len
        d={'M9.49927 10.5528C9.49927 10.9508 9.65737 11.3325 9.93878 11.6139C10.2202 11.8953 10.6019 12.0534 10.9999 12.0534C11.3978 12.0534 11.7795 11.8953 12.0609 11.6139C12.3424 11.3325 12.5005 10.9508 12.5005 10.5528C12.5005 10.3558 12.4616 10.1607 12.3862 9.97859C12.3108 9.79653 12.2003 9.6311 12.0609 9.49176C11.9216 9.35242 11.7562 9.24188 11.5741 9.16647C11.3921 9.09106 11.1969 9.05225 10.9999 9.05225C10.8028 9.05225 10.6077 9.09106 10.4256 9.16647C10.2436 9.24188 10.0781 9.35242 9.93878 9.49176C9.79944 9.6311 9.68891 9.79653 9.61349 9.97859C9.53808 10.1607 9.49927 10.3558 9.49927 10.5528Z'}
      ></path>
    </SvgIcons>
  )
}

export default Eye
