import React, {Component} from 'react'
import {Button, Icon, Dropdown , NavItem,Row, Col} from 'react-materialize'
import Summary from './Summary'
import CartItems from './CartItems'
import AllItems from './AllItems'
import templateConfig from '../../api/templateConfig'
import ProductAccess from '../../api/ProductAccess'


//Todo

//avoid adding duplicate children
//using localstorage to speed up delivery

class NewEstimate extends Component {

   constructor(){
    super()
    this.state = {
      cart:[],
      runningTotal:0,
      allItems:false
    }
    this.bedroomHandler=this.bedroomHandler.bind(this);
    this.bathroomHandler=this.bathroomHandler.bind(this);
    this.handleAddItem=this.handleAddItem.bind(this);
    this.handleTotalChange=this.handleTotalChange.bind(this);
    this.handleAllItemClick=this.handleAllItemClick.bind(this);
    this.handleFinish=this.handleFinish.bind(this);
  }
  componentDidMount(){
  	$(document).foundation();
  }

  bedroomHandler(e){
    this.setState({
      cart: [],
      runningTotal:0
    })
    e.preventDefault();
    const bedroomDefaults = templateConfig.bedroom
    ProductAccess.getModelNoList(bedroomDefaults).then((data)=>{
      this.setState({
        cart: [
        ...data
        ],
        runningTotal:0
      })
    })
  }

    bathroomHandler(e){
   this.setState({
      cart: [],
      runningTotal:0
    })

    e.preventDefault();
    const bedroomDefaults = templateConfig.bathroom
    ProductAccess.getModelNoList(bedroomDefaults).then((data)=>{
      this.setState({
        cart: [
        ...data
        ],
        runningTotal:0
      })
    })
  }
  handleAllItemClick(){
    this.setState({
      allItems: !this.state.allItems
    })
  }
  handleAddItem(modelNo){
    ProductAccess.getModelNo(modelNo).then((data)=>{
      this.setState({
        cart: [
        ...this.state.cart,
        ...data
        ]
      })
    })
    
  }
  handleTotalChange(runningTotal){
    this.setState({
      runningTotal
    })
  }
  handleFinish(){
    this.setState({
      allItems: false
    })
  }
  
  render(){
    const {allItems} = this.state
    const renderAdditionalItems = ()=>{
      if(allItems){
        return (
          <AllItems onClick={this.handleAllItemClick} handleFinish={this.handleFinish} handleAddItem={this.handleAddItem}/>
          )
      } else {
        return (
          <Button onClick={this.handleAllItemClick}>Click to Add Custom Items</Button>
          )
      }

    }
    return (
        <div>
          <Row>
          	<Col s={2} offset='s1'>
          		<Dropdown trigger={ <Button>Templates</Button>}>
  				      <NavItem onClick={this.bedroomHandler}>Bedroom</NavItem>
  				      <NavItem onClick={this.bathroomHandler}>Bathroom</NavItem>
				      </Dropdown>
			      </Col>         	
		      </Row>
          <CartItems currentItems={this.state.cart} handleTotalChange={this.handleTotalChange}/>
          {renderAdditionalItems()}
		      <Summary runningTotal={this.state.runningTotal}/>
        </div>
    	)
    }
  
}

export default NewEstimate