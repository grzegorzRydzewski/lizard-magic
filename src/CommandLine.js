import React from "react";
import { useState } from 'react';
import css from "./Styles.css";
//import "./Styles.css";
import ZnakZachety from './assets/znak-zachety.svg';
export default function CommandLine( { getNewLine , newLine } ) {
//  constructor(props) {
  //  super(props);
    //this.state = {value: ''};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
//  }

//  handleChange(event) {
//   this.setState({value: event.target.value});
// }

  //handleSubmit(event) {
    //alert('Podano następujące imię: ' + this.state.value);

  //  event.preventDefault();
//  }

  //render() {/
///*viewBox="0 0 141.73 141.73"*/
    return (
      <form className="commandLine" onSubmit={ (e) => {getNewLine(e)}}>

          <ZnakZachety className="arrowSign"/>
          <input type="text" className='textField' name="newLine" autoComplete="off"  />
          <input type="submit" className='inputButton' value="Enter" />
      </form>
    );

}
//scrollintoview
//onChange={() => {this.handleChange}}
