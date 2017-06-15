import React, {Component} from 'react'
import {Row,Col} from 'react-materialize'
import EstimateHeader from './EstimateHeader'
import CustomerInfo from './CustomerInfo'
import ScopeOfWork from './ScopeOfWork'
import Specifications from './Specifications'



class EstimatePage extends Component {

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
	<Row>
		<Col s={10} offset="s1">
			<EstimateHeader/>
			<CustomerInfo/>
			<ScopeOfWork/>
			<Specifications/>
		</Col>
	</Row>
      )
  }
}

export default EstimatePage