import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import NewMadLibForm from './components/NewMadLibForm.js';

class App extends Component {
  constructor() {
    super();

    let random = MadLibs[Math.floor(Math.random() * MadLibs.length)];
    this.state = {
      selectedMadLib: random
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) => {
    console.log('updateWord function happened')
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }


  render() {
    console.log(this.state)
    console.log(this.state.selectedMadLib.words.length)
    console.log(this.state.selectedMadLib.words)

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>

        {/*
          Render your form with input values
          how to pass updateWord func to my form
          also need to generate form fields dynamically
        */
        <NewMadLibForm
          words={ this.state.selectedMadLib.words }
          title={ this.state.selectedMadLib.title }
          onChange={ this.updateWord }
        />

        }
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
