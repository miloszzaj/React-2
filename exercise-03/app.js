
const data = {
  users: [
    {
      id: 1,
      age: 19,
      name: 'Michał',
      // nationality:'Uganda',
      sex: 'male'
    },
    {
      id: 2,
      age: 29,
      name: 'Ania',
      // nationality:'Cameroon',
      sex: 'female'
    },
    {
      id: 3,
      age: 39,
      name: 'Roksi',
      // nationality:'RPA',
      sex: 'female'
    }
  ]
}
const Item = ({user}) => (
<div className='userInfo'>
  <h1>{user.name}</h1>
  <p>Info:</p>
  <h2>Wiek użytkownika {user.age}</h2>
  <h2>Płeć: {user.sex}</h2>
  <h2>Kraj pochodzenia to: {user.nationality}</h2>
</div>
)

class ListItems extends React.Component {

  state = {
    select: 'all',
  }
  handleUsersFilter(option)  {
    this.setState({
      select: option
    })
  }

  userList = () => {
    let people = this.props.data.users;
    switch(this.state.select) {
      case 'all':
      return people.map(user=><Item user={user} key={user.id}/>);
      case 'female':
      people = people.filter(user=>user.sex === 'female');
      return people.map(user=><Item user={user} key={user.id}/>)
      case 'male':
      people = people.filter(user=>user.sex === 'male');
      return people.map(user=><Item user={user} key={user.id}/>)
      default: 
      return 'brak danych'
    }

  }
  render() {

    return (
      <div>
          <button onClick={this.handleUsersFilter.bind(this, 'all')}>All genders</button>
          <button onClick={this.handleUsersFilter.bind(this, 'male')}>Male</button>
          <button onClick={this.handleUsersFilter.bind(this, 'female')}>Female</button>
          {this.userList()}
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
