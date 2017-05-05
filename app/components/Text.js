var React = require('react');
var ReactDOM = require('react-dom');


const text = <h2>My text will go here (or at least in this {'<div>'})</h2>;

function Text(props){
    if (props.state == 1){
    return text;
        }
    if (props.state == 0){
        return <h2></h2>;
        }
    }

module.exports = Text;