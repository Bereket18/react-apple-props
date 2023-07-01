// import logo from './logo.svg';
// import './App.css';
import "./css/styles.css";
import "./css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import Footer from "./Components/Footer";
import React, { Component } from "react";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<Footer />
			</div>
		);
	}
}

export default App;
