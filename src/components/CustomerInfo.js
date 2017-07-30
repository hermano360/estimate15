import React, {Component} from 'react'


class CustomerInfo extends Component {

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
    let today = new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateString = `${today.getDate()}-${monthNames[today.getMonth()]}-${today.getFullYear()}`;
    return (
      <div>
        <img src="http://cdn.homeadvisor.com/files/eid/8700000/8707399/2395760.jpg?modifyDateTime=1391029484000" style={{width:'100px',height:'100px','marginLeft':'5%','marginRight':'20px','float':'left'}}/>
        <div style={{fontWeight:'bold',fontSize:'10px',float:"left",height:'100px', width:'50px', 'marginRight':'15px'}}>
          Customer:
        </div>
        <div style={{fontSize:'10px',float:"left",height:'100px', width:'12%', 'marginRight':'3%'}}>
          Carlos Vela
          <br/>
          1629 Second Street
          <br/>
          Duarte, CA
        </div>
        <div style={{fontWeight:'bold',fontSize:'10px',float:"left",height:'100px', width:'30px', 'marginRight':'15px'}}>
          Quote:
          <br/>
          Date:
          <br/>
          By:
          <br/>
          Desc:
        </div>
                <div style={{fontSize:'10px',float:"left",height:'100px', width:'180px', 'marginRight':'50px','wordWrap':'break-word'}}>
          Melissa - Full Downstairs addition
          <br/>
          {dateString}
          <br/>
          {this.props.salesman}
          <br/>
          {this.props.description}
        </div>
        <br/>
        <p style={{'minHeight': '1px', width:'100%',float:'left'}}></p>
        <div style={{float: 'left','marginLeft':'5%','backgroundColor': '#13788e', color: 'white', width:'90%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>Scope of Work</div>
          <p style={{'minHeight': '50px',marginLeft:'5%', width:'90%',float:'left',marginTop:'20px'}}>{this.props.scopeText}</p>
      </div>
      )
  }
}

export default CustomerInfo
