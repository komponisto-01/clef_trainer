var React = require('react');
var ReactDOM = require('react-dom');

const text = <h2>My text will go here (or at least in this {'<div>'})</h2>;

function TextFunction(){
    return text;
};

module.exports = TextFunction;