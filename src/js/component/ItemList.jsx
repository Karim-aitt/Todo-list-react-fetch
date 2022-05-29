import React, { useState } from "react";

function ItemList(props) {
	const [buttonShown, setButtonShown] = useState(false);

	function mouseHover() {
		buttonShown === true ? setButtonShown(false) : setButtonShown(true);
	}

	return (
		<li
			key={props.id}
			className="liClass"
			onMouseEnter={mouseHover}
			onMouseLeave={mouseHover}>
			{props.task}

			{buttonShown && (
				<button className="buttonBorrar" onClick={props.deleteItem}>
					X
				</button>
			)}
		</li>
	);
}

export default ItemList;
