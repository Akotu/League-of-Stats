import React from 'react'
import './Wrapper.css'

const Wrapper = (props) => {
  return <div className='content'>{props.children}</div>
}

export default Wrapper