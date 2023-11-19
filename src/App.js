import css from "./Styles.css";
import React from "react";
import { useState,useRef } from 'react';
import { flushSync } from 'react-dom';
import Dekor from './assets/dekor1.svg';
import  CommandLine  from './CommandLine.js';

export default function App()  {
    const [lines,setNewLine] = useState([<p key={0}>No coz, poczatki sa trudne.</p>]);
    const uiRef = useRef(null);
    const clRef = useRef(null);

    // + window.innerWidth
    //const lines = ["No coz, poczatki sa trudne."]
    function handleSubmit(e) {

      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const formJson = formData.get("newLine");
      //lines.push(formJson);
      let newP = <p key={lines.length}>{formJson}</p>;
      //console.log(uiRef);
      flushSync(() => {setNewLine(current => [...current, newP ])})
      
      
      
      //uiRef.current?.lastElementChild?.scrollIntoView();
      //const formJson = Object.fromEntries(formData.entries("newLine"));
    //  console.log(formJson);
    uiRef.current?.lastElementChild?.scrollIntoView(false);
console.log(uiRef.current.lastElementChild);
    //  console.log(lines);
      //lines.concat("hhh\n");
      //let buf = lines + '\n';
    //  console.log(buf);
    //  setLine( lines + formJson + "\n" );
      //   setLine(lines + formJson + "\n");
      }

      const commandLine = <CommandLine className='commandLine' 
         getNewLine={ (e) => {handleSubmit(e)} } /> ;
      return (
        
      <div className='ui' ref={uiRef}>
        <div className='header'>
          <Dekor className="dekorLeft"/>
          <div className ="title">
            LIZARD MAGIC PART II:
            <div className ="subTitle">
              DELIVERANCE
            </div>
          </div>
          <Dekor className="dekorRight"/>
        </div>
        <div className='output'>
          <div className='lines'>
            {lines}
          </div>
        </div>
          
            {commandLine}
          
      </div>
    );

}
