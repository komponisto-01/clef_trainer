var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Text = require('./Text');

// function App(props){
//     return (
//         <h1>Hello, {props.addressee}!</h1>
//         );
// };

function toggleState(){
    if (this.state == 0){
        this.state = 1;
}
    else {this.state = 0}
    alert(this.state);
}

function App(props){
    this.state = 0;
    ReactDOM.render(
    <Button onClick={toggleState}/>,
    document.getElementById('button')
);
    ReactDOM.render(
    <Text />,
    document.getElementById('text')
    );
}

module.exports = App;