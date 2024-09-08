import { Box } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Commitments from "./components/Commitments";
import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import Work from "./components/Work";
import CtaBanner from "./components/CtaBanner";
import Help from "./components/Help";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";

const App = () => {
	return (
		<Router>
			<Box minHeight={"100vh"}>
				<Header />
				<Hero />
				<Partners />
				<Commitments />
				<Banner />
				<HowItWorks />
				<Work />
				<CtaBanner />
				<Help />
				<Bottom />
				<Footer />
			</Box>
		</Router>
	);
};

export default App;
