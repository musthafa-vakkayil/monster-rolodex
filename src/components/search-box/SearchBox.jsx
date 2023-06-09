import React, { Component } from 'react'
import "./SearchBox.css"

export default class SearchBox extends Component {
  render() {
    const {classname, placeholder, handleChange} = this.props;
    return (
      <div><input type='search' className={classname} placeholder={placeholder} onChange={handleChange}/></div>
    )
  }
}
