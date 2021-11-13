import React from 'react';
import { useState } from 'react';
import './App.css';


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
    setWaitList([...waitList, name]);
    setName('');setNum('');setOpt('');
    setCountwait(countwait => countwait+1);
  };

  const handleDelete = (index) =>{
    var newList = waitList;
    newList.splice(index,1);
    setWaitList([...newList])
    setCountwait(countwait => countwait - 1);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setConfirmList([...confirmList,...waitList]);
    console.log(confirmList);
    setWaitList([]);
    let c = countwait;
    setCount(count => count + c);
    setCountwait(0);
  }

  return (
    
    <div className='main'>
      <h1 >Invitation App</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} className='inputs' required /> 
        <input type='text' placeholder='Enter Phone Number' value={num} onChange={e => setNum(e.target.value)} className='inputs' required/>
        <select className='inputs' value={opt} onChange={e => setOpt(e.target.value)} required>
          <option value="1">VVIP</option>
          <option value="2">VIP</option>
          <option value="3">Special</option>
          <option value="4">General</option>
        </select>
        <button type='submit' className='inputs'>
          Add
       </button>
      </form>

      <div>
      {waitList.length>0 ? 
        <div>
        <h2>Wait List</h2>
       {waitList.map((names,index) => 
          <div key={index} className="list1">
              {names}
              <input type="button" value="Delete" className="delete" onClick={() => handleDelete(index)} />
          </div>
          )}
          
          <form onSubmit={handleAdd}>
            <input type="submit" value="Confirm Add" className="delete addbtn " />
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
              {confirmList.map((names,index)=>(
                <div className="list1">
                  <li key={index}>
                    {names}
                  </li>
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

  
       
  


export default App;
