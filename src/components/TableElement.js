import React, {Component} from 'react'
import {Icon,Table} from 'react-materialize'
import TableEntry from './TableEntry'


class TableElement extends Component {

   constructor(){
    super()
    this.state = {
    	itemTotals:[],
    	runningMaterialTotal:0,
    	laborCosts:0
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleQuantityChange= this.handleQuantityChange.bind(this);
    this.updateQuantities = this.updateQuantities.bind(this);
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }
  handleDelete(productIdentifier){
  	let {itemTotals} = this.state;
  	let runningMaterialTotal=0,
  		laborCosts = 0;
  	itemTotals = itemTotals.filter((item)=>{
  		return item.modelNo !== productIdentifier
  	})
  	itemTotals.forEach((item)=>{
  		runningMaterialTotal += item.total;
  		laborCosts += item.labor;
  	})

  	this.setState({
  		itemTotals,
  		runningMaterialTotal,
  		laborCosts
  	})
  	this.props.onChangeTotal(runningMaterialTotal,laborCosts)
  	this.props.onItemDelete(productIdentifier)
  }
  updateQuantities(){
  	let{itemTotals} = this.state;
  	let runningMaterialTotal = 0,
		laborCosts = 0;

	itemTotals.forEach((item)=>{
		runningMaterialTotal += item.total;
		laborCosts += item.labor
	})
	this.setState({
		runningMaterialTotal,
		laborCosts
	})

  }
  handleQuantityChange(qty,price,total,modelNo,labor){
	let {itemTotals} = this.state;
	let updatedItem = itemTotals.length;
	let updatedMaterialTotal = total;

	let runningMaterialTotal = 0,
		laborCosts = 0;

	itemTotals.forEach((item,i)=>{
		if(item.modelNo === modelNo){
			updatedItem = i;

		}
	});

	itemTotals[updatedItem] = {
		modelNo,
		total,
		labor,
		qty
	}
	itemTotals.forEach((item)=>{
		runningMaterialTotal += item.total;
		laborCosts += item.labor
	})

	this.setState({
		itemTotals,
		runningMaterialTotal,
		laborCosts
	})
	this.props.onChangeTotal(runningMaterialTotal,laborCosts)
  }
    componentDidMount(){
  		let that = this;
  		$(document).ready(function(){
   			$('input.autocomplete').autocomplete({
    			data: {
      				"Apple": null,
      				"Microsoft": null,
      				"Google": null
    			},
    			limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    			onAutocomplete: function(val){
    				that.handleOnAutocomplete(val)
    			},
    			minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
  			});
 		});

  	}

  render(){
  	const {shoppingCart} = this.props;
  	const renderTableEntry = ()=>{
  		return shoppingCart.map((product)=>{
  			return (
  				<TableEntry key={product.modelNo} product={product} onClickDelete={this.handleDelete} quantityChange={this.handleQuantityChange}/>
  			)
  		})
  	}

    return (
      <Table>
		<thead>
			<tr>
				<th data-field="Name">Name</th>
				<th data-field="Category">Category</th>
				<th data-field="Quantity">Qty</th>
				<th data-field="ModelNo">ModelNo</th>
				<th data-field="Price">Price</th>
				<th data-field="Unit">UOM</th>
				<th data-field="Description">Description</th>
				<th data-field="Labor">Labor</th>
				<th data-field="Template">Template</th>
				<th data-field="Edit">Edit</th>
				<th data-field="Delete">Delete</th>
			</tr>
		</thead>

		<tbody>
			{renderTableEntry()}
			<tr>
				<td colSpan="3">
					<div className="input-field col s12">
          				<input type="text" id="autocomplete-input" className="autocomplete"/>
         				<label htmlFor="autocomplete-input">Add Items</label>
        			</div>	
				</td>
			</tr>					
		</tbody>
      </Table>
      )
  }
}

export default TableElement