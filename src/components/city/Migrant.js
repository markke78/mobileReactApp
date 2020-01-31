import React, { Component } from "react";
import "../App.css";
import { Community } from "../functions";
import MigrantDiv from "./MigrantDiv";
import { getData, addData, deleteData, updateData } from "./api.js";

class Migrant extends Component {
  state = { country: new Community() };
  componentDidMount = async () => {
    let { country } = this.state;
    let onLoad = await getData();
    for (let b of onLoad) {
      country.createCity(b.name, b.key, b.latitude, b.longitude, b.population);
    }
    this.setState({ country: country });
  };

  creatCity = () => {
    let { country } = this.state;
    let newCity = country.createCity(
      this.cityName.value,
      0,
      this.latitudeNum.value,
      this.longitudeNum.value,
      this.populationNum.value
    );
    if (newCity.result === false) {
      alert(newCity.message);
      return;
    }

    addData(newCity.newCity);

    this.setState({ country: country });
    this.cityName.value = "";
    this.latitudeNum.value = "";
    this.longitudeNum.value = "";
    this.populationNum.value = "";
  };

  operatePop(operator) {
    let { country } = this.state;

    let city = country.popOperator(
      this.cityList.value,
      this.cityList.options[this.cityList.selectedIndex].getAttribute("num"),
      this.amount.value,
      operator
    );
    console.log(city);
    updateData(city);

    this.setState({ country: country });
  }

  handleDeleteCity = id => {
    let { country } = this.state;
    country.deleteCity(id);
    deleteData(id);
    this.setState({ country: country });
  };
  render() {
    let { country } = this.state;
    return (
      <div>
        <div className="card">
          <div className="cardInside">
            <div>
              City Name:
              <input
                type="text"
                ref={input => {
                  this.cityName = input;
                }}
              />
              Latitude:
              <input
                type="number"
                ref={input => {
                  this.latitudeNum = input;
                }}
              />
              Longitude:{" "}
              <input
                type="number"
                ref={input => {
                  this.longitudeNum = input;
                }}
              />
              Population:{" "}
              <input
                type="number"
                ref={input => {
                  this.populationNum = input;
                }}
              />{" "}
              <button className="int" onClick={this.creatCity}>
                Create
              </button>
            </div>
          </div>
          <hr className="hr" />
          <div>
            {"*****"}
            Total Population:{country.getPopulation()}
            {"*****"} <span id="topop"></span>
            The Most Northern City:{country.getMostNorthern()}
            {"*****"}
            <span id="northern"></span>
            The Most Southern City:{country.getMostSouthern()}
            {"*****"}
            <span id="southern"></span>
          </div>

          <hr className="hr" />
          <input
            type="number"
            ref={input => {
              this.amount = input;
            }}
          />
          <form>
            <select
              ref={select => {
                this.cityList = select;
              }}
            >
              {country.communityCities.map((city, index) => {
                return (
                  <option key={index + 1} num={index + 1} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </form>
          <button
            className="int"
            id="moveInBtn"
            onClick={() => {
              this.operatePop("moveIn");
            }}
          >
            Move In
          </button>

          <button
            className="int"
            id="noveOutBtn"
            onClick={() => {
              this.operatePop("moveOut");
            }}
          >
            Move Out
          </button>
        </div>
        <div className="cityList">
          <h3 className="cityList1">City List:</h3>
          {country.communityCities.map((city, index) => {
            return (
              <MigrantDiv
                key={index}
                id={index}
                population={city.population}
                city={city.name}
                longitude={city.longitude}
                latitude={city.latitude}
                removeCity={() => this.handleDeleteCity(city.key)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Migrant;
