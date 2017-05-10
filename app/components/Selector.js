var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

// function hello(){
//     alert('hello world!');
// };

var target;
var known;

function displayMenu(){
    ReactDOM.render(<a href="#">Link</a>,
    document.getElementById('dropdown')
    );
}

function Selector(props){
    return <Button onClick={displayMenu} />;
    
}


exports.Selector = Selector;