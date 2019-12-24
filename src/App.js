import React, { Component } from 'react';
import './App.css';
import { useMIDI, useMIDIConnectionManager, useMIDIMessage } from '@react-midi/hooks';
import { MIDIConnectionManager } from '@react-midi/components';
import Sketcher from "./components/Sketcher/Sketcher";

function App() {
  const [inputs] = useMIDI();
  const [input, setInput] = useMIDIConnectionManager(inputs);

  const message = useMIDIMessage(input);
  return (
    <div className="App" style={{backgroundColor: "black", height: `100%`, width: `100%`}}>
      <div style={{backgroundColor: "black", height: `100%`, width: `100%`}}>
        <MIDIConnectionManager
          input={input}
          inputs={inputs}
          onInputChange={setInput}
          style={{backgroundColor: "black", height: `100%`, width: `100%`}}
        />

        {inputs.length > 0 &&
        <div style={{color: "white"}}>MIDI Inputs:</div>
        }

        {inputs.length !== 0 &&
        <div style={{color: "white"}}>
          Message Data: {message.data ? message.data.join(', ') : ''}
        </div>
        }
        {(message.data && message.data[0] === 144) ?
          <Sketcher midiNote={message.data[1]}/> :
          <div style={{backgroundColor: "black", height: `100vh`, width: `100%`, color: "white"}}>
            No Data
          </div>
        }
      </div>
    </div>
  );
}

export default App;
