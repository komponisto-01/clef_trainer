var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Converter = require("./Converter");

// function hello(){
//     alert('hello world!');
// };

var target;
var known;

function targetFrenchViolin(){
    target = 'frenchViolin';
}
function targetTreble(){
    target = 'treble';
}
function targetSoprano(){
    target = 'soprano';
}
function targetMezzoSoprano(){
    target = 'mezzoSoprano';
}
function targetAlto(){
    target = 'alto';
}
function targetTenor(){
    target = 'tenor';
}
function targetCBaritone(){
    target = 'cBaritone';
}
function targetFBaritone(){
    target = 'fBaritone';
}
function targetBass(){
    target = 'bass';
    alert("target = bass");
}
function targetSubBass(){
    target = 'subBass';
}

function knownFrenchViolin(){}
function knownTreble(){
    known = 'treble';
    alert("known = treble");
    renderConverter();
}
function knownSoprano(){
    known = 'soprano';
}
function knownMezzoSoprano(){
    known = 'mezzoSoprano';
}
function knownAlto(){
    known = 'alto';
}
function knownTenor(){
    known = 'tenor';
}
function knownCBaritone(){
    known = 'cBaritone';
}
function knownFBaritone(){
    known = 'fBaritone';
}
function knownBass(){
    known = 'bass';
}
function knownSubBass(){
    known = 'subBass';
}

function renderConverter(){
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