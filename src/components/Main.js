import React, {Component} from 'react'
import Intro from './Intro.js'
import NewEstimate from './NewEstimate.js'
import NewEstimateRev1 from './NewEstimateRev1'
import EstimatePage from './EstimatePage'


class Main extends Component {

   constructor(){
    super()
    this.state = {
      // page:'Intro'
      //page: 'EstimatePage'
      page: 'NewEstimateRev1'
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this);
    this.handleGenerateEstimate=this.handleGenerateEstimate.bind(this);
  }

  handleNewEstimate(){
    this.setState({
      page:'NewEstimate'
    })
  }
  handleGenerateEstimate(){
    this.setState({
      page:'EstimatePage'
    })
  }
  render(){
    const {page} = this.state;
    switch(page) {
      case 'Intro':
        return (
          <Intro newEstimate={this.handleNewEstimate}/>
          )
        break;
      case 'NewEstimate':
        return (
          <NewEstimate/>
        )      
        break;
      case 'NewEstimateRev1':
      return (
          <NewEstimateRev1 generateEstimate={this.handleGenerateEstimate}/>
        )
        break;
      case 'EstimatePage':
        return (
          <EstimatePage />
        )
        break;
      default:

    }
  }

}

export default Main
