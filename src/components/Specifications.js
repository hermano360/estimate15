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
  putEmptyTemplatesAtEnd(array){
    let updatedArray = [
    ... array.filter((item)=>{
      if(item.template !== ""){
        return item
      }
    }),
    ... array.filter((item)=>{
      if(item.template === ""){
        return item
      }
    })
    ]
    return updatedArray
  }
    removeZeroQuantityItems(array){
    return array.filter((item)=>{
      if(parseFloat(item.qty) !== 0){
        return item
      }
    })
  }


  render(){
    let {shoppingCartFinal,itemTotals} = this.props;
    let itemTotalsWithTemplates = [];
    let itemTotalsWithoutZeros = this.removeZeroQuantityItems(itemTotals);

    let itemTotalsNumbered = itemTotalsWithoutZeros.map((item,i)=>{
      let newItem = item
      newItem["number"] = i+1
      return newItem
    })

    itemTotalsNumbered.forEach((item)=>{
      if(itemTotalsWithTemplates.indexOf(item.template) === -1 && item.template !== ""){
        itemTotalsWithTemplates.push(item.template);
      }
      itemTotalsWithTemplates.push(item);
    })

    let latestItemTotals = this.putEmptyTemplatesAtEnd(itemTotalsWithTemplates)


    const renderShoppingCartItems = () =>{
      if(latestItemTotals.length > 0 ){
            return latestItemTotals.map((item)=>{
              if(typeof item === 'string'){
                      return (<div key={item}>
                                <div style={{color:'white','width':'100%','minHeight':'10px','border':'1px white solid'}}>TestTest</div>
                                <div style={{textAlign: 'center',width:'100%','fontSize':'15px', 'fontWeight': 'bold','margin':'0 0 20px 0'}}>{item}</div>
                              </div>
                      )

              } else {
                      return (
                        <div key={`${item.modelNo}-${item.template}`}>
                         <div style={{float: 'left','fontSize':'10px','marginLeft':'5%','textAlign':'center','width':'5%','minHeight':'40px'}}>{item.number}</div>
                         <div style={{float: 'left','marginLeft':'10px','fontSize':'10px','textAlign':'center','width':'75%'}}>{item.description}</div>
                         <div style={{float: 'left','marginLeft':'10px','fontSize':'10px','textAlign':'center','width':'5%'}}>{item.qty} {item.uom}</div>
                         <div style={{"borderBottom": "1px solid black", position:"relative", width:'90%',left:"5%"}}>
                          <div style={{"color":"white",'marginTop':'5px'}}>.</div>
                        </div>
                         <br/>
                        </div>
                      )
                    }
            })
          } else {
            debugger
            return (
                        <div style={{color:'white','width':'100%','minHeight':'100px'}}>.</div>
                      )
          }
    }

    return (
    	<div>
        <br/>
          <div style={{float: 'left','marginLeft':'5%','backgroundColor': '#13788e', color: 'white', width:'7%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>#</div>
      		<div style={{float: 'left','backgroundColor': '#13788e', color: 'white', width:'76%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>Specifications</div>
          <div style={{float: 'left','backgroundColor': '#13788e', color: 'white', width:'7%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>Qty</div>

          {renderShoppingCartItems()}
      </div>
      )
  }
}

export default Specifications
