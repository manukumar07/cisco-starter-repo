import React, { useEffect, useState } from 'react'

function IpFinder(prop) {
    const [address , setAddress] = useState(" ") ;
    useEffect(()=>{fetchData()},)
    const fetchData = async () =>
    {
    fetch(prop.url)
    .then(response => response.json())
    .then(data => setAddress(data.ip));
    }
  return (
    <span>{address}</span>
  )
}
export default IpFinder