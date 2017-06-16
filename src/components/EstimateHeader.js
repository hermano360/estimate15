import React, {Component} from 'react'



class EstimateHeader extends Component {

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
Pro Builders Express,Inc!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      </div>
      )
  }
}

export default EstimateHeader