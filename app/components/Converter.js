var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

//Storing image links (or rather, image-link-objects) in variables, for brevity.

var french_violinA3 = <img src="./app/images/french_violin/french_violinA3.png"  />;
var french_violinB3 = <img src="./app/images/french_violin/french_violinB3.png"  />;
var french_violinC4 = <img src="./app/images/french_violin/french_violinC4.png"  />;
var french_violinD4 = <img src="./app/images/french_violin/french_violinD4.png"  />;
var french_violinE4 = <img src="./app/images/french_violin/french_violinE4.png"  />;
var french_violinF4 = <img src="./app/images/french_violin/french_violinF4.png"  />;
var french_violinG4 = <img src="./app/images/french_violin/french_violinG4.png"  />;
var french_violinA4 = <img src="./app/images/french_violin/french_violinA4.png"  />;
var french_violinB4 = <img src="./app/images/french_violin/french_violinB4.png"  />;
var french_violinC5 = <img src="./app/images/french_violin/french_violinC5.png"  />;
var french_violinD5 = <img src="./app/images/french_violin/french_violinD5.png"  />;
var french_violinE5 = <img src="./app/images/french_violin/french_violinE5.png"  />;
var french_violinF5 = <img src="./app/images/french_violin/french_violinF5.png"  />;
var french_violinG5 = <img src="./app/images/french_violin/french_violinG5.png"  />;
var french_violinA5 = <img src="./app/images/french_violin/french_violinA5.png"  />;
var french_violinB5 = <img src="./app/images/french_violin/french_violinB5.png"  />;
var french_violinC6 = <img src="./app/images/french_violin/french_violinC6.png"  />;
var french_violinD6 = <img src="./app/images/french_violin/french_violinD6.png"  />;
var french_violinE6 = <img src="./app/images/french_violin/french_violinE6.png"  />;
var french_violinF6 = <img src="./app/images/french_violin/french_violinF6.png"  />;
var french_violinG6 = <img src="./app/images/french_violin/french_violinG6.png"  />;

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

var sopranoD3 = <img src="./app/images/soprano/sopranoD3.png"  />;
var sopranoE3 = <img src="./app/images/soprano/sopranoE3.png"  />;
var sopranoF3 = <img src="./app/images/soprano/sopranoF3.png"  />;
var sopranoG3 = <img src="./app/images/soprano/sopranoG3.png"  />;
var sopranoA3 = <img src="./app/images/soprano/soprano_A3.png"  />;
var sopranoB3 = <img src="./app/images/soprano/sopranoB3.png"  />;
var sopranoC4 = <img src="./app/images/soprano/sopranoC4.png"  />;
var sopranoD4 = <img src="./app/images/soprano/sopranoD4.png"  />;
var sopranoE4 = <img src="./app/images/soprano/sopranoE4.png"  />;
var sopranoF4 = <img src="./app/images/soprano/sopranoF4.png"  />;
var sopranoG4 = <img src="./app/images/soprano/sopranoG4.png"  />;
var sopranoA4 = <img src="./app/images/soprano/sopranoA4.png"  />;
var sopranoB4 = <img src="./app/images/soprano/sopranoB4.png"  />;
var sopranoC5 = <img src="./app/images/soprano/sopranoC5.png"  />;
var sopranoD5 = <img src="./app/images/soprano/sopranoD5.png"  />;
var sopranoE5 = <img src="./app/images/soprano/sopranoE5.png"  />;
var sopranoF5 = <img src="./app/images/soprano/sopranoF5.png"  />;
var sopranoG5 = <img src="./app/images/soprano/sopranoG5.png"  />;
var sopranoA5 = <img src="./app/images/soprano/sopranoA5.png"  />;
var sopranoB5 = <img src="./app/images/soprano/sopranoB5.png"  />;
var sopranoC6 = <img src="./app/images/soprano/sopranoC6.png"  />;

