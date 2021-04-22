const Item = (props) => {
    return (
        <li 
        className={props.active ? 'enabled' : 'disabled'}
        // style={props.active ? {fontWeight: 'bold'} : {color: 'gray'}}
        onClick ={()=>props.changeOrder(props.id)}
        >{props.name}
        </li>
    )
}