import React, {Component} from 'react'
import Intro from './Intro.js'
import NewEstimate from './NewEstimate.js'
import NewEstimateRev1 from './NewEstimateRev1'
import EstimatePage from './EstimatePage'


class Main extends Component {

   constructor(){
    super()
    this.state = {
      scopeText:'',
      page:'Intro',
      shoppingCartFinal: [],
      itemTotals: [],
      salesman:"",
      description:""
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this);
    this.handleGenerateEstimate=this.handleGenerateEstimate.bind(this);
    this.handleChangeSalesman= this.handleChangeSalesman.bind(this);
  }

  handleNewEstimate(){
    this.setState({
      page:'NewEstimateRev1'
    })
  }
  handleGenerateEstimate(scopeText,shoppingCart,shoppingCartIndividuals,itemTotals,description, grandTotal, salesmanValue, taxMaterial, totalLabor, subtotalMaterial, totalMaterial){

    let shoppingCartFinal= [
        ...shoppingCart,
        ...shoppingCartIndividuals
        ];
    this.setState({
      scopeText,
      page:'EstimatePage',
      shoppingCartFinal,
      itemTotals,
      description,
      grandTotal,
      salesmanValue,
      taxMaterial,
      totalLabor,
      subtotalMaterial,
      totalMaterial
    })
  }
  handleChangeSalesman(salesman){
    this.setState({
      salesman
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
          <NewEstimateRev1 generateEstimate={this.handleGenerateEstimate} onChangeSalesman={this.handleChangeSalesman}/>
        )
        break;
      case 'EstimatePage':
        return (
          <EstimatePage {...this.state} description={this.state.description} salesman= {this.state.salesman} scopeText = {this.state.scopeText} shoppingCartFinal={this.state.shoppingCartFinal} itemQuantityChange={this.handleItemQuantityChange} itemTotals = {this.state.itemTotals}/>
        )
        break;
      default:

    }
  }

}

export default Main
