class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const count = this.state.count;
    if (prevState.count !== count) {
      localStorage.setItem('count', count)
      console.log("ciaone")
    }
  }

  componentDidMount() {
    const count = Number.parseInt((localStorage.getItem('count')), 10)
    if(!isNaN(count)){
      this.setState(() => ({ count: count }))
    }
  }

  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  };
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  };
  handleReset() {
    this.setState(() => {
      //in questo caso non abbiamo bisogno del valore dello stato precedente in quanto
      // indipendentemente dallo stato precedendo dobbiamo riportare il contatore a zero
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={40} />, document.getElementById('app'))
