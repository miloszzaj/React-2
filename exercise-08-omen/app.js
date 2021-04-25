/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class Draw extends React.Component {

  state = {
    result: '',
    myArray: ['1', '2', '3'],
    value: ''
  }

  handleShowOption = () => {
    this.setState({
    result: Math.floor(Math.random() * 3) + 1
  })
    }

    handleAdding = () => {
      this.setState({
        myArray: [...this.state.myArray, this.state.value],
        value: ''
      })
      alert('numer dodany')
    }
    handleInput = (e) =>{
      console.log(e.target.value);
      this.setState({
        value: e.target.value})
        }

    render() {
    console.log(this.state.myArray);
    return (
      <div>
        <button onClick={this.handleShowOption}>wylosuj liczbę od 1 do 3</button>
        <br/>
        <input value={this.state.value} onChange={this.handleInput}/>
        <button onClick={this.handleAdding}>Dodaj coś jeszcze</button>
        <br/>
        <h1>wylosowana liczba to: {this.state.result}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Draw />, document.getElementById('root'))