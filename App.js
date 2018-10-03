
import App from './router';

import React,{Component} from 'react';
import {rootNavigator} from './router';


export default class Controller extends Component{

  constructor(props){
    super(props);
    this.state = {
      userSession : false,
    };
  }

  // componentWillMount() {
  //   this.setState({ userSession: true});
  // }

  render(){
    const { userSession } = this.state;
    const Apptemplates = rootNavigator(userSession);
    return <Apptemplates/>;
  }
}