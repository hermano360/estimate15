import React, {Component} from 'react'
import {Row,Input,Icon,Col,Table,Autocomplete} from 'react-materialize'

import TableElement from './TableElement'
import ProductAccess from '../../api/ProductAccess'
import templateConfig from '../../api/templateConfig'

class NewEstimateRev1 extends Component {
	constructor(){
	    super()
	    this.state = {
	    	templateValue:'0',
	    	salesmanValue:'empty',
			shoppingCart:[]
	    }
	    this.handleOnAutocomplete=this.handleOnAutocomplete.bind(this);
	    this.handleTemplateChange=this.handleTemplateChange.bind(this);
	    this.handleSalesmanChange=this.handleSalesmanChange.bind(this);
	    this.handleItemDelete=this.handleItemDelete.bind(this); 
  	}
  	handleOnAutocomplete(val){
  		console.log(val)
  	}
  	handleTemplateChange(){
  		console.log(templateConfig[event.target.innerHTML]);
  		this.setState({
  			templateValue:event.target.innerHTML
  		})
  	}
  	handleSalesmanChange(){
  		console.log(event.target.innerHTML);
  		this.setState({
  			salesmanValue:event.target.innerHTML
  		})
  	}
  	handleItemDelete(productIdentifier){
  		const currentCart = this.state.shoppingCart;
  		const updatedCart = currentCart.filter((product)=>{
  			return product.name === productIdentifier ? false : true
  		})
  		this.setState({
  			shoppingCart:updatedCart
  		})
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

  render() {
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
				<Input s={12} type='select' label="Template" defaultValue={this.state.templateValue} onChange={this.handleTemplateChange}>
					<option value='0'></option>
					<option value='Bath1'>Bath1</option>
					<option value='Kitchen1'>Kitchen1</option>
					<option value='Livingroom1'>Livingroom1</option>
				</Input>
			</Row>
			<Row>
					<TableElement shoppingCart={this.state.shoppingCart} onItemDelete={this.handleItemDelete}/>
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
							<td>$372.79</td>
							<td>$766.70</td>
							<td>3.1365</td>
						</tr>
						<tr>
							<td></td>
							<td>$18.64</td>
							<td>$513.36</td>
							<td>3.1365</td>
						</tr>
						<tr>
							<td></td>
							<td>$319.43</td>
							<td>$1,380.06</td>
							<td></td>
						</tr>
						<tr>
							<td>Tax</td>
							<td>$32.29</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Total</td>
							<td>$423.72</td>
							<td>$1,380.06</td>
							<td></td>
						</tr>	
						<tr>
							<td>Grand Total</td>
							<td>$1803.78</td>
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