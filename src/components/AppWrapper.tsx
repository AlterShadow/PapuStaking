import React, { ReactNode } from 'react'
import Nav from './navigation/Nav'

interface AppWrapperprops {
    children:ReactNode
}
const AppWrapper:React.FC<AppWrapperprops> = ({children}) => {
  return (
    <div>
        {/* <Nav/> */}
        {children}
    </div>
  )
}

export default AppWrapper