import React, {Component} from 'react'



class Specifications extends Component {

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
      		<div className="estimate-page-heading">Specifications</div>
      		<div>Certain Specifications</div>
      </div>
      )
  }
}

export default Specifications