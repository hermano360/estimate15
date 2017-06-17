import React, {Component} from 'react'




class SpecificationEntry extends Component {

   constructor(){
    super()
    this.state = {

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
      return shoppingCartFinal.map((product)=>{
        let keyValue = `${product.modelNo}-${product.template}`
        return (
          <TableEntry key={keyValue} product={product} onClickDelete={this.handleDelete} quantityChange={this.handleQuantityChange}/>
        )
      })
    }

    return (
    	<div>
      		<div style={{'backgroundColor': '#13788e', color: 'white', width:'100%', 'textAlign':'center', border:'black 1px solid'}}>Specifications</div>
      		<div>Certain Specifications</div>
          {renderShoppingCartItems()}
      </div>
      )
  }
}

export default SpecificationEntry