import './App.css';
import {useState} from 'react'
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

function App() {
  
  const [neighbours, setNeighbours] = useState([{
    id: 0,
    name: 'Phil',
    phoneNumber: 2367,
    location: [342,159]
  }])
  
  
  const addNeighbour = (name, phoneNumber, longitude, latitude)=>{
      setNeighbours(neighbours=>([...neighbours,{
        id: (1 + Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 1000) + Math.floor((Math.random() * 10)) + Math.floor(Math.random() * 1)),
        name : name,
        phoneNumber: phoneNumber,
        location: [longitude, latitude]
      }]))    
  }

  const removeNeighbour = (id)=>{
      console.log(id)
      setNeighbours(neighbours.filter(neighbour=>{
        return neighbour.id !== id
      }))
  }
  

  return (
    <div >
        <UserForm addNeighbour={addNeighbour}/>
        <button onClick={()=>console.log(neighbours)}>Log</button>
        <Users neighbours={neighbours} removeNeighbour={removeNeighbour}/>
    </div>
  );
}

export default App;
