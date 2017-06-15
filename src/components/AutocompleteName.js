import React, {Component} from 'react'
import ProductAccess from '../../api/ProductAccess'
import testProductAccess from '../../api/testProductAccess'


class AutocompleteName extends Component {

   constructor(){
    super()
    this.state = {

    }

  }

  componentDidMount(){
    let that = this;
    let allProductNames = testProductAccess.getAllNames();
    //this would later be a promise function
    $(document).ready(function(){
      $('input.autocomplete').autocomplete({
        data: allProductNames,
        limit: 10, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val){
          // that.handleOnAutocomplete(val)
          $('input.autocomplete').val("");
          that.props.onAddItem(val);
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
      });
    });
    }


  render(){
    return (
          <div className="input-field col s12">
            <input type="text" id="autocomplete-input" className="autocomplete"/>
              <label htmlFor="autocomplete-input">Type Here to Add Item</label>
          </div>  
      )
  }
}

export default AutocompleteName