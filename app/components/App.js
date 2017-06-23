var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');
var Text = require('./Text');
var Converter = require('./Converter');
var Selector = require('./Selector');


// function toggleState(){
//     if (this.state == 0){
//         this.state = 1;  
//         }
//     else {this.state = 0}
//     ReactDOM.render(
//     <Text state={this.state} />,
//     document.getElementById('text')
//     );    
//     }

// function showImage(){
//     // alert("showImage!");
//     ReactDOM.render(
//         myArray[0],
//         document.getElementById('image3')
//         );
// };

// var myArray =[<img src="./app/images/treble/treble_C4.png" height="140" width="250" />];

function App(props){
    this.state = 0;
    var known = Selector.known;
    var target =  Selector.target;
    var options = ['frenchViolin', 'treble', 'soprano', 'mezzoSoprano', 
    'alto', 'tenor', 'cBaritone', 'fBaritone', 'bass', 'subBass'];
    ReactDOM.render(
        <Selector.Selector />,
        document.getElementById('selector')
        );
    // ReactDOM.render(
    // <Button onClick={toggleState}/>,
    // document.getElementById('button')
    // );
    // ReactDOM.render(
    // <Button onClick={showImage}/>,
    // document.getElementById('image_button')
    //     );
    }

module.exports = App;