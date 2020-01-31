class Account {
  constructor(accountName, balance, accountType) {
    this.accountName = accountName;
    this.balance = balance;
    this.accountType = accountType;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  }

  balance1() {
    return this.balance;
  }

  accountType1() {
    return this.accountType;
  }
}

class AccountController {
  constructor() {
    this.userAccounts = [];
  }

  addAccount(accountName, balance, accountType) {
    if (this.isRepeat(accountName)) {
      return;
    }
    const newAccount = new Account(accountName, balance, accountType);
    this.userAccounts.push(newAccount);
    return newAccount;
  }

  isRepeat(accountName) {
    for (let b of this.userAccounts) {
      if (b.accountName === accountName) {
        return true;
      }
    }
    return false;
  }

  accountOperation(accountName, amount, operator) {
    for (let b of this.userAccounts) {
      if (accountName === b.accountName) {
        if (operator === "deposit") {
          b.deposit(amount);
        }
        if (operator === "withdraw") {
          b.withdraw(amount);
        }
        return b.balance1();
      }
    }
  }

  totalBalance() {
    let summary = 0;
    for (let b of this.userAccounts) {
      summary += b.balance1();
    }
    return summary;
  }

  heighestValue() {
    let balanceNumbers = [];
    for (let b of this.userAccounts) {
      balanceNumbers.push(b.balance1());
    }
    let heighestValue = Math.max(...balanceNumbers);
    for (let b of this.userAccounts) {
      if (b.balance1() === heighestValue) {
        return [b.accountType1(), b.balance1()];
        // return {"type":b.accountType1(),"balance":b.balance1()};
      }
    }
    return ["", 0];
  }

  lowestValue() {
    //let balanceNumbers = [];
    if (this.userAccounts.length < 1) return ["", 0];
    let b = this.userAccounts.reduce((prev, current) =>
      prev.balance1() < current.balance1() ? prev : current
    );
    return [b.accountType1(), b.balance1()];
  }

  replaceOption() {
    let str = "";
    for (let b of this.userAccounts) {
      str +=
        "<option value=" + b.accountName + ">" + b.accountType1() + "</option>";
    }
    return str;
  }

  removeAccount(accountName) {
    for (let b in this.userAccounts) {
      if (this.userAccounts[b].accountName === accountName) {
        this.userAccounts.splice(b, 1);
        break;
      }
    }
    return this.userAccounts;
  }
}

class City {
  constructor(key, name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
    this.key = key;
  }

  show() {
    return `${this.name} ${this.latitude} ${this.longitude} ${this.population}`;
  }

  movedIn(num) {
    if (num > 0) this.population += num;
    console.log(this.population);
    return this.population;
  }

  movedOut(num) {
    if (num > 0) {
      this.population -= num;
      if (this.population < 0) this.population = 0;
    }
    return this.population;
  }

  howBig() {
    if (this.population > 100000) {
      return "City";
    } else if (this.population > 20000) {
      return "Large Town";
    } else if (this.population > 1000) {
      return "Town";
    } else if (this.population > 100) {
      return "Village";
    }
    return "Hamlet";
  }

  whichSphere() {
    if (this.latitude > 0) {
      return "Northern Hemipnere";
    } else if (this.latitude < 0) {
      return "Southern Hemisphere";
    } else return "Equator";
  }
  latitude1() {
    return this.latitude;
  }

  longitude1() {
    return this.longitude;
  }
  name1() {
    return this.name;
  }

  population1() {
    return this.population;
  }
}

class Community {
  constructor() {
    this.communityCities = [];
    this.keySeris = 1;
  }

  createCity(name, key, latitude, longitude, population) {
    if (!key <= 0) this.keySeris = key;
    if (
      name === "" &&
      latitude === "" &&
      longitude === "" &&
      population === ""
    ) {
      return {
        result: false,
        message: "Please enter your infromation completely!"
      };
    }
    for (let b of this.communityCities) {
      if (
        b.name === name &&
        b.latitude === latitude &&
        b.longitude === longitude
      ) {
        return { result: false, message: "The City is invailed" };
      }
    }
    const newCity = new City(
      this.keySeris++,
      name,
      latitude,
      longitude,
      population
    );
    this.communityCities.push(newCity);
    return { result: true, newCity: newCity };
  }

  deleteCity(key) {
    for (let b in this.communityCities) {
      if (this.communityCities[b].key === key) {
        this.communityCities.splice(this.communityCities[b], 1);
      }
    }
    return this.communityCities;
  }

  getMostNorthern() {
    let lat = [];
    for (let b of this.communityCities) {
      lat.push(b.latitude1());
    }

    let heighestValue = Math.max(...lat);
    for (let b of this.communityCities) {
      if (b.latitude1() == heighestValue) {
        console.log(b);
        return b.name1();
      }
    }
  }

  getMostSouthern() {
    if (this.communityCities.length < 1) return ["", 0];
    let b = this.communityCities.reduce((prev, current) =>
      prev.latitude1() < current.latitude1() ? prev : current
    );
    return b.name1();
  }

  getPopulation() {
    let summary = 0;
    for (let b of this.communityCities) {
      summary += isNaN(parseFloat(b.population1()))
        ? 0
        : parseFloat(b.population1());
    }

    return summary;
  }

  popOperator(name, key, amount, inAndOut) {
    amount = parseFloat(amount);
    key = parseFloat(key);
    if (isNaN(amount)) return null;

    for (let b of this.communityCities) {
      if (b.name === name && b.key === key) {
        b.population = parseFloat(b.population);
        switch (inAndOut) {
          case "moveIn":
            b.movedIn(amount);
            break;
          case "moveOut":
            b.movedOut(amount);
            break;
          default:
            break;
        }
        return b;
      }
    }
  }

  addCityInInput() {
    let str = "";
    for (let b of this.communityCities) {
      str += `<option value='${b.name1()}' key='${b.key}'> ${b.name1()} ${
        b.key
      }</option>`;
    }
    return str;
  }
}

export { AccountController, Account, City, Community };
