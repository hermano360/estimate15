import React, {Component} from 'react'
import Item from './Item'



class CartItems extends Component {
  constructor(){
    super()
    this.state = {
      itemTotals:[],
      runningTotal:0
    }
    this.handleQuantityChange=this.handleQuantityChange.bind(this)
  }

  handleQuantityChange(qty,price,total,modelNo){
    let {itemTotals} = this.state
    let updatedItem = itemTotals.length
    itemTotals.forEach((item,i)=>{
      if(item.modelNo === modelNo){
        updatedItem = i
      }
    })
    itemTotals[updatedItem]={
      modelNo,
      qty,
      price,
      total
    }
    let runningTotal = 0
    itemTotals.forEach((item)=>{
      runningTotal += item.total
    })
    runningTotal = runningTotal.toFixed(2)
    this.setState({
      itemTotals,
      runningTotal
    })
    this.props.handleTotalChange(runningTotal)
  }

render(){
  let {currentItems} = this.props
  let renderItems = ()=>{
    if(currentItems.length > 0){
      return currentItems.map((item)=>{
        if(item){
          return (
            <Item key = {item._id} {...item} quantityChange={this.handleQuantityChange}/>
            )
        }
      })
    } else {
      return (
        <div className="container center-align">Cart Empty!</div>
        )
    }
  }
  return (
    <div className="row">
    <div>Cart Items</div>
    {renderItems()}
    </div>
    )
}
}

export default CartItems