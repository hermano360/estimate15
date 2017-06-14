import React, {Component} from 'react'
import {Row,Input,Icon,Col,Table,Autocomplete} from 'react-materialize'

import TableElement from './TableElement'
import ProductAccess from '../../api/ProductAccess'
import testProductAccess from '../../api/testProductAccess'
import templateConfig from '../../api/templateConfig'

class NewEstimateRev1 extends Component {
	constructor(){
		super()
		this.state = {
			templateValue:'Choose a Template',
			salesmanValue:'empty',
			shoppingCart:[],
			shoppingCartTemplates:[],
			subtotalMaterial:0,
			taxMaterial:0,
			totalMaterial:0,
			totalLabor:0,
			grandTotal:0,
			tax:0.10
		}
		this.handleOnAutocomplete	=	this.handleOnAutocomplete.bind(this);
		this.handleTemplateChange	=	this.handleTemplateChange.bind(this);
		this.handleSalesmanChange	=	this.handleSalesmanChange.bind(this);
		this.handleItemDelete		=	this.handleItemDelete.bind(this);
		this.handleChangeTotal		=	this.handleChangeTotal.bind(this);
		this.handleAddIndividualItem=	this.handleAddIndividualItem.bind(this);
		this.addItemToShoppingCart	=	this.addItemToShoppingCart.bind(this);
	}
	handleOnAutocomplete(val){
		console.log(val,"hello")
	}
	whichItemsToAddToShoppingCart(shoppingCart, modelNos, template){
		let filteredModelNos = modelNos.filter((modelNo)=>{
			let acceptableModelNo = true;
			shoppingCart.forEach((cartItem)=>{
				if(cartItem.modelNo === modelNo && cartItem.template === template){
					acceptableModelNo = false;
				}
			})
			return acceptableModelNo
		})
		return filteredModelNos
	}

