var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Text = require('./Text');
var Converter = require('./Converter');


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
    ReactDOM.render(
    <Button onClick={toggleState}/>,
    document.getElementById('button')
    );
    ReactDOM.render(
        <Converter known={'treble'} target={'bass'} />,
        document.getElementById('converter')
        );
    }

module.exports = App;