class App extends React.Component {
  constructor(props) {
    super(props);
    this.hadleToggle = this.hadleToggle.bind(this);
    this.state = {
      visible: false
    }
  }
  hadleToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.hadleToggle}>{this.state.visible ? "Hide Details" : "Show Details"}</button>
        {this.state.visible && <p>Here some details to show or to hide :D</p>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

// let toggle = false

// const onClickToggle = () => {
//   toggle = !toggle
//   render()
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onClickToggle}>{toggle ? "Hide Details" : "Show Details"}</button>
//       {toggle && <p>Here some Text as detail to show! You are welcom!</p>}
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// };


// const appRoot = document.getElementById('app')


// render()

