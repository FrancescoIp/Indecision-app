console.log("App.js is running")

// JSX
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hand of a computer',
  options: []
}

const onFormSubmit = (e) => {
  // ci permette di non ricaricare la pagina quando clicchiamo su Submit
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate()
  };
};

const onClickRemoveAll = () => {
  app.options = []
  renderTemplate()
}

const onClickGenerateAnswer = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option)
}

// const numbers = [55, 101, 1000];
// const liNumbers = numbers.map((number) => <li>number</li>
// )


const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onClickGenerateAnswer}>What should I do?</button>
      <button onClick={onClickRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
          //usare option come key, non è corretto in quanto se insieriamo due option uguali, avranno la stessa
        }
      </ol>
      {/* OnSubmit, non chiama il metodo "onFormSubmit()" ma si riferisce soltanto
      Perchè se lo chiamasse, undefined sarebbe il valore di ritorno  */}
      <form onSubmit={onFormSubmit} >
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app')

renderTemplate()

