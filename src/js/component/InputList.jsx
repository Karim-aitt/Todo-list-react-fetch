import React from "react";

function InputList(props) {
	return (
		<div className="form d-flex">
			<input
				type="text"
				placeholder="Write your task"
				onChange={props.triggerChange}
				value={props.itemValue}
			/>
			<button
				className="buttonAdd d-flex ms-auto"
				onClick={props.triggerAdd}>
				ADD
			</button>
		</div>
	);
}

export default InputList;
