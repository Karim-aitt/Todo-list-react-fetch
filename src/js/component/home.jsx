import React, { useState, useEffect } from "react";
import InputList from "./InputList.jsx";
import ItemList from "./ItemList.jsx";
import Header from "./Header.jsx";

const Home = () => {
	const [item, setItem] = useState({
		label: "",
	});

	const [itemArray, setItemArray] = useState([]);
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (!res.ok) {
					throw Error(res.statusText);
				}

				return res.json();
			})

			.then((data) => {
				// for (let i in data) {
				// 	setItemArray((prev) => {
				// 		return [...prev, data[i]]; //guardamos en la lista lo del server
				// 	});
				// }
				setItemArray(data);
				console.log(data);
				setHidden(false);
			})

			.catch((error) => console.log(error));
	}, []);

	function handleChange(event) {
		const { value } = event.target;
		setItem({
			label: value,
		});
	}

	function addItem() {
		const aux = [...itemArray, { label: item.label, done: false }];

		fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
			method: "PUT",
			body: JSON.stringify(aux),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (!res.ok) {
					console.log(res);
					throw Error(res.statusText);
				}

				return res.json();
			})
			.then((response) => {
				console.log("Exito en updatear la lista", response);
				setItemArray(aux);
				setItem({ label: "" });
				setHidden(false);
			})
			.catch((error) => console.log(error));
	}

	function deleteTask(key) {
		const newItemArray = itemArray.filter(
			(itemInArray, index) => index != key
		);
		console.log({ newItemArray });

		fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
			method: "PUT",
			body: JSON.stringify(newItemArray),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (!res.ok) {
					console.log(res);
					throw Error(res.statusText);
				}

				return res.json();
			})
			.then((response) => {
				console.log("Exito en borrar la lista", response);
				setItemArray(newItemArray);
			})
			.catch((error) => console.log(error));

		if (itemArray.length == 1) {
			setHidden(true);
		}
	}

	// useEffect(() => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
	// 		method: "PUT",
	// 		body: JSON.stringify(itemArray),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				console.log(res);
	// 				throw Error(res.statusText);
	// 			}

	// 			return res.json();
	// 		})
	// 		.then((response) =>
	// 			console.log("Exito en updatear la lista", response)
	// 		)
	// 		.catch((error) => console.log(error));
	// }, [itemArray]); //Cuando se actualice itemArray, se actualiza la lista del sv con itemArray

	return (
		<div className="container">
			<Header />
			<InputList
				triggerChange={handleChange}
				triggerAdd={addItem}
				itemValue={item.label}
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
								task={taskItem.label}
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
