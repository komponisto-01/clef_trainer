var React = require('react');
var ReactDOM = require('react-dom');


function Button(props){
    return <button type="button" onClick={props.onClick} className={props.class}>{props.text}</button>;
}
    
module.exports = Button;