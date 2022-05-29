function getTask() {
	return (
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				// if (!res.ok) {
				return res.json();
				// }
			})
			// .then((data) => data)

			.catch((error) => console.log(error))
	);
}

function postTask(task) {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
		method: "POST",
		body: JSON.stringify(task),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				return res.json();
			}
		})
		.catch((error) => console.log(error));
}

function updateTask(task) {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
		method: "PUT",
		body: JSON.stringify(task),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				return res.json();
			}
		})
		.catch((error) => console.log(error));
}

function deleteTask(task) {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/karim", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				return res.json();
			}
		})
		.catch((error) => console.log(error));
}

export default { getTask, postTask, updateTask, deleteTask };
