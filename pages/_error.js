import React from "react";
import Link from "next/link";

const ErrorPage = () => {
	return (
		<div>
			<h1>404 | Error Page</h1>
			Try going{" "}
			<Link href="/">
				<a>Home!</a>
			</Link>
		</div>
	);
};

export default ErrorPage;
