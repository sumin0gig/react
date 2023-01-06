import React,{useState} from 'react';
import "./Todolist.css";

const Todolist = () => {

	// -------------------상태-------------------
	const [list,setlist]=useState([
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
		}

	]);
	const [text,settext]=useState(""); //input의 value
	const [idnum,setidnum]=useState(4);
	// -------------------함수-------------------
	const onchanged =(e)=>{
		settext(e.target.value);
	}
	const updateFun =()=>{
		setlist([
			...list,
			{
				id:idnum,
				content:text
			}
		]);
		settext("");
		setidnum(idnum+1);
	}
	const deleteFun =(id)=>{
		setlist(list.filter(v=>v.id != id));
	}

	// -------------------출력-------------------
	return (
		<div className='todo'>
			<div className='header'>
				<h1>Todolist</h1>
				<input value={text} onChange={onchanged}/>
				<button onClick={updateFun}>+</button>
			</div>
			<ul>
				{list.map((v,i)=><li key={i}> {v.content}<button onClick={()=>deleteFun(v.id)}>X</button></li>)}
			</ul>
		</div>
	);
};

export default Todolist;