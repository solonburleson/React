import React, {useState} from 'react';

const List = props => {
    const [todos, setTodos] = useState({
        myList: [{name: 'Todos Assignment', status: true}]
    })

    const tableItem = (item, idx) => {
        console.log(item.status + ' ' + idx)
        return(
            <tr key={idx}>
                {item.status ? <td style={strikethrough}>{item.name}</td> : <td>{item.name}</td>}
                <td>{item.status ? <input type="checkbox" defaultChecked onClick={() => statusChange(idx, item.status)}/> : <input type="checkbox" onClick={statusChange}/>}</td>
                <td><button onClick={() => deleteTodo(idx)}>Delete</button></td>
            </tr>
        )
    }

    const deleteTodo = (idx) => {
        setTodos({
            ...todos,
            todos: todos.myList.pop(idx)
        })
    }

    const statusChange = (idx, status) => {
        let statusChange = false;
        if(status === false) {
            statusChange = true;
        }

        console.log(idx)
        console.log(todos.myList[idx])

        setTodos({
            ...todos,
            myList: todos.myList[idx]['status'] = statusChange
        })
        console.log(todos)
    }

    const strikethrough = {
        textDecoration: 'line-through',
        color: 'lightgrey'
    }

    const tableStyle = {
        width:'30%',
        margin: '0px auto'
    }

    const todoSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        let todoObj = {
            name: e.target.name.value,
            status: false
        }
        setTodos({
            ...todos,
            myList: todos.myList.push(todoObj)
        })
        e.target.name.value = ''
        console.log(todos)
    }

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.myList.length > 0 && todos.myList.map((item, idx) => tableItem(item, idx))}
                </tbody>
            </table>
            <form onSubmit={todoSubmit}>
                <input type="text" name="name" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default List;