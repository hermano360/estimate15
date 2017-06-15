import React, {Component} from 'react'
import {Row} from 'react-materialize'


class ScopeOfWork extends Component {

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
        <div className="estimate-page-heading"> Scope Of Work </div>
        <div className="scope-of-work-text" >Scope of Work that was put in during the estimate</div>
      </div>
      )
  }
}

export default ScopeOfWork