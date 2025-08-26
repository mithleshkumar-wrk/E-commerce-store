import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loader = ({className}) => {
  return (
    <div className={`flex h-screen items-center justify-center ${className}`}>
        <PropagateLoader color="#ff0000" />
    </div>
  )
}

export default Loader