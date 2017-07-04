var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Converter = require("./Converter");


var target;
var known;



function renderConverter(){
   if (!(typeof known === "undefined")){
    ReactDOM.render(
        <Converter known={known} target={target} />,
        document.getElementById('converter')
        );}
}


function targetChange(event){
    target = event.target.value;
    renderConverter();
}

function knownChange(event){
    known = event.target.value;
    renderConverter();
}


function displayMenu(){
    
    ReactDOM.render(
        <select onChange={targetChange}>
            <option>(Select target clef)</option>
            <option value="frenchViolin">frenchViolin</option>
            <option value="treble">treble</option>
            <option value="soprano">soprano</option>
            <option value="mezzoSoprano">mezzoSoprano</option>
            <option value="alto">alto</option>
            <option value="tenor">tenor</option>
            <option value="cBaritone">cBaritone</option>
            <option value="fBaritone">fBaritone</option>
            <option value="bass">bass</option>
            <option value="subBass">subBass</option>
        </select>, 
    document.getElementById('target_selector')
    );
    
    ReactDOM.render(
        <select onChange={knownChange}>
            <option>(Select known clef)</option>
            <option value="frenchViolin">frenchViolin</option>
            <option value="treble">treble</option>
            <option value="soprano">soprano</option>
            <option value="mezzoSoprano">mezzoSoprano</option>
            <option value="alto">alto</option>
            <option value="tenor">tenor</option>
            <option value="cBaritone">cBaritone</option>
            <option value="fBaritone">fBaritone</option>
            <option value="bass">bass</option>
            <option value="subBass">subBass</option>
        </select>, 
    document.getElementById('known_selector')
    );
    
}


function Selector(props){
    return <Button onClick={displayMenu} />;
    
}


exports.Selector = Selector;
exports.target = target;
exports.known = known;