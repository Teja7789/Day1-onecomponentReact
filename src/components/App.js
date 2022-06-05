import React from 'react';
// import './style.css';
import AppHeader from './AppHeader';
// import ClassComponent from './ClassComponent';
// import ClassComponent from './ClassComponent';
import WelcomeClass from './ClassComponent';
// import FunctionalComponent from './FunctionalComponents';
import {FunctionalComponent} from './FunctionalComponents'; // use {} brackects
import {PropsCompo} from './PropsCompo';
export default function App() {
  return (
    <div class="App">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen </p>
      <AppHeader name="Mani"></AppHeader>
      <AppHeader name="Nani"/>
      <AppHeader name="Venkat"/>
        {/* <AppHeader/> */}
        {/* <ClassComponent/> */}
        {/* <ClassComponent></ClassComponent> */}
        <WelcomeClass/>
        <FunctionalComponent/>
        {/* <PropsCompo /> */}
        
    </div>
  );
}
