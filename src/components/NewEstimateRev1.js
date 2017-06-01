import React, {Component} from 'react'

import {Row,Input,Icon,Col,Table,Autocomplete} from 'react-materialize'


class NewEstimateRev1 extends Component {
	constructor(){
	    super()
	    this.state = {
	    }
	    this.handleOnAutocomplete=this.handleOnAutocomplete.bind(this);
  	}
  	handleOnAutocomplete(val){
  		console.log(val)
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
				<Input s={6} label="Salesman" validate><Icon>account_circle</Icon></Input>
				<Input s={12} label="Project Description"/>
				<Input label="Scope" s={12} />
				<Input s={12} type='select' label="Template" defaultValue='0'>
					<option value='0'></option>
					<option value='1'>Option 1</option>
					<option value='2'>Option 2</option>
					<option value='3'>Option 3</option>
					<option value='4'>Option 4</option>
					<option value='5'>Option 5</option>
					<option value='6'>Option 6</option>
					<option value='7'>Option 7</option>
					<option value='8'>Option 8</option>
					<option value='9'>Option 9</option>

				</Input>
</Row>
<Row>
				<Table>
					<thead>
						<tr>
							<th data-field="Product">Product</th>
							<th data-field="Amt">Amt</th>
							<th data-field="Unit">UOM</th>
							<th data-field="Description">Description</th>
							<th data-field="Labor">Material</th>
							<th data-field="Template">Template</th>
							<th data-field="Edit">Edit</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Alvin</td>
							<td>Eclair</td>
							<td>$0.87</td>
							<td>$0.87$0.87$0.87$0.87$0.87$0.87$0.87$0.87</td>
							<td>Alan</td>
							<td>Jellybean</td>
							<td><Icon>mode_edit</Icon></td>
			
						</tr>
						<tr>
							<td>Alan</td>
							<td>Jellybean</td>
							<td>$3.76</td>
							<td>$0.87$0.87$0.87$0.87$0.87$0.87$0.87$0.87
								$0.87$0.87$0.87$0.87$0.87$0.87$0.87$0.87
							</td>
							<td>Alan</td>
							<td>Jellybean</td>
							<td><Icon>mode_edit</Icon></td>
			
						</tr>
						<tr>
							<td>Jonathan</td>
							<td>Lollipop</td>
							<td>$7.00</td>
							<td>$0.87$0.87$0.87$0.87$0.87$0.87$0.87$0.87</td>
							<td>Alan</td>
							<td>Jellybean</td>
							<td><Icon>mode_edit</Icon></td>		
						</tr>
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