import React, { useState } from "react";
import InputList from "./InputList.jsx";
import ItemList from "./ItemList.jsx";
import Header from "./Header.jsx";
import api from "../api.js";

const Home = () => {
	const [item, setItem] = useState({
		name: "",
	});

	const [itemArray, setItemArray] = useState([]);
	const [hidden, setHidden] = useState(true);

	// componentDidMount(setItemArray({ name: api.getTask.label }));

	function handleChange(event) {
		const { value } = event.target;
		setItem({
			name: value,
		});
	}

	function addItem() {
		setItemArray((prev) => {
			return [...prev, item];
		});
		setItem({ name: "" });
		setHidden(false);
	}

	function deleteTask(key) {
		const newItemArray = itemArray.filter(
			(itemInArray, index) => index != key
		);
		setItemArray(newItemArray);

		if (itemArray.length == 1) {
			setHidden(true);
		}
	}

	return (
		<div className="container">
			<Header />
			<InputList
				triggerChange={handleChange}
				triggerAdd={addItem}
				itemValue={item.name}
			/>

			<div>
				<ul>
					<li className={hidden ? "visibilityClass" : "hiddenClass"}>
						<p className="pDefault">No task, add one</p>
					</li>
					{itemArray.map((taskItem, key) => {
						return (
							<ItemList
								key={key}
								task={taskItem.name}
								deleteItem={() => deleteTask(key)}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
