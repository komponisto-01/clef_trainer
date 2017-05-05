var React = require('react');
var ReactDOM = require('react-dom');


function Button(props){
    return <button type="button" onClick={props.onClick}>Click Me!</button>;
}
    
module.exports = Button;