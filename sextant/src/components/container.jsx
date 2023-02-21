import Subcontainer from"./Subcontainer.jsx"
function Container() {
  return (
    <div className='container'>
        <Subcontainer name="IPv4" url="https://api.ipify.org?format=json"/>
        <Subcontainer name="IPv6" url="https://api64.ipify.org?format=json"/>
    </div>
  )
}
export default Container