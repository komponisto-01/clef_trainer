var React = require('react');
var ReactDOM = require('react-dom');

// function Button(props){
//     return (
//         <h2>My button will go here.</h2>
//         );
// };

// module.exports = Button;

function buttonFunction(){
    alert('Hello world!');
}

const button = <button type="button" onClick={buttonFunction}>Click Me!</button>;
// <h2>My button will go here (or at least in this {'<div>'})</h2>


    
module.exports = button;

