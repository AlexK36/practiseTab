import { Component } from "react"
import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import EmployeesAddForm from "../employers-add-form/employers-add-form"
import EmployersList from "../employers-list/employers-list"
import SearchPannel from "../search-panel/search-panel"
import "./app.css"

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            data: [
                {name: "Alex K.", salary: 800, increase:false, id: 1},
                {name: "Den K.", salary: 3000, increase:false, id: 2},
                {name: "Irina H.", salary: 1500, increase:false, id: 3}
            ]
        }
        this.maxId = 4
    }

deleteItem = (id) => {
    this.setState(({data}) => {
        // const index = data.findIndex(elem => elem.id === id)
        // const before = data.slice(0, index)
        // const after = data.slice(index +1)
        // const newArr = [...before, ...after]

        return {
            data: data.filter(item => item.id !== id)
        }
    }) 
}

addItem = (name,salary) => {
    const newItem = {
        name,
        salary,
        increase: false,
        like: false,
        id: this.maxId++
    }
    this.setState(({data}) => ({
        data: [...data, newItem]
    }))
}

onToggleIncrease = (id) => {
    console.log(`Increase ${id}`)
}

onToggleLike = (id) => {
    console.log(`Like ${id}`)
}

render(){


    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPannel/>
                <AppFilter/>
            </div>
            <EmployersList data = {this.state.data}
            onDelete = {this.deleteItem}
            onToggleIncrease = {this.onToggleIncrease}
            onToggleLike = {this.onToggleLike}/>
            <EmployeesAddForm onAdd = {this.addItem}/>
        </div>
    )
}
}

export default App