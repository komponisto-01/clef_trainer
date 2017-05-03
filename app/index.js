var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
// var Button = require('./components/Button');
var button = require('./components/Button');
var text = require('./components/Text');

    
// ReactDOM.render(
//     <Button />,
//     document.getElementById('app')
//     );
    
// ReactDOM.render(
//     <App addressee="world"/>,
//     document.getElementById('app')
//     );    
    
// const element = <h2>My button will go here (or at least in this div)</h2>;
    

    
ReactDOM.render(
    button,
    document.getElementById('button')
);

ReactDOM.render(
    text,
    document.getElementById('text')
    );