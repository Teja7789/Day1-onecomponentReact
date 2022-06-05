import React from 'react';
// import './style.css';
import AppHeader from './AppHeader';
// import ClassComponent from './ClassComponent';
// import ClassComponent from './ClassComponent';
import WelcomeClass from './ClassComponent';
// import FunctionalComponent from './FunctionalComponents';
import {FunctionalComponent} from './FunctionalComponents'; // use {} brackects
import {PropsCompo} from './PropsCompo';
import Message from './Message';
export default function App() {
  return (
    <div class="App">
       {/* props */}
       <Message/>
         {/* props */}
      {/* <AppHeader name="Mani" heroName="Batman"> 
      <p>This is children props</p></AppHeader>
      <AppHeader name="Nani" heroName="Superman">
        <button>Action</button>
      </AppHeader>
      <AppHeader name="Venkat" heroName="Hanu"/> */}
      {/* class attribute to props  */}
      {/* <WelcomeClass name="Mani" heroName="Batman" />
      <WelcomeClass name="Nani" heroName="Superman" />
      <WelcomeClass name="Venkat" heroName="Hanu" /> */}
        {/* <AppHeader/> */}
        {/* <ClassComponent/> */}
        {/* <ClassComponent></ClassComponent> */}
       
        {/* <FunctionalComponent/> */}
        {/* <PropsCompo /> */}
        
    </div>
  );
}
