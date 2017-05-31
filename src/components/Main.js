import React, {Component} from 'react'
import Intro from './Intro.js'
import NewEstimate from './NewEstimate.js'


class Main extends Component {

   constructor(){
    super()
    this.state = {
      page:'Intro'
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
    }
  }
}

export default Main
