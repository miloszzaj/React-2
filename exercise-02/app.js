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
  
  // console.log(this.state.availableProducts)

  render() {
    const sC = this.state.shoppingCart
    const aP = this.state.availableProducts
    const style = this.state.shoppingCart===0 ? {opacity: 0.3} : {};

    return (
      <>
        <button disabled={sC ? false : true} onClick={this.handleRemoveFromC}>-</button>
        <span style={style} > {sC} </span>
        <button disabled={sC === aP ? true : false}onClick={this.handleAddToC}>+</button>
        {sC>0 && <button onClick={this.handleClickBuy}>Kup</button>}
        <div>{aP}</div>      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))