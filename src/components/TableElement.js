import React, {Component} from 'react'
import {Icon,Table} from 'react-materialize'
import TableEntry from './TableEntry'
import AutocompleteName from './AutocompleteName'


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
    this.handleIndividualDelete=this.handleIndividualDelete.bind(this);
    this.handleQuantityChange= this.handleQuantityChange.bind(this);
    this.updateQuantities = this.updateQuantities.bind(this);
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }
  handleAddNewItem(productName){
  	this.props.addIndividualItem(productName);
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
  	this.props.onItemDelete(productIdentifier,'template')
  }

  	handleIndividualDelete(productIdentifier){
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
  	this.props.onItemDelete(productIdentifier,'individual')

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

  	}

  render(){
  	const {shoppingCart,shoppingCartIndividuals} = this.props;
  	const renderTableEntry = ()=>{
  		return shoppingCart.map((product)=>{
  			let keyValue = `${product.modelNo}-${product.template}`
  			return (
  				<TableEntry key={keyValue} product={product} onClickDelete={this.handleDelete} quantityChange={this.handleQuantityChange}/>
  			)
  		})
  	}
  	const renderIndividualTableEntry = ()=>{
  		  	return shoppingCartIndividuals.map((product)=>{
  			let keyValue = `${product.modelNo}-Individual`
  			return (
  				<TableEntry key={keyValue} product={product} onClickDelete={this.handleIndividualDelete} quantityChange={this.handleQuantityChange}/>
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
			{renderIndividualTableEntry()}
			<tr>
				<td colSpan="3">
				<AutocompleteName onAddItem={this.handleAddNewItem}/>
				</td>
			</tr>					
		</tbody>
      </Table>
      )
  }
}

export default TableElement