import React, {Component} from 'react'



class QuoteSummary extends Component {

   constructor(){
    super()
    this.state = {
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }


  render(){
    return (
    	<div>
    	<div style={{float: 'left','backgroundColor': '#13788e', color: 'white', width:'75%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid'}}>Summary</div>
      	</div>
      )
  }
}

export default QuoteSummary