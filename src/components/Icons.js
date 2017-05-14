import React, {Component} from 'react'
import {Button} from 'react-materialize'

class Icons extends Component {
  constructor(){
    super()
    this.closeIcons=this.closeIcons.bind(this)
  }
  closeIcons(){
    this.props.closeIcons()
  }

  render(){

    return (
      <div className='text-align center'>
        <Button>Awards </Button>
        <img src="./aquadata_awards.jpg" alt="Test" height="500" width="303"></img>
        <Button onClick={this.closeIcons}>Return </Button>
      </div>
    )
  }
}

export default Icons
