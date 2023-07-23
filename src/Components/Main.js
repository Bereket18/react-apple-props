import React from "react";
import "../css/styles.css";
import "../css/bootstrap.css";

// Home page
// import Header from "./Header";
import First from "./First";
import Second from "./Second";
import Third from "./Third.js";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import YoutubeApi from "./YoutubeApi";
// import Footer from "./Footer";

function Main() {
	return (
		<>
			{/* <Header /> */}
			<First />
			<Second />
			<Third />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<YoutubeApi />
			{/* <Footer /> */}
		</>
	);
}

export default Main;