var mezzo_sopranoB2 = <img src="./app/images/mezzo_soprano/mezzo_sopranoB2.png"  />;
var mezzo_sopranoC3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoC3.png"  />;
var mezzo_sopranoD3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoD3.png"  />;
var mezzo_sopranoE3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoE3.png"  />;
var mezzo_sopranoF3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoF3.png"  />;
var mezzo_sopranoG3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoG3.png"  />;
var mezzo_sopranoA3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoA3.png"  />;
var mezzo_sopranoB3 = <img src="./app/images/mezzo_soprano/mezzo_sopranoB3.png"  />;
var mezzo_sopranoC4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoC4.png"  />;
var mezzo_sopranoD4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoD4.png"  />;
var mezzo_sopranoE4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoE4.png"  />;
var mezzo_sopranoF4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoF4.png"  />;
var mezzo_sopranoG4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoG4.png"  />;
var mezzo_sopranoA4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoA4.png"  />;
var mezzo_sopranoB4 = <img src="./app/images/mezzo_soprano/mezzo_sopranoB4.png"  />;
var mezzo_sopranoC5 = <img src="./app/images/mezzo_soprano/mezzo_sopranoC5.png"  />;
var mezzo_sopranoD5 = <img src="./app/images/mezzo_soprano/mezzo_sopranoD5.png"  />;
var mezzo_sopranoE5 = <img src="./app/images/mezzo_soprano/mezzo_sopranoE5.png"  />;
var mezzo_sopranoF5 = <img src="./app/images/mezzo_soprano/mezzo_sopranoF5.png"  />;
var mezzo_sopranoG5 = <img src="./app/images/mezzo_soprano/mezzo_sopranoG5.png"  />;
var mezzo_sopranoA5 = <img src="./app/images/mezzo_soprano/mezzo_sopranoA5.png"  />;

var altoG2 = <img src="./app/images/alto/altoG2.png"  />;
var altoA2 = <img src="./app/images/alto/altoA2.png"  />;
var altoB2 = <img src="./app/images/alto/altoB2.png"  />;
var altoC3 = <img src="./app/images/alto/altoC3.png"  />;
var altoD3 = <img src="./app/images/alto/altoD3.png"  />;
var altoE3 = <img src="./app/images/alto/altoE3.png"  />;
var altoF3 = <img src="./app/images/alto/altoF3.png"  />;
var altoG3 = <img src="./app/images/alto/altoG3.png"  />;
var altoA3 = <img src="./app/images/alto/altoA3.png"  />;
var altoB3 = <img src="./app/images/alto/altoB3.png"  />;
var altoC4 = <img src="./app/images/alto/altoC4.png"  />;
var altoD4 = <img src="./app/images/alto/altoD4.png"  />;
var altoE4 = <img src="./app/images/alto/altoE4.png"  />;
var altoF4 = <img src="./app/images/alto/altoF4.png"  />;
var altoG4 = <img src="./app/images/alto/altoG4.png"  />;
var altoA4 = <img src="./app/images/alto/altoA4.png"  />;
var altoB4 = <img src="./app/images/alto/altoB4.png"  />;
var altoC5 = <img src="./app/images/alto/altoC5.png"  />;
var altoD5 = <img src="./app/images/alto/altoD5.png"  />;
var altoE5 = <img src="./app/images/alto/altoE5.png"  />;
var altoF5 = <img src="./app/images/alto/altoF5.png"  />;

