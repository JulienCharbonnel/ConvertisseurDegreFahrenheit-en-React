import './App.css';
import React from 'react';
import CelsiusInput from './Components/CelsiusInput';
import FahrenheitInput from './Components/FahrenheitInput';

/*
  * Crée par Julien Charbonnel le 2023-03-03
  *
  * Ce programme est un logiciel libre : vous pouvez le redistribuer ou le modifier
*/

/* Application de conversion de degrés Celsius en degrés Fahrenheit 
  * avec deux zones de saisie et un bouton de conversion
*/

/*
  * Composant principal de l'application
  * Il contient deux composants CelsiusInput et FahrenheitInput
  * qui affichent chacun une zone de saisie de degrés Celsius ou Fahrenheit
  * et qui communiquent avec le composant principal pour mettre à jour
  * l'affichage des deux zones de saisie
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { celsius: 0, fahrenheit: 0 };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(event) {
    this.setState({
      celsius: event.target.value,
      fahrenheit: (event.target.value * 9 / 5) + 32
    });
  }

  handleFahrenheitChange(event) {
    this.setState({
      celsius: (event.target.value - 32) * 5 / 9,
      fahrenheit: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Convertisseur de degrés Celsius en degrés Fahrenheit</h1>
        <CelsiusInput celsius={this.state.celsius} onChange={this.handleCelsiusChange} />
        <FahrenheitInput fahrenheit={this.state.fahrenheit} onChange={this.handleFahrenheitChange} />
      </div>
    );
  }
}


export default App;
