var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Converter = require("./Converter");

// function hello(){
//     alert('hello world!');
// };

var target;
var known;

function targetBass(){
    target = 'bass';
    alert("target = bass");
}

function knownTreble(){
    known = 'treble';
    alert("known = treble");
    ReactDOM.render(
        <Converter known={known} target={target} />,
        document.getElementById('converter')
        );
}

function displayMenu(){
    ReactDOM.render(<a href="#" onClick={targetBass}>Target</a>,
    document.getElementById('dropdown1')
    );
    ReactDOM.render(<a href="#" onClick={knownTreble}>Known</a>,
    document.getElementById('dropdown2')
    );
}

function Selector(props){
    return <Button onClick={displayMenu} />;
    
}


exports.Selector = Selector;
exports.target = target;
exports.known = known;