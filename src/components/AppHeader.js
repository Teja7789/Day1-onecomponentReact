import React from 'react';
const AppHeader = (props) => {
  // console.log(props.name)
  //props are immutable (not changeable)
  return(
    <div>
      <h3>Created {props.name} - {props.heroName} component</h3>
      {props.children}
      </div>

  );
}
 
export default AppHeader;


































// import React from 'react';


// const AppHeader = () => {
//   return (
// <div>
// lndflknsvldks
// </div>
//   );
// }
// export default AppHeader;