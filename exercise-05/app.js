class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "2",
  }

handleChange = (e) => {
  if(e.target.type === 'checkbox') {
    this.setState({
      [e.target.name] : e.target.checked
    })
  } else {
  this.setState({
    [e.target.name] : e.target.value
  })
}
}

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input 
          name='city'
          value={this.state.city} 
          type='text'
          onChange={this.handleChange}
          />
          <br/>
          <label>Napisz coś o mieście
            <textarea
            name='text' 
            value={this.state.text} 
            onChange={this.handleChange}>

            </textarea>
            <br/>
            <label>
              Czy to miasto jest ok?
              <input 
              name='isLoved'
              type='checkbox' 
              checked={this.state.isLoved} 
              onChange={this.handleChange}
              />
            </label>
          </label>
          <br/>
          Ile razy tam byliście:
          <select 
          name='number'
          value={this.state.number} 
          onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
      </div>

    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))
