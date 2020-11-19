import React from "react";

const User = (props) => {
	return (
		<div>
			{props.children}
			<p>{props.name}</p>
			<p>Age: {props.age}</p>

			<style jsx>
				{`
					div {
						box-shadow: 0 2px 3px #ccc;
						border: 2px solid #eee;
						padding: 20px;
						box-sizing: border-box;
						text-align: center;
						max-width: 400px;
					}
				`}
			</style>
		</div>
	);
};

export default User;
