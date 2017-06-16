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
      <div style={{top:0}}>
          <img src='./public/placeholder.png' alt="BQueen"/>
          <img src='placeholder.png' alt="BQueen"/>
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

      </div>
      )
  }
}

export default EstimateHeader