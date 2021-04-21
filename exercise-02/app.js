class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
  }
  
  
  handleRemoveFromC = () => {
  this.setState({
    shoppingCart: this.state.shoppingCart -1,
  })
}

handleAddToC = () => {
  this.setState({
    shoppingCart: this.state.shoppingCart +1,
  })
}

handleClickBuy = () => {
  this.setState({
    availableProducts: this.state.availableProducts - this.state.shoppingCart,
    shoppingCart: 0,
  })}
  
  render() {
    const {shoppingCart, availableProducts,  } = this.state
    const style = this.state.shoppingCart===0 ? {opacity: 0.3} : {};

    return (
      <>
        <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromC}>-</button>
        <span style={style} > {shoppingCart} </span>
        <button disabled={shoppingCart === availableProducts ? true : false}onClick={this.handleAddToC}>+</button>
        {shoppingCart>0 && <button onClick={this.handleClickBuy}>Kup</button>}
        <div>{availableProducts}</div>      
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))