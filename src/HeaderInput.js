import React from 'react';
import "./Todolist.css";


const HeaderInput = ({text,onchanged,updateFun}) => {
	return (
		<>
			<div className='header'>
				<h1>Todolist</h1>
				<input value={text} onChange={onchanged}/>
				<button onClick={updateFun}>+</button>
			</div>
		</>
	);
};

export default HeaderInput;