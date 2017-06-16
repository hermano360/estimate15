import React, {Component} from 'react'
import {Row,Col} from 'react-materialize'
import EstimateHeader from './EstimateHeader'
import CustomerInfo from './CustomerInfo'
import ScopeOfWork from './ScopeOfWork'
import Specifications from './Specifications'
var axios = require('axios');


class EstimatePage extends Component {

   constructor(){
    super()
    this.state = {
    	cows:5
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }
  componentDidMount(){
  	let html = $('#printThisBitch')[0].outerHTML;

  	console.log(html)
  	var requestUrl = `/pdfTest`
	axios({
	    method: 'post',
	    url: requestUrl,
	      data: {
	        html
	      }
	    }).then(function(res){
	          console.log('successful')
	        }).catch(function (error) {
	          console.log('not successful')
	    		console.log(error);
	  		})
  }


  render(){
    return (
	<div id="printThisBitch" >
    <ScopeOfWork scopeText={this.props.scopeText}/>  
    <Specifications shoppingCartFinal= {this.props.shoppingCartFinal}/>
	</div>
      )
  }
}

export default EstimatePage