import { Routes, Route } from "react-router-dom";
import "./css/styles.css";
import "./css/bootstrap.css";

// Home page
import SharedLayouts from "./Components/Pages/SharedLayouts";
import Main from "./Components/Main";
import Four04 from "./Components/Pages/Four04";

// Pages
import Store from "./Components/Pages/Store";
import Iphone from "./Components/Pages/Iphone";
import Mac from "./Components/Pages/Mac";
import Ipad from "./Components/Pages/Ipad";
import Entertainment from "./Components/Pages/Entertainment";
import AirPods from "./Components/Pages/AirPods";
import Cart from "./Components/Pages/Cart";
import Support from "./Components/Pages/Support";
import TvAndHome from "./Components/Pages/TVAndHome";
import Watch from "./Components/Pages/Watch";
import Accessories from "./Components/Pages/Accessories";
import Search from "./Components/Pages/Search";
import Productpage from "./Components/Pages/Productpage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayouts />}>
				<Route path="/" element={<Main />} />
				<Route path="/Store" element={<Store />} />
				<Route path="/Mac" element={<Mac />} />
				<Route path="/ipad" element={<Ipad />} />
				<Route path="/iphone" element={<Iphone />} />
				<Route path="/Watch" element={<Watch />} />
				<Route path="/Vision" element={<Support />} />
				<Route path="/AirPods" element={<AirPods />} />
				<Route path="/TvAndHome" element={<TvAndHome />} />
				<Route path="Entertainment" element={<Entertainment />} />
				<Route path="/Accessories" element={<Accessories />} />
				<Route path="/Support" element={<Support />} />
				<Route path="/Search" element={<Search />} />
				<Route path="/Cart" element={<Cart />} />
				<Route path="/iphone/:productID" element={<Productpage />} />
				<Route path="*" element={<Four04 />} />
			</Route>
		</Routes>
	);
}

export default App;
