import { useState ,memo} from 'react'

function ToDoApp() {

  let initState=[
    {
      id:1,
      title:"Title 1",
      description:"Description 1"
    },
    {
      id:2,
      title:"Title 2",
      description:"Description 2"
    },
    {
      id:3,
      title:"Title 3",
      description:"Description 3"
    }
  ]

  let [todos,setTodos]=useState(initState);

  function addTodo(){
    let value=Math.random();
    let count=todos.length;
    let todo={
      id:++count,
      title:value,
      description:"Descriptio >>"+value
    }

    setTodos([...todos,todo]);
  }

  return(
    <div>
      <button onClick={addTodo}>Add ToDO</button>
    {
      todos.map((item)=>{
        return(
          <ToDo key={item.id} title={item.title} description={item.description}></ToDo>
        )
      })
    }
    </div>
  )
}

function ToDo({title,description}){
  return(
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <br />
    </>
  )
}

export default ToDoApp;
