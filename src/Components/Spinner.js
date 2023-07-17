import React, { Component } from 'react'
import hourglass from './Hourglass.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
         <img src={hourglass} alt='loading' ></img>
      </div>
    )
  }
}

export default Spinner