var tenorE2 = <img src="./app/images/tenor/tenorE2.png"  />;
var tenorF2 = <img src="./app/images/tenor/tenorF2.png"  />;
var tenorG2 = <img src="./app/images/tenor/tenorG2.png"  />;
var tenorA2 = <img src="./app/images/tenor/tenorA2.png"  />;
var tenorB2 = <img src="./app/images/tenor/tenorB2.png"  />;
var tenorC3 = <img src="./app/images/tenor/tenorC3.png"  />;
var tenorD3 = <img src="./app/images/tenor/tenorD3.png"  />;
var tenorE3 = <img src="./app/images/tenor/tenorE3.png"  />;
var tenorF3 = <img src="./app/images/tenor/tenorF3.png"  />;
var tenorG3 = <img src="./app/images/tenor/tenorG3.png"  />;
var tenorA3 = <img src="./app/images/tenor/tenorA3.png"  />;
var tenorB3 = <img src="./app/images/tenor/tenorB3.png"  />;
var tenorC4 = <img src="./app/images/tenor/tenorC4.png"  />;
var tenorD4 = <img src="./app/images/tenor/tenorD4.png"  />;
var tenorE4 = <img src="./app/images/tenor/tenorE4.png"  />;
var tenorF4 = <img src="./app/images/tenor/tenorF4.png"  />;
var tenorG4 = <img src="./app/images/tenor/tenorG4.png"  />;
var tenorA4 = <img src="./app/images/tenor/tenorA4.png"  />;
var tenorB4 = <img src="./app/images/tenor/tenorB4.png"  />;
var tenorC5 = <img src="./app/images/tenor/tenorC5.png"  />;
var tenorD5 = <img src="./app/images/tenor/tenorD5.png"  />;

var c_baritoneC2 = <img src="./app/images/c_baritone/c_baritoneC2.png"  />;
var c_baritoneD2 = <img src="./app/images/c_baritone/c_baritoneD2.png"  />;
var c_baritoneE2 = <img src="./app/images/c_baritone/c_baritoneE2.png"  />;
var c_baritoneF2 = <img src="./app/images/c_baritone/c_baritoneF2.png"  />;
var c_baritoneG2 = <img src="./app/images/c_baritone/c_baritoneG2.png"  />;
var c_baritoneA2 = <img src="./app/images/c_baritone/c_baritoneA2.png"  />;
var c_baritoneB2 = <img src="./app/images/c_baritone/c_baritoneB2.png"  />;
var c_baritoneC3 = <img src="./app/images/c_baritone/c_baritoneC3.png"  />;
var c_baritoneD3 = <img src="./app/images/c_baritone/c_baritoneD3.png"  />;
var c_baritoneE3 = <img src="./app/images/c_baritone/c_baritoneE3.png"  />;
var c_baritoneF3 = <img src="./app/images/c_baritone/c_baritoneF3.png"  />;
var c_baritoneG3 = <img src="./app/images/c_baritone/c_baritoneG3.png"  />;
var c_baritoneA3 = <img src="./app/images/c_baritone/c_baritoneA3.png"  />;
var c_baritoneB3 = <img src="./app/images/c_baritone/c_baritoneB3.png"  />;
var c_baritoneC4 = <img src="./app/images/c_baritone/c_baritoneC4.png"  />;
var c_baritoneD4 = <img src="./app/images/c_baritone/c_baritoneD4.png"  />;
var c_baritoneE4 = <img src="./app/images/c_baritone/c_baritoneE4.png"  />;
var c_baritoneF4 = <img src="./app/images/c_baritone/c_baritoneF4.png"  />;
var c_baritoneG4 = <img src="./app/images/c_baritone/c_baritoneG4.png"  />;
var c_baritoneA4 = <img src="./app/images/c_baritone/c_baritoneA4.png"  />;
var c_baritoneB4 = <img src="./app/images/c_baritone/c_baritoneB4.png"  />;

