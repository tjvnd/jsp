export default function TodoList ({$target, initialState,onDrop, onRemove}){
    const $todoList = document.createElement('div')
    $todoList.setAttribute('droppable', 'true')
    $target.appendChild($todoList)

    this.state = initialState

    this.setState = nextState =>{
        this.state = nextState
        this.render()
    }

    this.render =() =>{
        const{title, todos =[] } =this.state
        $todoList.innerHTML = `
            <h2>${title}</h2>
            <ul>
                ${todos.map(todo=>
                    `<li data-id="${todo._id}" draggable="true">${todo.content}<button>x</button></li>`).join('')}
            </ul>
            ${todos.length ===0 ? '설정된 일이 없습니다' :''}
        `
    }

    this.render()

    $todoList.addEventListener('dragstart', e=>{
        const $li = e.target.closest('li')
        
        e.dataTransfer.setData('todoId', $li.dataset.id)
    })

    $todoList.addEventListener('dragover', e=>{
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    })

    $todoList.addEventListener('drop', e=>{
        e.preventDefault()
        const dtoppedTodoId=e.dataTransfer.getData('todoId')


        const {todos} = this.state

        if(!todos.find(todo=>todo._id ===dtoppedTodoId)){
            onDrop(dtoppedTodoId)
        }
    })

    $todoList.addEventListener('click', (e)=>{
        if(e.target.tagName === 'Button'){
            const $li = e.target.closest('li')
            $alert($li.dataset.id)

            if ($li){
                onRemove($li.dataset.id)
            }
        }
    })
}