import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header';
import Banner from './components/Banner.jsx';
import Main from './components/Main.jsx';
import "./styles/root.scss";
const App = () => {

	return (
		<Fragment>
			<Header />
			{/* <Banner /> */}
			<Main />
		</Fragment>
	)
}

export default App;
