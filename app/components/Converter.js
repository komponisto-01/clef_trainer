var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

//Storing image links in variables, for brevity.

var trebleF3 = <img src="./app/images/treble/treble_F3.png"  />;
var trebleG3 = <img src="./app/images/treble/treble_G3.png"  />;
var trebleA3 = <img src="./app/images/treble/treble_A3.png" />;
var trebleB3 = <img src="./app/images/treble/treble_B3.png"  />;
var trebleC4 = <img src="./app/images/treble/treble_C4.png"  />;
var trebleD4 = <img src="./app/images/treble/treble_D4.png"  />;
var trebleE4 = <img src="./app/images/treble/treble_E4.png"  />;
var trebleF4 = <img src="./app/images/treble/treble_F4.png"  />;
var trebleG4 = <img src="./app/images/treble/treble_G4.png"  />;
var trebleA4 = <img src="./app/images/treble/treble_A4.png"  />;
var trebleB4 = <img src="./app/images/treble/treble_B4.png"  />;
var trebleC5 = <img src="./app/images/treble/treble_C5.png"  />;
var trebleD5 = <img src="./app/images/treble/treble_D5.png"  />;
var trebleE5 = <img src="./app/images/treble/treble_E5.png"  />;
var trebleF5 = <img src="./app/images/treble/treble_F5.png"  />;
var trebleG5 = <img src="./app/images/treble/treble_G5.png"  />;
var trebleA5 = <img src="./app/images/treble/treble_A5.png"  />;
var trebleB5 = <img src="./app/images/treble/treble_B5.png"  />;
var trebleC6 = <img src="./app/images/treble/treble_C6.png"  />;
var trebleD6 = <img src="./app/images/treble/treble_D6.png"  />;
var trebleE6 = <img src="./app/images/treble/treble_E6.png"  />;

var bassA1 = <img src="./app/images/bass/bass_A1.png"  />;
var bassB1 = <img src="./app/images/bass/bass_B1.png"  />;
var bassC2 = <img src="./app/images/bass/bass_C2.png"  />;
var bassD2 = <img src="./app/images/bass/bass_D2.png"  />;
var bassE2 = <img src="./app/images/bass/bass_E2.png"  />;
var bassF2 = <img src="./app/images/bass/bass_F2.png"  />;
var bassG2 = <img src="./app/images/bass/bass_G2.png"  />;
var bassA2 = <img src="./app/images/bass/bass_A2.png"  />;
var bassB2 = <img src="./app/images/bass/bass_B2.png"  />;
var bassC3 = <img src="./app/images/bass/bass_C3.png"  />;
var bassD3 = <img src="./app/images/bass/bass_D3.png"  />;
var bassE3 = <img src="./app/images/bass/bass_E3.png"  />;
var bassF3 = <img src="./app/images/bass/bass_F3.png"  />;
var bassG3 = <img src="./app/images/bass/bass_G3.png"  />;
var bassA3 = <img src="./app/images/bass/bass_A3.png"  />;
var bassB3 = <img src="./app/images/bass/bass_B3.png"  />;
var bassC4 = <img src="./app/images/bass/bass_C4.png"  />;
var bassD4 = <img src="./app/images/bass/bass_D4.png"  />;
var bassE4 = <img src="./app/images/bass/bass_E4.png"  />;
var bassF4 = <img src="./app/images/bass/bass_F4.png"  />;
var bassG4 = <img src="./app/images/bass/bass_G4.png"  />;

// Clefs are arrays of pitches: they take an integer (representing staff
// position) and output a pitch.
// (The entries representing pitches will be replaced by images to be rendered.)

var frenchViolin = ["a", "b", "c'", "d'", "e'", "f'", "g'", "a'", "b'", 
    "c''", "d''", "e''", "f''", "g''", "a''", "b''", "c''", "d'''", "e'''", 
    "f'''", "g'''"];

var treble = [trebleF3, trebleG3, trebleA3, trebleB3, trebleC4, trebleD4, 
    trebleE4, trebleF4, trebleG4, trebleA4, trebleB4, trebleC5,
     trebleD5, trebleE5, trebleF5, trebleG5, trebleA5, trebleB5, trebleC6,
     trebleD6, trebleE6];

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

