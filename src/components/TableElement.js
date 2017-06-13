import React, {Component} from 'react'
import {Icon,Table} from 'react-materialize'
import TableEntry from './TableEntry'


class TableElement extends Component {

   constructor(){
    super()
    this.state = {

    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }
  handleDelete(productIdentifier){
  	this.props.onItemDelete(productIdentifier)
  }

    componentDidMount(){
    	console.log(this.props.shoppingCart)
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
  	console.log(shoppingCart);
  	const renderTableEntry = ()=>{
  		return shoppingCart.map((product)=>{
  			console.log(product);
  			return (
  				<TableEntry key={product.modelNo} product={product} onClickDelete={this.handleDelete}/>
  			)
  		})
  	}

    return (
      <Table>
		<thead>
			<tr>
				<th data-field="Name">Name</th>
				<th data-field="Category">Category</th>
				<th data-field="ModelNo">ModelNo</th>
				<th data-field="Price">Price</th>
				<th data-field="Unit">UOM</th>
				<th data-field="Description">Description</th>
				<th data-field="Labor">Material</th>
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