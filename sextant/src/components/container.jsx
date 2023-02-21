import React from 'react'
import Subcontainer from './Subcontainer.jsx'
function Container() {
  return (
    <div className='container'>
        <Subcontainer/>
        <Subcontainer/>
        <Subcontainer/>
        <Subcontainer/>
    </div>
  )
}

export default Container