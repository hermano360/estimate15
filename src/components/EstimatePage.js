import React, {Component} from 'react'
import {Row,Col} from 'react-materialize'
import EstimateHeader from './EstimateHeader'
import CustomerInfo from './CustomerInfo'
import ScopeOfWork from './ScopeOfWork'
import Specifications from './Specifications'
var axios = require('axios');


class EstimatePage extends Component {

   constructor(){
    super()
    this.state = {
    	cows:5
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }
  componentDidMount(){
  	let html = $('#printThisBitch')[0].outerHTML;

  	console.log(html)
  	var requestUrl = `/pdfTest`
	axios({
	    method: 'post',
	    url: requestUrl,
	      data: {
	        html
	      }
	    }).then(function(res){
	          console.log('successful')
	        }).catch(function (error) {
	          console.log('not successful')
	    		console.log(error);
	  		})

// pdf.create($('html')[0]).toFile(['/test.pdf'],function(err, res){
//   console.log(res.filename);
// });

    // var pdf = new jsPDF('p', 'pt', 'letter'),
    // // source can be HTML-formatted string, or a reference
    // // to an actual DOM element from which the text will be scraped.
    // source = $('#printThisBitch')[0],
    

    // // we support special element handlers. Register them with jQuery-style 
    // // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // // There is no support for any other type of selectors 
    // // (class, of compound) at this time.
    // specialElementHandlers = {
    //     // element with id of "bypass" - jQuery style selector
    //     // '#bypassme': function (element, renderer) {
    //     //     // true = "handled elsewhere, bypass text extraction"
    //     //     return true
    //     // }
    // };
    // let margins = {
    //     top: 80,
    //     bottom: 60,
    //     left: 40,
    //     width: 522
    // };
    // // all coords and widths are in jsPDF instance's declared units
    // // 'inches' in this case
    // pdf.fromHTML(
    // source, // HTML string or DOM elem ref.
    // margins.left, // x coord
    // margins.top, { // y coord
    //     'width': margins.width, // max width of content on PDF
    //     'elementHandlers': specialElementHandlers
    // },

    // function (dispose) {
    //     // dispose: object with X, Y of the last line add to the PDF 
    //     //          this allow the insertion of new lines after html
    //     pdf.save('Test.pdf');
    // }, margins);
  }


  render(){
    return (
	<div id="printThisBitch" >
	        <img src='file:///placeholder.png' alt="BQueen"/>
	        <img src='placeholder.png' alt="BQueen"/>
	        <img src='file:\\\placeholder.png' alt="BQueen"/>
	        <img src='http://via.placeholder.com/350x150' alt="BQueen"/>
	        
        <div>
          <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
        </div>

        <div style={{color:"blue"}}>
          Date: 30-May-17
          Page: Page 1 of 2
        </div>
	There are {this.state.cows}
	      <div>
      Customer: First Last
      Quote:
      Date: 5/30/2017
      By: Bob Leon
      Desc: ...<span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000<span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000<span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000<span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
                    <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
          <EstimateHeader/>
      </div>
      <div>
        <div style={{'backgroundColor': '#13788e', color: 'white', width:'100%', 'textAlign':'center', border:'black 1px solid'}}> Scope Of Work </div>
        <div className="scope-of-work-text" >Scope of Work that was put in during the estimate</div>
      </div>






	</div>
      )
  }
}

export default EstimatePage