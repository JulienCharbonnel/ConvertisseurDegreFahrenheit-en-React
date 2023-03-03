import React from "react";


/*
    * Crée par Julien Charbonnel le 2023-03-03
    *
    * Ce programme est un logiciel libre : vous pouvez le redistribuer ou le modifier
    * 
*/

/*
    * Cette classe représente un composant qui affiche une zone de saisie de degrés Fahrenheit
    * et qui communique avec le composant principal pour mettre à jour
    * l'affichage de la zone de saisie
*/
class FahrenheitInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.onChange(event);
    }
  
    render() {
      return (
        <div className="Input">
          <label>Fahrenheit : </label>
          <input value={this.props.fahrenheit} onChange={this.handleChange} />
        </div>
      );
    }
}

export default FahrenheitInput;