
import React, {Component} from 'react'
import Intro from './Intro.js'
import NewEstimate from './NewEstimate.js'


class Summary extends Component {
  constructor(){
    super()
  }


render(){
  let runningTotal = parseFloat(this.props.runningTotal)
  const laborTotal = runningTotal/10
  const grandTotal = runningTotal*1.1


  return (
    <div className="row">
    <div className="column">
    <h1>Material Total $ {runningTotal.toFixed(2)}</h1>
    <h1>Labor Total $ {laborTotal.toFixed(2)}</h1>
    <h1>Grand Total $ {grandTotal.toFixed(2)}</h1>
    <div className="button">Generate Estimate</div>
    </div>
    </div>
    )
}

}

export default Summary