var bass = [bassA1, bassB1, bassC2, bassD2, bassE2, bassF2, bassG2, bassA2,
    bassB2, bassC3, bassD3, bassE3, bassF3, bassG3,
    bassA3, bassB3, bassC4, bassD4, bassE4, bassF4, bassG4,];

var subBass = ["f,,", "g,,", "a,,","b,,","c,", "d,", "e,", "f,", "g,", 
"a,", "b,","c","d", "e", "f", "g", "a", "b", "c'", "d'", "e'"];

var getClef = {
    frenchViolin: frenchViolin,
    treble: treble,
    soprano: soprano,
    mezzoSoprano: mezzoSoprano,
    alto: alto,
    tenor: tenor,
    cBaritone: cBaritone,
    fBaritone: fBaritone,
    bass: bass,
    subBass: subBass
};


// These functions convert positions in a given clef to the corresponding 
//position in the treble clef:

function frenchViolinToTreble(position){
    return position + 2;
};

function trebleToTreble(position){
    return position;
};

function sopranoToTreble(position){
    return position - 2;
};

function mezzoSopranoToTreble(position){
    return position - 4;
};

function altoToTreble(position){
    return position + 1;
};

function tenorToTreble(position){
    return position - 1;
};

function cBaritoneToTreble(position){
    return position - 3;
};

function fBaritoneToTreble(position){
    return position -3;
};

function bassToTreble(position){
    return position + 2;
};

function subBassToTreble(position){
    return position;
};

// These functions convert positions in the treble clef to corresponding 
// positions in other clefs:

function trebleToFrenchViolin(position){
    return position - 2;
};

function trebleToSoprano(position){
    return position + 2;
};

function trebleToMezzoSoprano(position){
    return position + 4;
};

function trebleToAlto(position){
    return position - 1;
};

function trebleToTenor(position){
    return position + 1;
};

function trebleToCBaritone(position){
    return position + 3;
};

function trebleToFBaritone(position){
    return position + 3;
};

function trebleToBass(position){
    return position -2;
};

function trebleToSubBass(position){
    return position;
};

function identity(arg){
    return arg
}

var convertClefToTreble = {
    frenchViolin: frenchViolinToTreble,
    treble: identity,
    soprano: sopranoToTreble, 
    mezzoSoprano: mezzoSopranoToTreble,
    alto: altoToTreble, 
    tenor: tenorToTreble, 
    cBaritone: cBaritoneToTreble, 
    fBaritone: fBaritoneToTreble, 
    bass: bassToTreble, 
    subBass: subBassToTreble
};

var convertTrebleToClef = {
    frenchViolin: trebleToFrenchViolin,
    treble: identity,
    soprano: trebleToSoprano,
    mezzoSoprano: trebleToMezzoSoprano,
    alto: trebleToAlto,
    tenor: trebleToTenor,
    cBaritone: trebleToCBaritone,
    fBaritone: trebleToFBaritone,
    bass: trebleToBass,
    subBass: trebleToSubBass
    };

//The converter component:

function Converter(props){
    var position;
    var treble_position;
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
    
    
    function getTrebleFunction(){
        return convertClefToTreble[props.target];
    }
    
    function getConversionFunction(){
        return convertTrebleToClef[props.known];
        
    }
    
    //This function applies the appropriate conversion function:
    function convert() {
        treble_position = getTrebleFunction()(position);
        converted_position = getConversionFunction()(treble_position);
        if (converted_position - position > 4){
            converted_position = converted_position - 7;
        }
        else if (converted_position - position < -4){
            converted_position = converted_position + 7;
        }
        ReactDOM.render(<h2>{getKnownClef()[getConvertedPosition()]}</h2>,
        document.getElementById('conversion_display')
        );  
    }
    //This function returns a random clef position:
    function randomPosition (){
        position = Math.floor(4 + Math.random()*12);
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
        return <Button onClick={convert} />;
    }    
        return <div>
        <PositionButton /> 
        <ConvertButton />
        </div> ;
}

module.exports = Converter;