var React = require('react');
var ReactDOM = require('react-dom');

const text = <h2>My text will go here (or at least in this {'<div>'})</h2>;

function Text(props){
    if (props.state == 1){
    // alert("It's text time!");    
    return text;
    }
    if (props.state == 0){
        // alert("text should be absent!")
        // return <h2>this is state-0 text</h2>;
        return <h2></h2>}
    
    
}

module.exports = Text;