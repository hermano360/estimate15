import React, {Component} from 'react'
import {Row,Col,Button} from 'react-materialize'
import EstimateHeader from './EstimateHeader'
import CustomerInfo from './CustomerInfo'
import ScopeOfWork from './ScopeOfWork'
import Specifications from './Specifications'
import QuoteSummary from './QuoteSummary'
var axios = require('axios');


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
  componentDidMount(){
  	let html = $('#printThisBitch')[0].outerHTML;

  	console.log(html)
  	var requestUrl = `/pdfTest`;
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
      <div>
        <div style={{}}>
          <div id="printThisBitch">
            <CustomerInfo scopeText={this.props.scopeText} salesman={this.props.salesman} description={this.props.description}/>
            <Specifications shoppingCartFinal= {this.props.shoppingCartFinal} itemTotals = {this.props.itemTotals}/>
            <QuoteSummary/>
          </div>
        </div>
        <div>Estimate sent to hermano360@gmail.com, robertLeon@probuilders.com</div>
        <Button>Start Over?</Button>
      </div>
      )
  }
}

export default EstimatePage
