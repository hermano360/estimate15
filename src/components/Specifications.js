import React, {Component} from 'react'
import SpecificationEntry from './SpecificationEntry.js'



class Specifications extends Component {

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
    let {shoppingCartFinal} = this.props;
    console.log(shoppingCartFinal);
    let shoppingCartTemplates = [];
    shoppingCartFinal.forEach((item)=>{
      if(shoppingCartTemplates.indexOf(item.template) === -1){
        shoppingCartTemplates.push(item.template);
      }
    })

    const renderShoppingCartItems = () =>{
      return shoppingCartFinal.map((item,i)=>{
        return (
          <div>
            <br/>
           <div style={{float: 'left','font-size':'10px','margin-left':'20px'}}>{i}</div> <div style={{float: 'left','margin-left':'20px','font-size':'10px'}}>{item.description}</div>
           <div style={{"border-bottom": "1px solid black", position:"relative", width:'90%',left:"5%"}}>
          <div style={{"color":"white"}}> Baller </div>
          </div>
           <br/>
          </div>
        )
      })
    }

    return (
    	<div>
      		<div style={{'backgroundColor': '#13788e', color: 'white', width:'100%', 'textAlign':'center', border:'black 1px solid'}}>Specifications</div>
          {renderShoppingCartItems()}
      </div>
      )
  }
}

export default Specifications