	handleAddIndividualItem(productName){
		this.addItemToShoppingCart(testProductAccess.getProductWithName(productName),"")
	}
	addItemToShoppingCart(item,template){
		// item to shoppingcart only if the modelNo and template for that specific item isn't already listed
		const {shoppingCart} = this.state;
		let shoppingCartCopy = shoppingCart.filter(()=> true);
		let addItem = true;
		shoppingCartCopy.forEach((cartItem)=>{
			if(cartItem.modelNo === item.modelNo && cartItem.template === template){
				addItem = false
			}
		})
		if(addItem){
			shoppingCartCopy.push(item)
		}
		this.setState({
			shoppingCart:shoppingCartCopy
		})
	}
	handleChangeTotal(subtotalMaterial,totalLabor){
		let {tax} = this.state;
		let taxMaterial = tax * subtotalMaterial,
		totalMaterial = taxMaterial + subtotalMaterial,
		grandTotal = totalLabor + totalMaterial;

		this.setState({
			subtotalMaterial,
			taxMaterial,
			totalLabor,
			totalMaterial,
			grandTotal
		})

	}
	resetTemplateValue(){
		// this.refs.templateSelection.state.value = 'Choose a Template';
	}
handleTemplateChange(){
	const templateValue = event.target.innerHTML;

	if(templateValue !== "Choose a Template"){
		const templateModelNos = templateConfig[templateValue];
		let {shoppingCartTemplates,shoppingCart} = this.state;

		//Change this to database connection after demo. Testing is synchronous, database is async, use callbacks
		if(shoppingCartTemplates.indexOf(templateValue)=== -1){
			shoppingCartTemplates.push(templateValue);
			let filteredModelNos = this.whichItemsToAddToShoppingCart(shoppingCart, templateModelNos, templateValue);
			let itemsToAddToShoppingCart = testProductAccess.getModelNos(filteredModelNos);
			let itemsWithTemplate = this.addTemplateToProducts(itemsToAddToShoppingCart,templateValue);
			itemsWithTemplate.forEach((item)=>{
				this.addItemToShoppingCart(item,templateValue);
			})

		} else {
			let templateIndex = shoppingCartTemplates.indexOf(templateValue);
			let missingTemplateModelNos = templateModelNos.filter((templateModelNo)=>{
				let templateNeededInShoppingcart = true;
				shoppingCart.forEach((shoppingCartItem)=>{
					if(templateModelNo === shoppingCartItem.modelNo){
						templateNeededInShoppingcart = false;
					}
				})
				return templateNeededInShoppingcart
			})
			if(missingTemplateModelNos.length > 0 ){
				shoppingCartTemplates.splice(templateIndex,1);
				shoppingCartTemplates.push(templateValue);
				let newShoppingCartItems = testProductAccess.getModelNos(templateModelNos).filter((product)=>{
					let addProduct = true;
					shoppingCart.forEach((shoppingCartItem)=>{
						if(shoppingCartItem.modelNo === product.modelNo){
							addProduct = false
						}
					})
					return addProduct
				})
				newShoppingCartItems = this.addTemplateToProducts(newShoppingCartItems,templateValue);

				shoppingCart=[...shoppingCart,
				...newShoppingCartItems
				];
			}
		}
		let updatedShoppingCart = this.reorderShoppingCart(shoppingCart, templateValue);
		this.setState({
			templateValue,
			shoppingCart: updatedShoppingCart,
			shoppingCartTemplates
		})
	}
}

// handleTemplateChange(){
// 	const templateValue = event.target.innerHTML;

// 	if(templateValue !== "Choose a Template"){
// 		const templateModelNos = templateConfig[templateValue];
// 		let {shoppingCartTemplates,shoppingCart} = this.state;

// 		//Change this to database connection after demo. Testing is synchronous, database is async, use callbacks
// 		if(shoppingCartTemplates.indexOf(templateValue)=== -1){
// 			shoppingCartTemplates.push(templateValue);
// 			let newShoppingCartItems = testProductAccess.getModelNos(templateModelNos).filter((product)=>{
// 				let addProduct = true;
// 				shoppingCart.forEach((shoppingCartItem)=>{
// 					if(shoppingCartItem.modelNo === product.modelNo && shoppingCartItem.template === product.template){
// 						addProduct = false
// 					}
// 				})
// 				return addProduct
// 			})
// 			//preparing for when database doesn't include templates
// 			newShoppingCartItems = this.addTemplateToProducts(newShoppingCartItems,templateValue);

// 			shoppingCart=[
// 			...shoppingCart,
// 			...newShoppingCartItems
// 			];
// 		} else {
// 			let templateIndex = shoppingCartTemplates.indexOf(templateValue);
// 			let missingTemplateModelNos = templateModelNos.filter((templateModelNo)=>{
// 				let templateNeededInShoppingcart = true;
// 				shoppingCart.forEach((shoppingCartItem)=>{
// 					if(templateModelNo === shoppingCartItem.modelNo){
// 						templateNeededInShoppingcart = false;
// 					}
// 				})
// 				return templateNeededInShoppingcart
// 			})
// 			if(missingTemplateModelNos.length > 0 ){
// 				shoppingCartTemplates.splice(templateIndex,1);
// 				shoppingCartTemplates.push(templateValue);
// 				let newShoppingCartItems = testProductAccess.getModelNos(templateModelNos).filter((product)=>{
// 					let addProduct = true;
// 					shoppingCart.forEach((shoppingCartItem)=>{
// 						if(shoppingCartItem.modelNo === product.modelNo){
// 							addProduct = false
// 						}
// 					})
// 					return addProduct
// 				})
// 				newShoppingCartItems = this.addTemplateToProducts(newShoppingCartItems,templateValue);

// 				shoppingCart=[...shoppingCart,
// 				...newShoppingCartItems
// 				];
// 			}
// 		}
// 		let updatedShoppingCart = this.reorderShoppingCart(shoppingCart, templateValue);
// 		this.setState({
// 			templateValue,
// 			shoppingCart: updatedShoppingCart,
// 			shoppingCartTemplates
// 		})
// 	}
// }

addTemplateToProducts(products,template){
	return products.map((product)=>{
		product.template = template;
		return product
	})
}

// reordering shopping cart so that the latest template's items are all at the end
reorderShoppingCart(shoppingCart, templateValue){
	let orderedShoppingCart = shoppingCart.filter(()=>true);
	let ordered = true;
	do {
		let ordered = true;
		for(let i = orderedShoppingCart.length-1; i >= 0; i--){
			if(i === orderedShoppingCart.length-1){
				if(orderedShoppingCart[i].template===templateValue){
					console.log("first value in correct spot")
				} else {
					console.log("first value not in correct spot");

					let firstTemplateIndex;
					orderedShoppingCart.forEach((cartItem,index)=>{
						if(firstTemplateIndex=== undefined){
							firstTemplateIndex = index;
						}
					})
					let firstTemplateItem = orderedShoppingCart[firstTemplateIndex];
					orderedShoppingCart.splice(firstTemplateIndex,1);
					orderedShoppingCart.push(firstTemplateItem);
					ordered = false;
					i = orderedShoppingCart.length
				}
			} else {
// not in first spot
if(orderedShoppingCart[i].template === templateValue){
	if(orderedShoppingCart[i+1].template === templateValue){
		console.log("current template item is in order")
	} else {
		console.log("current template item is not in order")
		let transposedCartItem = orderedShoppingCart[i];
		orderedShoppingCart.splice(i,1);
		orderedShoppingCart.push(transposedCartItem);
		ordered = false;
		i = orderedShoppingCart.length
	}
} else {
	console.log("item is not in current template")
}
}
}
} while(ordered === false)

return orderedShoppingCart

}
handleSalesmanChange(){
	console.log(event.target.innerHTML);
	this.refs.templateSelection.state.value = 'Choose a Template';
	this.setState({
		salesmanValue:event.target.innerHTML
	})
}
handleItemDelete(productIdentifier){
	const currentCart = this.state.shoppingCart;
	const currentShoppingCartTemplate = this.state.shoppingCartTemplates;
	const updatedCart = currentCart.filter((product)=>{
		return product.modelNo === productIdentifier ? false : true
	})
	const updatedShoppingCartTemplates = currentShoppingCartTemplate.filter((template)=>{
		let keepTemplate = false;
		updatedCart.forEach((cartItem)=>{
			if(cartItem.template === template){
				keepTemplate = true;
			}
		})
		return keepTemplate
	})
	this.setState({
		shoppingCartTemplates: updatedShoppingCartTemplates,
		shoppingCart:updatedCart
	})
}
componentDidMount(){

}

render() {
	const {grandTotal, subtotalMaterial, totalLabor, totalMaterial, taxMaterial} = this.state;

	return (
		<div>
		<Row>
		<Input s={6} label="Salesman" type='select' defaultValue={this.state.salesmanValue} validate onChange={this.handleSalesmanChange}>
		<option value='empty'></option>
		<option value='1'>Robert Leon</option>
		<option value='2'>Steve Smith</option>
		<option value='3'>Antonio Vargas</option>
		</Input>
		<Input s={12} label="Project Description"/>
		<Input label="Scope" s={12} />
		<Input s={12} ref="templateSelection" type='select' label="Template" defaultValue={this.state.templateValue} onChange={this.handleTemplateChange}>
		<option value='Choose a Template'>Choose a Template</option>
		<option value='Bath1'>Bath1</option>
		<option value='Kitchen1'>Kitchen1</option>
		<option value='Livingroom1'>Livingroom1</option>
		</Input>
		</Row>
		<Row>
		<TableElement shoppingCart={this.state.shoppingCart} onItemDelete={this.handleItemDelete} onChangeTotal={this.handleChangeTotal} addIndividualItem={this.handleAddIndividualItem}/>
		</Row>

		<Row>
		<Col s={4} offset="s7">
		<Table >
		<thead>
		<tr>
		<th data-field=" "></th>
		<th data-field="Material">Materials</th>
		<th data-field="Labor">Labor</th>
		<th data-field="Days">Days</th>
		</tr>
		</thead>

		<tbody>
		<tr>
		<td>Subtotal</td>
		<td>${subtotalMaterial.toFixed(2)}</td>
		<td>${totalLabor.toFixed(2)}</td>
		<td>3.1365</td>
		</tr>
		<tr>
		<td>Tax</td>
		<td>${taxMaterial.toFixed(2)}</td>
		<td></td>
		<td></td>
		</tr>
		<tr>
		<td>Total</td>
		<td>${totalMaterial.toFixed(2)}</td>
		<td>${totalLabor.toFixed(2)}</td>
		<td></td>
		</tr>	
		<tr>
		<td>Grand Total</td>
		<td>${grandTotal.toFixed(2)}</td>
		<td></td>
		<td></td>
		</tr>				
		</tbody>
		</Table>
		</Col>
		</Row>

		</div>
		)
}
}

export default NewEstimateRev1