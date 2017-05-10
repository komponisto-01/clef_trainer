var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Text = require('./Text');
var Converter = require('./Converter');
var Selector = require('./Selector');


function toggleState(){
    if (this.state == 0){
        this.state = 1;  
        }
    else {this.state = 0}
    ReactDOM.render(
    <Text state={this.state} />,
    document.getElementById('text')
    );    
    }

function App(props){
    this.state = 0;
    var known = 'treble';
    var target =  'bass';
    var options = ['frenchViolin', 'treble', 'soprano', 'mezzoSoprano', 
    'alto', 'tenor', 'cBaritone', 'fBaritone', 'bass', 'subBass'];
    ReactDOM.render(
        <Selector.Selector />,
        document.getElementById('selector')
        );
    ReactDOM.render(
    <Button onClick={toggleState}/>,
    document.getElementById('button')
    );
    ReactDOM.render(
        <Converter known={known} target={target} />,
        document.getElementById('converter')
        );
    }

module.exports = App;