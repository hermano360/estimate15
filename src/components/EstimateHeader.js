import React, {Component} from 'react'



class EstimateHeader extends Component {

   constructor(){
    super()
    this.state = {
      page:'intro'
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }


  render(){
    return (
      <div>
        <img src='http://via.placeholder.com/150x150'/>
        <div>
          <span>Pro Builders Express,Inc</span>
          1840 W Whittier Blvd, La Habra, CA 90631
          Phone: 866-360-1526 Fax 310-456-8302
          Phone: 562-921-5000
        </div>

        <div>
          Date: 30-May-17
          Page: Page 1 of 2
        </div>

      </div>
      )
  }
}

export default EstimateHeader