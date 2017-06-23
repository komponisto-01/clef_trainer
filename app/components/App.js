var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Converter = require('./Converter');
var Selector = require('./Selector');


function App(props){
    var options = ['frenchViolin', 'treble', 'soprano', 'mezzoSoprano', 
    'alto', 'tenor', 'cBaritone', 'fBaritone', 'bass', 'subBass'];
    ReactDOM.render(
        <Selector.Selector />,
        document.getElementById('selector')
        );
    }

module.exports = App;