import React, {Component} from 'react'
import ProductAccess from '../../api/ProductAccess'
import ProposedItem from './ProposedItem'
import {Button, Icon, Dropdown , NavItem,Row, Col} from 'react-materialize'


class AllItems extends Component {

   constructor(){
    super()
    this.state = {
    	categories:[],
    	products:[]
    }
    this.handleFinish=this.handleFinish.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
  }

  handleFinish(){
  	this.props.handleFinish()
  }

  handleSelect(modelNo){
  	this.props.handleAddItem(modelNo)
  }

  componentDidMount(){
  	let categories = []
  	ProductAccess.allProducts().then((products)=>{
  		products = [...products]
  		products.forEach((product)=>{
  			if(categories.indexOf(product.category)===-1){
  				categories.push(product.category)
  			}
  		})
  		this.setState({
  			products,
  			categories
  		})
      }, function(errorMessage){
        console.log(errorMessage);
      })
  }


  render(){
  	let {categories,products} = this.state
  	const categoryItems = (category)=>{
  		return products.filter((product)=>{ return product.category === category})
  	}
  	const categorization = ()=>{
  		let sectionedCategories = categories.map((category)=>{
  			let categoryDivision = [category]
  			categoryItems(category).forEach((product)=> categoryDivision.push(product))
  			return categoryDivision
  		})

  		let combinedCategories = []
  		sectionedCategories.forEach((section)=>{
  			section.forEach((item)=> combinedCategories.push(item))
  		})

  		return combinedCategories.map((item)=>{
  			if(typeof item === 'string'){
  				return (<label className="small-12" key={item}>{item}</label>)
  			} else {
  				return (
  					<ProposedItem key={item.modelNo} {...item} onSelect={this.handleSelect}/>
					)
  			}
  		})
  	}
    return (
      <div>
      <Button onClick={this.handleFinish}>Finish</Button>
      {categorization()}
      <Button onClick={this.handleFinish}>Finish</Button>
      </div>
      )
  }
}

export default AllItems