import React, { Component } from "react";
class MigrantDiv extends Component {
  render() {
    return (
      <div
        className={`city ${
          parseFloat(this.props.id) % 2 === 0 ? "even" : "odd"
        }`}
      >
        <h5>
          City:{this.props.city} Latitude:{this.props.latitude}Longitude:{" "}
          {this.props.longitude} Population: {this.props.population}
          <button className="removeCity" onClick={this.props.removeCity}>
            Remove
          </button>
        </h5>
      </div>
    );
  }
}

export default MigrantDiv;
