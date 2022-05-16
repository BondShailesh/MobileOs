import React from 'react'
var style1 = {
    margin:"auto",
    width:"290px"
}
export default function ReactMobile(props) {
 
  return (
    <div style={style1}>
      <h2>Mobile Operating System</h2>
      <ul>
      <li>Android</li>
      <li>BlackBerry</li>
      <li>Iphone</li>
      <li>Windows Phone</li>
      </ul>

      <h2>Mobile Manufacturer</h2>
      <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>BlackBerry</li>
      <li>Xiomi</li>
      </ul>
    </div>
  )
}
