class App extends React.Component {
  state = { 

   }
  render() {

    return ( 
      <div>
        <ul>
          <li>Jan<button>Usuń</button></li> 
          <li>Małgosia<button>Usuń</button></li>
          <li>Krzych<button>Usuń</button></li>
          <li>Dino<button>Usuń</button></li>
        </ul>
      </div>
     );
  }
}
 
ReactDOM.render(<App />, document.getElementById('root'))
