import "./styles.css";
import { v4 } from "uuid";
import { Component } from "react";
import List from "./components/List/list.jsx";

const optionss = [
  { optionId: "INCOME", displayText: "Income" },
  { optionId: "LOAN", displayText: "Loan" },
];

class App extends Component {
  state = {
    title: "",
    amount: "",
    type: optionss[0].displayText,
    list: [],
  };

  updateText = (event) => {
    const { title } = this.state;
    this.setState({ title: event.target.value });
  };
  updateAmount = (event) => {
    const { amount } = this.state;
    this.setState({ amount: event.target.value });
  };
  updateType = (event) => {
    const { type } = this.state;
    this.setState({ type: event.target.value });
  };
  addTransaction = (event) => {
    event.preventDefault();
    const { title, amount, type, list } = this.state;
    const newTransaction = {
      ID: v4(),
      TITLE: title,
      AMOUNT: parseInt(amount),
      TYPE: type,
    };
    this.setState((prevState) => ({
      list: [...prevState.list, newTransaction],
      title: "",
      amount: "",
      type: optionss[0].displayText,
    }));
  };

  deleteList = (ID) => {
    const { list } = this.state;
    const arr = list.filter((i) => i.ID !== ID);
    this.setState({ list: arr });
  };

  incomee = () => {
    const { title, amount, type, list } = this.state;
    let incomeee = 0;
    list.forEach((i) => {
      if (i.TYPE === optionss[0].displayText) {
        incomeee += i.AMOUNT;
      }
    });
    return incomeee;
  };

  balancee = () => {
    const { title, amount, type, list } = this.state;
    let incomeee = 0;
    let balanceee = 0;
    list.forEach((i) => {
      if (i.TYPE === optionss[0].displayText) {
        incomeee += i.AMOUNT;
      }
    });
    list.forEach((i) => {
      if (i.TYPE === optionss[1].displayText) {
        balanceee += i.AMOUNT;
      }
    });
    return incomeee - balanceee;
  };
  expenses = () => {
    const { title, amount, type, list } = this.state;
    let expensess = 0;

    list.forEach((i) => {
      if (i.TYPE === optionss[1].displayText) {
        expensess += i.AMOUNT;
      }
    });
    return expensess;
  };
  //Salary
  //50000
  render() {
    const { title, amount, type, list } = this.state;
    const a = this.incomee();
    const b = this.balancee();
    const c = this.expenses();

    return (
      <div className="App">
        <h1>balance:{b}</h1>
        <h1>income:{a}</h1>
        <h1>expenses: {c}</h1>
        <form action="" onSubmit={this.addTransaction}>
          <input type="text" onChange={this.updateText} value={title} />
          <input type="text" onChange={this.updateAmount} value={amount} />
          <select name="gender" id="" onChange={this.updateType} value={type}>
            {optionss.map((i) => (
              <option value={i.displayText} key={i.optionId}>
                {i.displayText}
              </option>
            ))}
          </select>
          <button type="submit">Add Transaction</button>
        </form>
        {list.map((i) => (
          <List key={i.ID} data={i} deleteList={this.deleteList} />
        ))}
      </div>
    );
  }
}

export default App;
