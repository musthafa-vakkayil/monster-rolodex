// import React, { Component } from 'react'
import React from 'react'
import "./SearchBox.css"

export default function SearchBox({classname, placeholder, handleChange}) {
  return (
    <div><input type='search' className={classname} placeholder={placeholder} onChange={handleChange}/></div>
  )
}

