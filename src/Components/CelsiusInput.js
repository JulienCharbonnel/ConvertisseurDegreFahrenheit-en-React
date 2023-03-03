import React from "react";



/*
  * Cette classe représente un composant qui affiche une zone de saisie de degrés Celsius
  * et qui communique avec le composant principal pour mettre à jour
  * l'affichage de la zone de saisie
*/
class CelsiusInput extends React.Component {
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
          <label>Celsius : </label>
          <input value={this.props.celsius} onChange={this.handleChange} />
        </div>
      );
    }
}

export default CelsiusInput;