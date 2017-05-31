import React, {Component} from 'react'
import {Card,CardTitle} from 'react-materialize'



class Item extends Component {

   constructor(){
    super()

    this.handleQuantityChange=this.handleQuantityChange.bind(this)
  }
  handleQuantityChange(){
    let qty,price;
    if(this.refs.qty.value===''){
      qty='0'
    } else {
      qty=this.refs.qty.value
    }
    price = this.props.price.replace(/\$(.*)/,'$1');
    let total = parseInt(qty)*parseFloat(price);
    console.log(`total is ${total}`)
    console.log(qty,price,total,this.props.modelNo);
    this.props.quantityChange(qty,price,total,this.props.modelNo);
  }


  render(){
    const {photo,price,modelNo,refURL,description,category} = this.props;
    return (
      <div className="card small-3 float-left cart-items" data-equalizer-watch>
        <a href={refURL}>
        <img src={photo}/>
        <div className="card-section">
          <p>{description}</p>
          <p>
            Model Number: {modelNo}<br/>
            Price: {price}<br/>
          </p>
        </div>
        </a>
        <div className="sticky-footer">
          Quantity: <input type="text" ref="qty" onChange={this.handleQuantityChange} defaultValue="0"/>
        </div>
      </div>
    )
  }
}

export default Item