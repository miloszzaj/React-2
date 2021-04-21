
const data = {
  users: [
    {
      id: 1,
      age: 19,
      name: 'Michał',
      nationality:'Uganda',
      sex: 'male'
    },
    {
      id: 2,
      age: 29,
      name: 'Ania',
      nationality:'Cameroon',
      sex: 'female'
    },
    {
      id: 3,
      age: 39,
      name: 'Roksi',
      nationality:'RPA',
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

  render() {
    let pF = this.props.data.users;
    pF = pF.filter((user)=> user.sex === 'female')
    return (
      <div>
        {pF.map((dupa) => <Item key={dupa.id} user={dupa}/>)}
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
