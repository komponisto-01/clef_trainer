var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');


// Clefs are arrays of pitches: they take an integer (representing staff
// position) and output a pitch.

var frenchViolin = ["a", "b", "c'", "d'", "e'", "f'", "g'", "a'", "b'", 
    "c''", "d''", "e''", "f''", "g''", "a''", "b''", "c''", "d'''", "e'''", 
    "f'''", "g'''"];

var treble = ["f", "g", "a", "b", "c'", "d'", "e'", "f'", "g'", "a'", "b'", 
    "c''", "d''", "e''", "f''", "g''", "a''", "b''", "c''", "d'''", "e'''"];

var soprano = ["d", "e", "f", "g", "a", "b", "c'", "d'", "e'", "f'", "g'",
    "a'", "b'", "c''", "d''", "e''", "f''", "g''", "a''", "b''", "c''"];

var mezzoSoprano = ["b,","c","d", "e", "f", "g", "a", "b", "c'", "d'", 
"e'", "f'", "g'","a'", "b'", "c''", "d''", "e''", "f''", "g''", "a''"];

var alto = ["g,", "a,", "b,","c","d", "e", "f", "g", "a", "b", "c'", "d'", 
"e'", "f'", "g'","a'", "b'", "c''", "d''", "e''", "f''"];

var tenor = ["e,", "f,", "g,", "a,", "b,","c","d", "e", "f", "g", "a", "b",
"c'", "d'", "e'", "f'", "g'","a'", "b'", "c''", "d''"];

var cBaritone = ["c,", "d,", "e,", "f,", "g,", "a,", "b,","c","d", "e",
"f", "g", "a", "b", "c'", "d'", "e'", "f'", "g'","a'", "b'",];

var fBaritone = ["c,", "d,", "e,", "f,", "g,", "a,", "b,","c","d", "e",
"f", "g", "a", "b", "c'", "d'", "e'", "f'", "g'","a'", "b'",];

var bass = ["a,,","b,,","c,", "d,", "e,", "f,", "g,", "a,", "b,","c","d", "e",
"f", "g", "a", "b", "c'", "d'", "e'", "f'", "g'",];

var subBass = ["f,,", "g,,", "a,,","b,,","c,", "d,", "e,", "f,", "g,", 
"a,", "b,","c","d", "e", "f", "g", "a", "b", "c'", "d'", "e'"];

var getClef = {frenchViolin:frenchViolin, treble:treble, soprano:soprano,
    mezzoSoprano:mezzoSoprano, alto:alto, tenor:tenor, cBaritone:cBaritone,
    fBaritone:fBaritone, bass:bass, subBass:subBass};


// These functions convert positions in a given clef to the corresponding 
//position in the treble clef:

// function frenchViolinToTreble(position){
//     return position + 2;
// };

// function trebleToTreble(position){
//     return position;
// };

// function sopranoToTreble(position){
//     return position - 2;
// };

// function mezzoSopranoToTreble(position){
//     return position - 4;
// };

// function altoToTreble(position){
//     return position + 1;
// };

// function tenorToTreble(position){
//     return position - 1;
// };

// function cBaritoneToTreble(position){
//     return position - 3;
// };

// function fBaritoneToTreble(position){
//     return position -3;
// };

// function bassToTreble(position){
//     return position + 2;
// };

// function subBassToTreble(position){
//     return position;
// };

//These functions convert positions in the treble clef to corresponding 
//positions in other clefs:

// function trebleToFrenchViolin(position){
//     return position - 2;
// };

// function trebleToSoprano(position){
//     return position + 2;
// };

// function trebleToMezzoSoprano(position){
//     return position + 4;
// };

// function trebleToAlto(position){
//     return position - 1;
// };

// function trebleToTenor(position){
//     return position + 1;
// };

// function trebleToCBaritone(position){
//     return position + 3;
// };

// function trebleToFBaritone(position){
//     return position + 3;
// };

// function trebleToBass(position){
//     return position -2;
// };

// function trebleToSubBass(position){
//     return position;
// };

//The converter component:

function Converter(props){
    var position;
    var converted_position;
    
    function getTargetClef(){
        return getClef[props.target];
    }
    
    function getKnownClef(){
        return getClef[props.known];
    }
    function getPosition(){
        return position;
    }
    function getConvertedPosition(){
        return converted_position;
    }
    //This function (chooses and?) applies the appropriate conversion function:
    function conversionFunction() {
    converted_position = position;
        ReactDOM.render(<h2>{getKnownClef()[getConvertedPosition()]}</h2>,
        document.getElementById('conversion_display')
        );  
    }
    //This function returns a random clef position:
    function randomPosition (){
        position = Math.floor(Math.random()*22);
        return position;
    }
    
    function displayRandomPosition() {
        randomPosition();
        ReactDOM.render(<h2>{getTargetClef()[getPosition()]}</h2>,
        document.getElementById('position_display')
        );  
        ReactDOM.render(<h2>{' '}</h2>,
        document.getElementById('conversion_display')
        );
    }
    //The get-position button subcomponent:
    function PositionButton(props){
        return <Button onClick={displayRandomPosition} />;
    }
    //The convert button subcomponent:
    function ConvertButton(props){
        return <Button onClick={conversionFunction} />;
    }    
        return <div>
        <PositionButton /> 
        <ConvertButton />
        </div> ;
}

module.exports = Converter;