import EmployersListItem from "../employers-list-item/employers-list-item"
import "./employers-list.css"

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elem = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            //<EmployersListItem name = {item.name} salary={item.salary}/> или же развернуть item спредом 
            <EmployersListItem
             key={id}
            {...itemProps}
            onDelete = {()=> onDelete(id)}
            onToggleIncrease = {() => onToggleIncrease(id)}
            onToggleLike = {() => onToggleLike(id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default EmployersList