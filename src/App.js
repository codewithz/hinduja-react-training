import logo from './logo.svg';
import './App.css';

import HelloComponent from './components/HelloComponent';
import HelloComponentFunction from './components/HelloComponentFunction';
import AlertComponent from './components/AlertComponent';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div className="App">
    <h1>Hello React</h1>
    <HelloComponent name="Zartab" lastname="Nakhwa"/>
    <HelloComponent name="Arun" college="Hinduja"/>
    <HelloComponent country="India" state="MH"/>

    <hr/>
 <HelloComponentFunction name="Zartab"/>
    <hr/>
    <AlertComponent />
    <hr />
    <CounterComponent />

    </div>

  );
}

export default App;
