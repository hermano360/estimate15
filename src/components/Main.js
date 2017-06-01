import React, {Component} from 'react'
import Intro from './Intro.js'
import NewEstimate from './NewEstimate.js'
import NewEstimateRev1 from './NewEstimateRev1'


class Main extends Component {

   constructor(){
    super()
    this.state = {
      // page:'Intro'
      page: 'NewEstimateRev1'
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this);
  }

  handleNewEstimate(){
    this.setState({
      page:'NewEstimate'
    })
  }

  render(){
    if(this.state.page === 'Intro'){
      return (
        <Intro newEstimate={this.handleNewEstimate}/>
        )
    } else if(this.state.page === 'NewEstimate') {
        return (
          <NewEstimate/>
        )
    } else if(this.state.page === 'NewEstimateRev1'){
      return (
          <NewEstimateRev1/>
        )
    }
  }
}

export default Main
