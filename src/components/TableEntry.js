import React, {Component} from 'react'
import {Icon} from 'react-materialize'



class TableEntry extends Component {

   constructor(){
    super()
    this.state = {

    }

    this.handleDelete=this.handleDelete.bind(this);
  }
  handleDelete(){
  	this.props.onClickDelete(this.props.product.name);
  }

    componentDidMount(){
  	}


  render(){
  	const {product} = this.props;
    return (
			<tr>
				<td>{product.name}</td>
				<td>{product.category}</td>
				<td>{product.modelNo}</td>
				<td>{product.price}</td>
				<td>Each</td>
				<td>{product.description}</td>
				<td>$10.00</td>
				<td>{product.template}</td>
				<td><Icon>mode_edit</Icon></td>
				<td onClick={this.handleDelete}><Icon>delete</Icon></td>
			</tr>
      )
  }
}

export default TableEntry







