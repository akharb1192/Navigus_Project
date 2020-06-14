import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import "bootstrap/dist/css/bootstrap.css"
import CoolTabs from 'react-cool-tabs'
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,EventSettingsModel} from '@syncfusion/ej2-react-schedule'
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'

firebase.initializeApp({
  apiKey:"AIzaSyCgRXcf8CJR4Z_zGwDN6eO3dMcchFLsSl8",
  authDomain:"navigus-c1896.firebaseapp.com"
})
class Content1 extends Component {
  constructor() {
    super(...arguments);
    this.dataManger = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
}
  render() {
    return (<div className='schedule-control-section'>
        <div className='control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent width='100%' height='650px' selectedDate={new Date(2017, 5, 5)} eventSettings={{ dataSource: this.dataManger }} readonly={false}>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
          </div>
        </div>
      </div>);
  }
}
class Content2 extends Component {
  render() {
    return <div style={{marginTop:"25px"}}>
      <h4>This app is developed in interest of working with ReactJS Library <br/>and in any case bear no violation of copyrights of any existing project.<br/>
      The calender framework uses JSON parsing for storing and retrieving of schedules </h4>
    </div>
  }
}
class App extends Component {    
  
 state = {isSignedIn: false }
 uiConfig = {
   signInFlow:"popup",
   signInOptions:[
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     firebase.auth.GithubAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID
   ],
   callbacks: {
     signInSuccess: () => false
   }
 }
componentDidMount = ()=>{
  firebase.auth().onAuthStateChanged(user=>{
    this.setState({isSignedIn:!!user})
    console.log("user",user)
  })
}
 render(){
  return (
    <div className="App">
      {this.state.isSignedIn? (

        <span>
               
      <p className="alert alert-success">Signed In!</p>
    <div className="container" >
  <div className="row" style={{border:"none",background:"white",height:"210px"}}>
		<div className="col-xs-6">
    <img alt="profile picture" className="rounded img-responsive" style={{height:"210px",marginLeft:"0px"}} src={firebase.auth().currentUser.photoURL}/>
		</div>
		<div className="col-xs-6" style={{backgroundColor:"#D3D3D3"}}>  
    <h1 >Welcome {firebase.auth().currentUser.displayName}</h1>
			<p style={{fontSize:"20px",color:"#03225C"}}>We welcome you to Navigus portal for booking your slot as per your <br></br> convenience. This is an application developed for just testing purposes. All rights reserved.</p>
              
    </div>
    <div className="col-xs-6">  
      <button className="btn btn-primary btn-lg float-right" onClick={()=>firebase.auth().signOut()}>Sign Out</button>        
    </div>
	</div>
  <hr style={{height:"1px",backgroundColor:"black"}}/>
  </div>
  <div>
	     <CoolTabs
	       tabKey={'1'}
	       style={{ width:  1350, height:  500, background:  'white' }}
	       activeTabStyle={{ background:  'Black', color:  'white' }}
	       unActiveTabStyle={{ background:  'green', color:  'white' }}
	       activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
	       leftContentStyle={{ background:  'white' }}
	       rightContentStyle={{ background:  'white' }}
	       leftTabTitle={'Book Your Schedule Here'}
	       rightTabTitle={'About Organization '}
	       leftContent={<Content1/>}
	       rightContent={<Content2/>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
     </div>  
        </span>
        
      ):(
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
      }
}

export default App;
