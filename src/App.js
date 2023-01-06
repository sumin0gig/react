import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HeaderInput from './HeaderInput';
import Todolists from './Todolists';

function App() {
  // -------------------상태-------------------
	const [todoState,setTodoState]=useState({
    list:[
		{
			id:1,
			content: "1번"
		},
		{
			id:2,
			content: "2번"
		},
		{
			id:3,
			content: "3번"
		}],
    text: "",
	});
const [id,setId]=useState(4);
	
  // -------------------함수-------------------
	const onchanged =(e)=>{
		setTodoState({
      ...todoState,
      text:e.target.value
    });
	}
  const updateFun =()=>{
    const newTodoLists=[
      ...todoState.list,
      {id:id,
        content:todoState.text}
    ];
    setTodoState({
      list:newTodoLists,
      text:"",
    })
    setId(id+1);
    console.log(todoState.list);
  }
  const deleteFun =(id)=>{
    const newTodoLists=todoState.list.filter(v=>v.id != id);
    
		setTodoState({
      ...todoState,
      list: newTodoLists
    });
	}
  // -------------------출력-------------------
  return (
    <div className="App todo">
      <HeaderInput text={todoState.text}
      onchanged={onchanged}
      updateFun={updateFun}/>
      <Todolists list={todoState.list} deleteFun={deleteFun}/>
    </div>
  );
}

export default App;
