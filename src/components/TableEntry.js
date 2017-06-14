import React, {Component} from 'react'
import {Icon} from 'react-materialize'



class TableEntry extends Component {

   constructor(){
    super()
    this.state = {

    }

    this.handleDelete=this.handleDelete.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleEmptyInput = this.handleEmptyInput.bind(this)
  }
  handleDelete(){
  	this.props.onClickDelete(this.props.product.modelNo);
  }
    handleQuantityChange(){
    const {product} = this.props;
    let qty,price;
    if(isNaN(this.refs.qty.value) || this.refs.qty.value===""){
      qty='0'
    } else {
      qty=this.refs.qty.value
    }

    price = product.price.replace(/\$(.*)/,'$1');
    let total = parseFloat(qty)*parseFloat(price);
    let laborCost = parseInt(product.labor)*parseFloat(qty);
    this.props.quantityChange(qty,price,total,product.modelNo,laborCost);
  }
  handleEmptyInput(){
  	if(isNaN(this.refs.qty.value) || this.refs.qty.value===""){
  		this.refs.qty.value = 0
  	}
  }

    componentDidMount(){
  	}


  render(){
  	const {product} = this.props;
    return (
			<tr className="tableEntry">
				<td>{product.name}</td>
				<td>{product.category}</td>
				<td>
					<input className='quantityInput' type="text" ref="qty" onChange={this.handleQuantityChange} onBlur={this.handleEmptyInput} defaultValue="0"/>
				</td>
				<td>{product.modelNo}</td>
				<td>{product.price}</td>
				<td>Each</td>
				<td>{product.description}</td>
				<td>${parseInt(product.labor).toFixed(2)}</td>
				<td>{product.template}</td>
				<td><Icon>mode_edit</Icon></td>
				<td onClick={this.handleDelete}><Icon>delete</Icon></td>
			</tr>
      )
  }
}

export default TableEntry







