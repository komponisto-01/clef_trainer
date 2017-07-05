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
            <option value="frenchViolin">French Violin</option>
            <option value="treble">Treble</option>
            <option value="soprano">Soprano</option>
            <option value="mezzoSoprano">Mezzo-soprano</option>
            <option value="alto">Alto</option>
            <option value="tenor">Tenor</option>
            <option value="cBaritone">Baritone (C)</option>
            <option value="fBaritone">Baritone (F)</option>
            <option value="bass">Bass</option>
            <option value="subBass">Sub-bass</option>
        </select>, 
    document.getElementById('target_selector')
    );
    
    ReactDOM.render(
        <select onChange={knownChange}>
            <option>(Select known clef)</option>
            <option value="frenchViolin">French Violin</option>
            <option value="treble">Treble</option>
            <option value="soprano">Soprano</option>
            <option value="mezzoSoprano">Mezzo-soprano</option>
            <option value="alto">Alto</option>
            <option value="tenor">Tenor</option>
            <option value="cBaritone">Baritone (C)</option>
            <option value="fBaritone">fBaritone (F)</option>
            <option value="bass">Bass</option>
            <option value="subBass">Sub-bass</option>
        </select>, 
    document.getElementById('known_selector')
    );
    
}


function Selector(props){
    return <Button onClick={displayMenu} text="Start" />;
    
}


exports.Selector = Selector;
exports.target = target;
exports.known = known;