var f_baritoneC2 = <img src="./app/images/f_baritone/f_baritoneC2.png"  />;
var f_baritoneD2 = <img src="./app/images/f_baritone/f_baritoneD2.png"  />;
var f_baritoneE2 = <img src="./app/images/f_baritone/f_baritoneE2.png"  />;
var f_baritoneF2 = <img src="./app/images/f_baritone/f_baritoneF2.png"  />;
var f_baritoneG2 = <img src="./app/images/f_baritone/f_baritoneG2.png"  />;
var f_baritoneE2 = <img src="./app/images/f_baritone/f_baritoneE2.png"  />;
var f_baritoneF2 = <img src="./app/images/f_baritone/f_baritoneF2.png"  />;
var f_baritoneG2 = <img src="./app/images/f_baritone/f_baritoneG2.png"  />;
var f_baritoneA2 = <img src="./app/images/f_baritone/f_baritoneA2.png"  />;
var f_baritoneB2 = <img src="./app/images/f_baritone/f_baritoneB2.png"  />;
var f_baritoneC3 = <img src="./app/images/f_baritone/f_baritoneC3.png"  />;
var f_baritoneD3 = <img src="./app/images/f_baritone/f_baritoneD3.png"  />;
var f_baritoneE3 = <img src="./app/images/f_baritone/f_baritoneE3.png"  />;
var f_baritoneF3 = <img src="./app/images/f_baritone/f_baritoneF3.png"  />;
var f_baritoneG3 = <img src="./app/images/f_baritone/f_baritoneG3.png"  />;
var f_baritoneA3 = <img src="./app/images/f_baritone/f_baritoneA3.png"  />;
var f_baritoneB3 = <img src="./app/images/f_baritone/f_baritoneB3.png"  />;
var f_baritoneC4 = <img src="./app/images/f_baritone/f_baritoneC4.png"  />;
var f_baritoneD4 = <img src="./app/images/f_baritone/f_baritoneD4.png"  />;
var f_baritoneE4 = <img src="./app/images/f_baritone/f_baritoneE4.png"  />;
var f_baritoneF4 = <img src="./app/images/f_baritone/f_baritoneF4.png"  />;
var f_baritoneG4 = <img src="./app/images/f_baritone/f_baritoneG4.png"  />;
var f_baritoneA4 = <img src="./app/images/f_baritone/f_baritoneA4.png"  />;
var f_baritoneB4 = <img src="./app/images/f_baritone/f_baritoneB4.png"  />;

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

var subbassF1 = <img src="./app/images/subbass/subbassF1.png"  />;
var subbassG1 = <img src="./app/images/subbass/subbassG1.png"  />;
var subbassA1 = <img src="./app/images/subbass/subbassF1.png"  />;
var subbassB1 = <img src="./app/images/subbass/subbassB1.png"  />;
var subbassC2 = <img src="./app/images/subbass/subbassC2.png"  />;
var subbassD2 = <img src="./app/images/subbass/subbassD2.png"  />;
var subbassE2 = <img src="./app/images/subbass/subbassE2.png"  />;
var subbassF2 = <img src="./app/images/subbass/subbassF2.png"  />;
var subbassG2 = <img src="./app/images/subbass/subbassG2.png"  />;
var subbassA2 = <img src="./app/images/subbass/subbassA2.png"  />;
var subbassB2 = <img src="./app/images/subbass/subbassB2.png"  />;
var subbassC3 = <img src="./app/images/subbass/subbassC3.png"  />;
var subbassD3 = <img src="./app/images/subbass/subbassD3.png"  />;
var subbassE3 = <img src="./app/images/subbass/subbassE3.png"  />;
var subbassF3 = <img src="./app/images/subbass/subbassF3.png"  />;
var subbassG3 = <img src="./app/images/subbass/subbassG3.png"  />;
var subbassA3 = <img src="./app/images/subbass/subbassA3.png"  />;
var subbassB3 = <img src="./app/images/subbass/subbassB3.png"  />;
var subbassC4 = <img src="./app/images/subbass/subbassC4.png"  />;
var subbassD4 = <img src="./app/images/subbass/subbassD4.png"  />;
var subbassE4 = <img src="./app/images/subbass/subbassE4.png"  />;

// Clefs are arrays of pitches: they take an integer (representing staff
// position) and output a pitch.
// (The entries representing pitches will be replaced by images to be rendered.)

