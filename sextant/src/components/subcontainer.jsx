import React, { useEffect, useState } from 'react'
import Container from './Container.jsx'
import IpFinder from './IpFinder.jsx'
function Subcontainer(prop) {
    return (
        <div className='Subcontainer'>{prop.name}
        <div>IP :{<IpFinder url={prop.url}/>}</div></div>
      )
    }   
    export default Subcontainer