/* 
PATH = ../pages/auth/index
we see the index page!

EVEN without routing.
*/

import React from "react";
import User from "../../components/User";
import Layout from "../../components/layout/layout";

const authIndexPage = (props) => {
	return (
		<div>
			<Layout>
				<h1>The Auth Index Page - {props.appName}</h1>
				<User name="Flexer" age={23}>
					FADRIGALAN
				</User>
			</Layout>
		</div>
	);
};

/* gets a prop that is async */
authIndexPage.getInitialProps = (context) => {
	// you can console log context to see it
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			res({ appName: "Auth App Name" });
		}, 1000);
	});
	return promise;
};

export default authIndexPage;
