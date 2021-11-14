import React from 'react';
import { useState } from 'react';
import './App.css';
import {AiFillDelete} from 'react-icons/ai';



function App() {

  const [ waitList, setWaitList ] = useState([]);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [opt, setOpt] = useState("");
  const [confirmList, setConfirmList] = useState([]);
  const [count,setCount] = useState(0);
  const [countwait, setCountwait] = useState(0);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setWaitList([...waitList, {name: name, number: num, options: opt}]);
    console.log(waitList);
    setName('');setNum('');setOpt('');
    setCountwait(countwait => countwait+1);
  };

  const handleDelete = (index) =>{
    var newList = waitList;
    newList.splice(index,1);
    setWaitList([...newList])
    setCountwait(countwait => countwait - 1);
  }

  const handleDelete2 = (index) =>{
    var newList = confirmList;
    newList.splice(index,1);
    setConfirmList([...newList])
    setCount(count => count - 1);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setConfirmList([...confirmList,...waitList]);
    setWaitList([]);
    let c = countwait;
    setCount(count => count + c);
    setCountwait(0);
  }

  return (
    
    <div className='main'>

      <h1 >Invitation App</h1>
      <form onSubmit={handleSubmit}>
        <input type='textvf' placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} className='inputs' required /> 
        <input type='text' placeholder='Enter Phone Number' pattern="[1-9]{1}[0-9]{9}" value={num} onChange={e => setNum(e.target.value)} className='inputs' required/>
        <select className='inputs' value={opt} onChange={e => setOpt(e.target.value)} required>
          <option value="VVIP">VVIP</option>
          <option value="VIP">VIP</option>
          <option value="Special">Special</option>
          <option value="General">General</option>
        </select>
        <button type='submit' className='add'>
          Add
       </button>
      </form>

      <div>
      {waitList.length>0 ? 
        <div>
       
        <h2>Wait List</h2>
       {waitList.map((person,index) => 
          <div key={index} className="list1">
              <div>{person.name} - {person.number} - {person.options}
              <AiFillDelete size={30} onClick={() => handleDelete(index)} className='delete'/>
              {/* <input type="button" value="Delete" className="delete" onClick={() => handleDelete(index)} /> */}
              </div>
          </div>
          )}
          
          <form onSubmit={handleAdd}>
            <input type="submit" value="Confirm Add" className="add" />
          </form> 
          <br />
        </div>
      : 
        <div>
          <p>Add people to invite!</p>
          <br />
        </div>}
      </div>
        <div>
          {confirmList.length>0 ? 
            <div>
              <h2>Invited List {count}</h2>
              {confirmList.map((person,index)=>(
                <div className="list1">
                  <div key={index}>
                  <div>{person.name} - {person.number} - {person.options}
                  <AiFillDelete size={30} onClick={() => handleDelete2(index)} className='delete'/>
                    {/* <input type="button" value="Delete" className="delete" onClick={() => handleDelete2(index)} /> */}
                    </div>
                  </div>
              </div>
              ))}
            </div>
            :
            <div>
              {/* <p>Click on Confirm add to see the invite list</p> */}
            </div>
          }
        </div>
      </div>
    )
} 


export default App ;
