import { useReducer, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import Card from './components/Card'
import items from './data/items';
import CardForm from './components/CardForm'
import Panel from './components/Panel'
import { ProvaContext } from './stores/ProvaContext'

import { useSelector, useDispatch } from 'react-redux'
import { add } from './redux/citiesSlice'


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState('')

  const [elements, setElements] = useState([])

  const addElements = () => {
    const newElement = 4;
    const newList = [...elements, newElement]
    setElements(newList);

    console.log(newList);
  };

  const [stateItems, setStateItems] = useState(items);
  
  const addStateItem = (stateItem) => {
    //debugger;
    setStateItems([...stateItems, stateItem]);
  };

  // REDUCER start
  const[formState, dispatchFormState] = useReducer(formReducer,{ name:'', email:''});

  const handleFieldChange = (field, value) => {
    dispatchFormState({type: "CHANGE_FIELD", field, value});
  };

  const handleResetClick = (e) => {
    e.preventDefault();
    dispatchFormState({type: "RESET_FORM"});
  }

  const handleSendClick = (e) => {
    e.preventDefault();
    console.log(formState);
  }
  
  function formReducer(state, action) {
    if( action.type == "CHANGE_FIELD"){
        return {...state, [action.field]: action.value}
    } else if( action.type == "RESET_FORM"){
      
      return { name:'', email:''};
    } else {
      return state;
    }
  }

   // REDUCER end


  // REDUX start
  const cities = useSelector((state) => state.cities.value);
  const dispatch = useDispatch();
  // REDUX end


  return (
    <ProvaContext.Provider value={{count, setCount}}>
      
      <HeaderBar></HeaderBar>

      <div>
        <p>REDUX start</p>
{
  cities.map((city) => (
<p key={city.id}>{city.name}</p>
))}

        <p >REDUX end</p>
      </div>
      
      <button onClick={() => dispatch(add({ id: 3, name: 'Turin', description: 'ddddd'}))
      }>ADD</button>
      
      
      
      <NavBar></NavBar>
 
      <div className="card">
        <button onClick={() => setUser((user) => 'Pippo')}>
          user is {user}
        </button>
       

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => addElements()}>
          add
        </button>
      </div>
     
      <hr></hr>
      <b>List of Items</b><br/>
      {
        stateItems.map((item) => (
          <Card key={item.code} item={item}></Card>
        ))
      }

      <CardForm addCard={addStateItem}></CardForm>


      <hr></hr>
      EVENTS
      <br/>
      <button onClick={() => alert('ciao')}> {elements.length} </button>
      <button onClick={handleClick}> alert2 </button>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' className="bg-slate-400" />
        <input type='submit' value='submit'/>
      </form>




      <Panel></Panel>





      USEREDUCER
      <br></br>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' value={formState.name} onChange={(e) => handleFieldChange("name", e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' name='email' value={formState.email} onChange={(e) => handleFieldChange("email", e.target.value)}></input>
        </div>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleSendClick}>Invia</button>
      </form>


      
    </ProvaContext.Provider>
  )
}

function handleClick(){
  alert('bao')
}

function handleChange(e){
  console.log(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  console.log(e);


}



export default App
