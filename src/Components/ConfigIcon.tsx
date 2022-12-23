import React, { Children } from 'react'
import {IconContext} from 'react-icons'

type ConfigIconProps = {
  children: React.ReactNode
}

export const ConfigIcon = ({children}: ConfigIconProps) => {
  return(
    <>
    <IconContext.Provider value = {{color: '#fff', size: '2em'}}>
      {children}
    </IconContext.Provider>
    </>
  )
}