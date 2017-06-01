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
      				"Google": 'http://placehold.it/250x250'
    			},
    			limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    			onAutocomplete: function(val){
    				that.handleOnAutocomplete(val)
    			},
    			minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
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
				</Input>

				<Table>
					<thead>
						<tr>
							<th data-field="Product">Product</th>
							<th data-field="Amt">Amt</th>
							<th data-field="Unit">UOM</th>
							<th data-field="Description">Description</th>
							<th data-field="Labor">Material</th>
							<th data-field="Template">Template</th>

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
			
						</tr>
						<tr>
							<td>Jonathan</td>
							<td>Lollipop</td>
							<td>$7.00</td>
							<td>$0.87$0.87$0.87$0.87$0.87$0.87$0.87$0.87</td>
							<td>Alan</td>
							<td>Jellybean</td>			
						</tr>
					</tbody>
				</Table>

				<div className="input-field col s12">
          			<i className="material-icons prefix">textsms</i>
          			<input type="text" id="autocomplete-input" className="autocomplete"/>
         			<label htmlFor="autocomplete-input">Autocomplete</label>
        		</div>


				<Autocomplete 
					data={{
						"Apple": null,
						"Googl3": 'http://placekitten.com/g/250/250',
						"Google": 'http://placehold.it/250x250'
					}} minLength={0} onClick={this.handleOnAutocomplete} ref="autocomplete"
				/>
			

			</Row>

    	</div>
      )
  }
}

export default NewEstimateRev1