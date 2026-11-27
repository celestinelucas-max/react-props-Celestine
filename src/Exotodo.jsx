import { useState } from "react";

export default function AppTodo() {

  const [todos , setTodos] = useState([
    {
      id : 1,
      titre : "faire la vaisselle",
      completed : false
    }
  ])

// ajout 
  const addTask = (title) => {
      setTodos([...todos,{titre:title,completed:false,id:todos[todos.length - 1].id + 1}])
    }


  // retirer
  const removeTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  // modifier
  const updateTask = (id) => {
  setTodos((prev) => prev.map((t) => t.id === id ? {...t,completed:!t.completed} : t))
}

  //style complété
 
  const styleC =  {
    backgroundColor: "blue",
    color : "black"
    
  }

  return (
    <>
    {/* <p style={{
      backgroundColor : "red",
      color : "black"
      }}>test</p>

  <p style={styleC}>test</p> */}

      <InputTodo ajout={addTask} />

      <TodosList 
      listeDeTache={todos} 
      updateTask={updateTask} 
      deleteTask={removeTask}
      />

        <p>Nombre de tâches : {todos.length} </p>





      {/*avec un composant gérer l'affichage  , la modification et la suppression: <button onClick={}> */}

    </>
  )
}

// Ajouter un tache
function InputTodo({ajout,style}){

   const [inputValue,setinputValue] = useState("")

   const [isCorrect, setisCorrect] = useState(true)

   const sendValue = () => {
     if (inputValue.length < 3) {
      setisCorrect(false)
     } else {ajout(inputValue)
    }
    
   }

   return (
     <>

     {/* <div className={t.completed ? complete : incomplete} style={style}> */}
    <div className="nTache">
      <label>Nouvelle tâche </label>
      <input 
      type="text" 
      onChange={(e) => setinputValue(e.target.value)}/>
      <button onClick={() => sendValue()}> Ajouter </button>
     </div>

    {isCorrect ? null : <p>Merci d'encoder un tache minimum 3 caractère</p>}
     </>

   )}

 
// afficher la liste des to do 
 function TodosList({listeDeTache,deleteTask,updateTask}){


   return (
    <>
      <h1>Liste des tâches</h1>
      {listeDeTache.map((e) => 
      <TodoItem 
      key={e.id} 
      tache={e} 
      update={updateTask} 
      deleteTask={deleteTask}/>)}
    </>
    )

  }


function TodoItem ({tache,update,deleteTask}) {
   // compléter
 
    return (
     <>
       <li className={tache.completed ? "fini" : "aFaire"}>
         <p> Tâches : {tache.titre} </p>
         <p>{tache.completed ? "fini" :"A faire" }</p>
         <button onClick={() => update(tache.id)} >Complete task</button>
         <button onClick={() => deleteTask(tache.id)} >Delete task</button>
        
       </li>
     </>

    )


 }

