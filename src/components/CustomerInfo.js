import React, {Component} from 'react'



class CustomerInfo extends Component {

   constructor(){
    super()
    this.state = {
      page:'intro'
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }


  render(){
    return (
      <div>
      Customer: First Last
      Quote:
      Date: 5/30/2017
      By: Bob Leon
      Desc: ...
      </div>
      )
  }
}

export default CustomerInfo