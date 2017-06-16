import React, {Component} from 'react'
import {Row} from 'react-materialize'


class ScopeOfWork extends Component {

   constructor(){
    super()
    }



  render(){
    return (
      <div>
        <div style={{'backgroundColor': '#13788e', color: 'white', width:'100%', 'textAlign':'center', border:'black 1px solid'}}> Scope Of Work </div>
        <p style={{'minHeight': '50px'}}>{this.props.scopeText}</p>
      </div>
      )
  }
}

export default ScopeOfWork