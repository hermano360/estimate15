import React, {Component} from 'react'



class Intro extends Component {

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
      <div className="row">
        <div className="small-12 text-align center column small-centered">
          <h1>Welcome to Ez-Estimator</h1>
        </div>
        <div className=" text-align center column small-centered">
          <button className="hollow button small-offset-2 small-4" onClick={this.handleNewEstimate}>Start New Estimate</button>
          <button className="hollow button small-4" >Review Previous Estimate?</button>
        </div>
      </div>
      )
  }
}

export default Intro