var frenchViolin = [french_violinA3, french_violinB3, french_violinC4,
french_violinD4, french_violinE4, french_violinF4, french_violinG4,
french_violinA4, french_violinB4, french_violinC5, french_violinD5,
    french_violinE5, french_violinF5, french_violinG5, french_violinA5,
    french_violinB5, french_violinC6, french_violinD6, french_violinE6, 
    french_violinF6, french_violinG6];

var treble = [trebleF3, trebleG3, trebleA3, trebleB3, trebleC4, trebleD4, 
    trebleE4, trebleF4, trebleG4, trebleA4, trebleB4, trebleC5,
     trebleD5, trebleE5, trebleF5, trebleG5, trebleA5, trebleB5, trebleC6,
     trebleD6, trebleE6];

var soprano = [sopranoD3, sopranoE3, sopranoF3, sopranoG3, sopranoA3, sopranoB3,
sopranoC4, sopranoD4, sopranoE4, sopranoF4, sopranoG4, sopranoA4, sopranoB4,
sopranoC5, sopranoD5, sopranoE5, sopranoF5, sopranoG5, sopranoA5, sopranoB5,
sopranoC6];

var mezzoSoprano = [mezzo_sopranoB2, mezzo_sopranoC3, mezzo_sopranoD3, 
mezzo_sopranoE3, mezzo_sopranoF3, mezzo_sopranoG3, mezzo_sopranoA3,
mezzo_sopranoB3, mezzo_sopranoC4, mezzo_sopranoD4, 
mezzo_sopranoE4, mezzo_sopranoF4, mezzo_sopranoG4,mezzo_sopranoA4,
mezzo_sopranoB4, mezzo_sopranoC5, mezzo_sopranoD5, mezzo_sopranoE5,
mezzo_sopranoF5, mezzo_sopranoG5, mezzo_sopranoA5];

var alto = [altoG2, altoA2, altoB2, altoC3, altoD3 , altoE3, altoF3, altoG3,
altoA3, altoB3, altoC4, altoD4, 
altoE4, altoF4, altoG4, altoA4, altoB4, altoC5, altoD5, altoE5, altoF5];

var tenor = [tenorE2, tenorF2, tenorG2, tenorA2, tenorB2, tenorC3, tenorD3,
tenorE3, tenorF3, tenorG3, tenorA3, tenorB3,
tenorC4, tenorD4, tenorE4, tenorF4, tenorG4, tenorA4, tenorB4, tenorC5, 
tenorD5];

var cBaritone = [c_baritoneC2, c_baritoneD2, c_baritoneE2, c_baritoneF2,
c_baritoneG2, c_baritoneA2, c_baritoneB2,c_baritoneC3, c_baritoneD3, 
c_baritoneE3, c_baritoneF3, c_baritoneG3, c_baritoneA3, c_baritoneB3, 
c_baritoneC4, c_baritoneD4, c_baritoneE4, c_baritoneF4, c_baritoneG4, c_baritoneA4,
c_baritoneB4];

var fBaritone = [f_baritoneC2, f_baritoneD2, f_baritoneE2, f_baritoneF2,
f_baritoneG2, f_baritoneA2, f_baritoneB2,f_baritoneC3, f_baritoneD3, 
f_baritoneE3, f_baritoneF3, f_baritoneG3, f_baritoneA3, f_baritoneB3, 
f_baritoneC4, f_baritoneD4, f_baritoneE4, f_baritoneF4, f_baritoneG4, f_baritoneA4,
f_baritoneB4];

var bass = [bassA1, bassB1, bassC2, bassD2, bassE2, bassF2, bassG2, bassA2,
    bassB2, bassC3, bassD3, bassE3, bassF3, bassG3,
    bassA3, bassB3, bassC4, bassD4, bassE4, bassF4, bassG4,];

var subBass = [subbassF1, subbassG1, subbassA1, subbassB1, subbassC2, subbassD2,
subbassE2, subbassF2, subbassG2, 
subbassA2, subbassB2, subbassC3, subbassD3, subbassE3, subbassF3, subbassG3,
subbassA3, subbassB3, subbassC4, subbassD4, subbassE4];

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