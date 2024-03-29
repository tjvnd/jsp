import {request} from "./api.js"
import TodoList from "./TodoList.js"
import SyncTaskManager from "./SyncTaskManager.js"
export default function App({$target}){
    const tasks = new SyncTaskManager();

    this.state = {
        todos :[]
    }

    const handleTodoDrop = async (todoId, updateValue) =>{
        const nextTodos = [...this.state.todos]
        const todoIndex = nextTodos.findIndex(todo =>todo._id === todoId)

        nextTodos[todoIndex].isCompleted = updateValue
        this.setState({
            ...this.state,
            todos:nextTodos
        })






        tasks.addTask({
            url: `/${todoId}/toggle`,
            method : 'PUT'
        })
    }

    const handleTodoRemove = (todoId) =>{
        const nextTodos = [...this.state.todos]

        const todoIndex = nextTodos.findIndex(todo =>todo._id ===todoId)

        nextTodos.splice(todoIndex, 1)

        this.setState({
            ...this.state,
            todos:nextTodos
        })

        tasks.addTask({
            url:`/${todoId}`,
            method : 'DELETE'
        })
    }

    const incompletedTodoList = new TodoList({
        $target,
        initialState:{
            title:'미완료',
            todos:[]
        },
        onDrop : (todoId)=>handleTodoDrop(todoId, false),
        onRemove : handleTodoRemove
    });
    const completedTodoList = new TodoList({
        $target,
        initialState:{
            title:'완료',
            todos: []
        },
        onDrop : (todoId)=>handleTodoDrop(todoId, true),
        onRemove : handleTodoRemove
    })

    this.setState = nextState =>{
        this.state = nextState;

        const{todos} = this.state
        incompletedTodoList.setState({
            ...incompletedTodoList.state,
            todos:todos.filter(todo=> !todo.isCompleted)
        })

        completedTodoList.setState({
            ...completedTodoList.state,
            todos: todos.filter(todo=>todo.isCompleted)
        })
    }
    const fetchTodos = async () =>{
        const todos = await request('')

        this.setState({
            ...this.state,
            todos
        })
    }
    fetchTodos()

    const $button = document.createElement('button')
    $button.textContent = '동기화'

    $target.appendChild($button)
    $button.addEventListener('click', () =>tasks.run())
    
}