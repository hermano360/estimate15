import React, {Component} from 'react'
import Map from './Map'
import Places from './Places'
import ReportForm from './ReportForm'
import superagent from 'superagent'
import {Button, Icon,Row, Input} from 'react-materialize'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      venues:[],
      page:'welcome'
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleButton=this.handleButton.bind(this);
    this.submitReport=this.submitReport.bind(this);
  }

  handleClick(){
    // $('.button-collapse').sideNav('hide')
    this.setState({
      page:'IconPage'
    })
  }

  submitReport(){
    this.setState({
      page:'welcome'
    })
  }

  handleButton(){
    this.setState({
      page:'ReportForm'
    })
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
    if(this.state.page === 'welcome'){
      return (
        <div>
          <ul id="slide-out" className="side-nav">
            <li><div className="userView">
              <div className="background">
                <img src="images/office.jpg"/>
              </div>
              <a ><img className="circle" src="images/yuna.jpg"/></a>
              <a href="#!name"><span className="white-text name">John Doe</span></a>
              <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a href="#!"><i className="material-icons" onClick={this.handleClick}>cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          <Button node='a' waves='light'>Welcome</Button>


          <div style={{width:300,height:400}}>
            <Map center={location} markers={this.state.venues}/>
          </div>

          <Row>
      <Input placeholder="Search Location" s={1} label="Search" />
    </Row>
    <Button waves='light' onClick={this.handleButton}>Report<i className="material-icons">location_on</i></Button>

          <Places venues = {this.state.venues}/>
        </div>
      )
    } else if(this.state.page==="IconPage"){
      return (
        <h1>Icon Page</h1>
      )
    } else if(this.state.page==='ReportForm'){
      return (
        <ReportForm submitReport={this.submitReport}/>
      )
    }


  }
}

export default Main
