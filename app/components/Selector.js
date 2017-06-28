var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Converter = require("./Converter");


var target;
var known;

function targetFrenchViolin(){
    target = 'frenchViolin';
    renderConverter();
}
function targetTreble(){
    target = 'treble';
    renderConverter();
}
function targetSoprano(){
    target = 'soprano';
    renderConverter();
}
function targetMezzoSoprano(){
    target = 'mezzoSoprano';
    renderConverter();
}
function targetAlto(){
    target = 'alto';
    renderConverter();
}
function targetTenor(){
    target = 'tenor';
    renderConverter();
}
function targetCBaritone(){
    target = 'cBaritone';
    renderConverter();
}
function targetFBaritone(){
    target = 'fBaritone';
    renderConverter();
}
function targetBass(){
    target = 'bass';
    renderConverter();

}
function targetSubBass(){
    target = 'subBass';
    renderConverter();
}

function knownFrenchViolin(){
    known = 'frenchViolin';
    renderConverter();
}
function knownTreble(){
    known = 'treble';
    renderConverter();
}
function knownSoprano(){
    known = 'soprano';
    renderConverter();
}
function knownMezzoSoprano(){
    known = 'mezzoSoprano';
    renderConverter();
}
function knownAlto(){
    known = 'alto';
    renderConverter();
}
function knownTenor(){
    known = 'tenor';
    renderConverter();
}
function knownCBaritone(){
    known = 'cBaritone';
    renderConverter();
}
function knownFBaritone(){
    known = 'fBaritone';
    renderConverter();
}
function knownBass(){
    known = 'bass';
    renderConverter();
}
function knownSubBass(){
    known = 'subBass';
    renderConverter();
}

function renderConverter(){
   if (!(typeof known === "undefined")){
    ReactDOM.render(
        <Converter known={known} target={target} />,
        document.getElementById('converter')
        );}
}


function displayMenu(){
    
    ReactDOM.render(<Button onClick={displayTargetMenu} class="dropbtn"/>, 
    document.getElementById('target_selector')
    );
    
    ReactDOM.render(<Button onClick={displayKnownMenu} class="dropbtn"/>,
    document.getElementById('known_selector')
    );
}


function displayTargetMenu(){
    
    document.getElementById("target_list").classList.toggle("show");
    
    ReactDOM.render(<a href="#" onClick={targetFrenchViolin}>targetFrenchViolin
    </a>, document.getElementById('target_dropdown1')
    );
    ReactDOM.render(<a href="#" onClick={targetTreble}>targetTreble</a>,
    document.getElementById('target_dropdown2')
    );
    ReactDOM.render(<a href="#" onClick={targetSoprano}>targetSoprano</a>,
    document.getElementById('target_dropdown3')
    );
    ReactDOM.render(<a href="#" onClick={targetMezzoSoprano}>targetMezzoSoprano</a>,
    document.getElementById('target_dropdown4')
    );
    ReactDOM.render(<a href="#" onClick={targetAlto}>targetAlto</a>,
    document.getElementById('target_dropdown5')
    );
    ReactDOM.render(<a href="#" onClick={targetTenor}>targetTenor</a>,
    document.getElementById('target_dropdown6')
    );
    ReactDOM.render(<a href="#" onClick={targetCBaritone}>targetCBaritone</a>,
    document.getElementById('target_dropdown7')
    );    
    ReactDOM.render(<a href="#" onClick={targetFBaritone}>targetFBaritone</a>,
    document.getElementById('target_dropdown8')
    );    
    ReactDOM.render(<a href="#" onClick={targetBass}>targetBass</a>,
    document.getElementById('target_dropdown9')
    );
    ReactDOM.render(<a href="#" onClick={targetSubBass}>targetSubBass</a>,
    document.getElementById('target_dropdown10')
    );
}

function displayKnownMenu(){
    document.getElementById("known_list").classList.toggle("show");
    
    ReactDOM.render(<a href="#" onClick={knownFrenchViolin}>knownFrenchViolin</a>,
    document.getElementById('known_dropdown1')
    );
    ReactDOM.render(<a href="#" onClick={knownTreble}>knownTreble</a>,
    document.getElementById('known_dropdown2')
    );
    ReactDOM.render(<a href="#" onClick={knownSoprano}>knownSoprano</a>,
    document.getElementById('known_dropdown3')
    );
    ReactDOM.render(<a href="#" onClick={knownMezzoSoprano}>knownMezzoSoprano</a>,
    document.getElementById('known_dropdown4')
    );
    ReactDOM.render(<a href="#" onClick={knownAlto}>knownAlto</a>,
    document.getElementById('known_dropdown5')
    );
    ReactDOM.render(<a href="#" onClick={knownTenor}>knownTenor</a>,
    document.getElementById('known_dropdown6')
    );
    ReactDOM.render(<a href="#" onClick={knownCBaritone}>knownCBaritone</a>,
    document.getElementById('known_dropdown7')
    );
    ReactDOM.render(<a href="#" onClick={knownFBaritone}>knownFBaritone</a>,
    document.getElementById('known_dropdown8')
    );
    ReactDOM.render(<a href="#" onClick={knownBass}>knownBass</a>,
    document.getElementById('known_dropdown9')
    );
    ReactDOM.render(<a href="#" onClick={knownSubBass}>knownSubBass</a>,
    document.getElementById('known_dropdown10')
    ); 
}



function Selector(props){
    return <Button onClick={displayMenu} />;
    
}


exports.Selector = Selector;
exports.target = target;
exports.known = known;