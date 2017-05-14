import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'
import {Button, Icon,Col,Card} from 'react-materialize'

class App extends Component {
  constructor(){
    super()
    this.state = {
      venues:[]
    }
  }

  componentDidMount(){
    console.log('componentDidMount')



    const url = 'https://api.foursquare.com/v2/venues/search?ll=40.7575285,-73.988&oauth_token=3Y5LCD3XPPULYMFGULXPXZRL4B4DIK33VQM5KWV3SQ4CMLMJ&v=20170514'
    superagent
    .get(url)
    .query(null)
    .set('Accept','text/json')
    .end((err,response)=>{
      const venues = response.body.response.venues
      console.log(JSON.stringify(venues))
      this.setState({
        venues:venues
      })

    })
  }
  render(){
    const location ={
      lat:40.7575285,
      lng:-73.988
    }

    // const markers = [
    //   {
    //     location:{
    //       lat:40.7575285,
    //       lng:-73.988
    //     }
    //   }
    // ]
    return (
      <div>

        <div style={{width:300,height:400}}>
          <Map center={location} markers={this.state.venues}/>
        </div>
        <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
        <Col m={6} s={12}>
    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    I am a very simple card.
    </Card>
</Col>

        <Places venues = {this.state.venues}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
