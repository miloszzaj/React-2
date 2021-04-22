const ListItems = (props) => {

    const items = props.items.map(item=> (
        <Item 
        key={item.id} 
        id={item.id}
        name={item.name}
        active={item.active}
        changeOrder={props.changeOrder}
        />
    ))

    return (
        <div className='list'>
            <h1>Zamówienie:</h1>
            <ul>
                {items}
            </ul>
        </div>
    )
}