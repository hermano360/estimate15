import React, {Component} from 'react'



class ProposedItem extends Component {

   constructor(){
    super()
    this.state = {
      visible:true
    }
    this.onSelect=this.onSelect.bind(this)
  }
  onSelect(){
    const {modelNo} = this.props
  	this.props.onSelect(modelNo)
    this.setState({
      visible:false
    })
  }

  render(){
    let {description,photo,modelNo} = this.props
    const visibility=()=>{
      if(this.state.visible){
        return (
          <div onClick={this.onSelect}>{description} - {modelNo}</div>
        )
      }
    }
    return (
        <div>
        {visibility()}
        </div>
    )

  }
}

export default ProposedItem