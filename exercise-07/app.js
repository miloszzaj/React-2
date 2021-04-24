


const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: '',
    product: 'electricity'
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


  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }


  handleSelect = e => {
    this.setState({
      product: e.target.value
    })
  }


  render() {
      const {amount, product} = this.state;
      const calculators = this.currencies.map(currency=> (
        <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount}/>
      ))
    return (
      <div className="app">
        
          <label>Wybierz produkt:
            <select value={product} onChange={this.handleSelect}>
              <option value='electricity'>prąd</option>
              <option value='gas'>gaz</option>
              <option value='oranges'>pomarańcze</option>
            </select>
          </label>
          <br/>
          <label>
            <input 
            type='name'
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






