import React from 'react';

const Todolists = ({list, deleteFun}) => {
	return (
		<div>
			<ul>
				{list.map((v,i)=>
					<li key={i}> {v.content}
					<button onClick={()=>deleteFun(v.id)}>X</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Todolists;