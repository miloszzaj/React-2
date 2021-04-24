

const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: '',
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  }

  currencies = [
    {
    id:1,
    name: 'dolar',
    ratio:3.6,
    title: 'wartość w dolarach:'
},
    {
      id:2,
      name: 'euro',
      ratio:4.3,
      title: 'wartość w euro:'
    },
    {
      id:3,
      name: 'pound',
      ratio:5.5,
      title: 'wartość w funtach:'
    }
  ]

handleChange = (event) => {
  this.setState({
    amount: event.target.value
  })
}

  render() {
      const {amount} = this.state;
      const calculators = this.currencies.map(currency=> (
        <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount}/>
      ))
    return (
      <div className="app">
          <label>
            <input 
            type='number'
            value={this.state.amount}
            onChange={this.handleChange}
            />
          </label>

          {calculators}

       </div>
    )

  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
