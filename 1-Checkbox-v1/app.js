const ValidationMessage = (props) => <p>{props.txt}</p>

const Form = (props) => {
  const {submit, change, isConfirmed} = props;
  return(
        <form onSubmit={submit}>
          <input type='checkbox' id='age' onChange={change} checked={isConfirmed}/>
          <label htmlFor='age'>mam co najmniej 16 lat </label>
          <br/>
          <button type='submit'>Kup bilecik</button>
        </form>
)}
class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmitted){
    this.setState({
      isFormSubmitted: true
    })
  }
  }

  displayMessage = () => {
    if(this.state.isFormSubmitted) {
    return (this.state.isConfirmed ? <ValidationMessage txt='Możesz obejrzeć film. Zapraszamy!'/> : <ValidationMessage txt='Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!'/>)
  } else {return null} }


  render() {

    const {isConfirmed, isFormSubmitted} = this.state 

    return(
      <>
        <h1>kup bilet</h1>
        <Form 
        change={this.handleCheckboxChange} 
        submit={this.handleFormSubmit}
        checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    )
  }

}

ReactDOM.render(<TicketShop />, document.getElementById('root'))