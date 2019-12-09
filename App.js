import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  question1 = (arr1, arr2) => {

    let arr1Size = arr1.length;

    let newArr = []

    // loop through previous array
    for (let j = 0; j < arr1Size; j++) {

      // look for same thing in new array
      if (arr2.indexOf(arr1[j]) === -1)
        newArr.push(arr1[j])
    }
    console.log("Result " + newArr)
  }

  question2 = (a, d) => {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
      arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
      arr.shift(arr.push(arr[0]));
    }
    console.log("Result " + arr)
  }

  question3 = () => {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Button">
            <Button variant="contained" color="primary" onClick={() => this.question1([4, 12, 6, 1, 5], [4, 6, 5])}>
              Question 1
            </Button>
          </div>
          <div className="App-Button">
            <Button variant="contained" color="primary" onClick={() => this.question2([4, 12, 6, 1, 5], 2)}>
              Question 2
            </Button>
          </div>
        </header>
      </div>);
  }
}


export default App;
