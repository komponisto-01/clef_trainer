var React = require('react');
var ReactDOM = require('react-dom');
var button = require('./Button');
var Text = require('./Text');

// function App(props){
//     return (
//         <h1>Hello, {props.addressee}!</h1>
//         );
// };


function App(props){
    ReactDOM.render(
    button,
    document.getElementById('button')
);
    ReactDOM.render(
    <Text />,
    document.getElementById('text')
    );
}

module.exports = App;