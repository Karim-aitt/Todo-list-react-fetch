// NO USAR ESTE COMPONENTE, LEGACY
// import React, { useState } from "react";
// import api from "../api.js";

// function Todo() {
// 	const [item, setItem] = useState();
// 	const [itemArray, setItemArray] = useState([]);
// 	const [hidden, setHidden] = useState(true);
// 	const [buttonShown, setButtonShown] = useState(false);

// 	let resList = api.getTask();

// 	resList.then((res) => {
// 		setItemArray(res);
// 		console.log(res);
// 		console.log(itemArray);
// 	});

// 	setItemArray(api.getTask());

// 	function addItem() {
// 		setItemArray((prev) => {
// 			return [...prev, item];
// 		});
// 		setItem("");
// 		setHidden(false);

// 		// api.postTask(item); // postTASK
// 	}

// 	function handleChange(event) {
// 		const { value } = event.target;
// 		setItem(value);
// 	}

// 	function deleteTask(key) {
// 		api.deleteTask(item[key]);

// 		const newItemArray = itemArray.filter((task, index) => index != key);
// 		setItemArray(newItemArray);

// 		if (itemArray.length == 1) {
// 			setHidden(true);
// 		}
// 		// deleteTASK
// 	}

// 	return (
// 		<div className="container">
// 			<div className="heading">
// 				<h1>To-Do List</h1>
// 			</div>
// 			<div className="form d-flex">
// 				<input
// 					type="text"
// 					placeholder="Write your task"
// 					onChange={handleChange}
// 					value={item}
// 				/>
// 				<button className="buttonAdd d-flex ms-auto" onClick={addItem}>
// 					ADD
// 				</button>
// 			</div>
// 			<div>
// 				<ul>
// 					<li className={hidden ? "visibilityClass" : "hiddenClass"}>
// 						<p className="pDefault">No task, add one</p>
// 					</li>
// 					{itemArray.map((task, i) => {
// 						return (
// 							<li
// 								key={i}
// 								className="liClass"
// 								onMouseEnter={() => setButtonShown(true)}
// 								onMouseLeave={() => setButtonShown(false)}>
// 								{task}

// 								{buttonShown && (
// 									<button
// 										key={i}
// 										className="buttonBorrar"
// 										onClick={() => {
// 											deleteTask(i);
// 										}}>
// 										X
// 									</button>
// 								)}
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

// export default Todo;
