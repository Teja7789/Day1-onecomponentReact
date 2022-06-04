import React from 'react';
// import './style.css';
import AppHeader from './AppHeader';
// import ClassComponent from './ClassComponent';
// import ClassComponent from './ClassComponent';
import WelcomeClass from './ClassComponent';
// import FunctionalComponent from './FunctionalComponents';
import {FunctionalComponent} from './FunctionalComponents'; // use {} brackects
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen </p>
      <AppHeader></AppHeader>
        {/* <AppHeader/> */}
        {/* <ClassComponent/> */}
        {/* <ClassComponent></ClassComponent> */}
        <WelcomeClass/>
        <FunctionalComponent/>
        
    </div>
  );
}
