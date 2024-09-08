import { Stack, Typography } from "@mui/material";
import Spotify from "../assets/Spotify.png";
import Google from "../assets/Google.png";
import Uber from "../assets/Uber.png";
import Microsoft from "../assets/Microsoft.png";
import Shopify from "../assets/Shopify.png";
import Evernote from "../assets/Evernote.png";
import Adobe from "../assets/Adobe.png";
import Paypal from "../assets/Paypal.png";
import Amazon from "../assets/Amazon.png";
import Asana from "../assets/Asana.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Partners = () => {
	const { darkMode } = useSelector((state: RootState) => state.theme);

	return (
		<Stack
			bgcolor={darkMode ? "#1A1A1A" : "#F5F5F5"}
			width={"100%"}
			paddingY={"5rem"}
			height={{ sm: "40vh", lg: "65vh" }}
			alignItems={"center"}
			justifyContent={"space-around"}
			gap={"5rem"}
			paddingX={"1rem"}
		>
			<Typography textAlign={"center"} variant="h3">
				Companies We Work With
			</Typography>

			<Stack
				width={{ xs: "80%", sm: "100%" }}
				gap={"4rem"}
				alignItems={"center"}
				direction={{ xs: "row", sm: "column" }}
				justifyContent={"space-between"}
			>
				<Stack
					width={{ xs: "30%", sm: "80%" }}
					height={{ xs: "80%", sm: "20%" }}
					direction={{ xs: "column", sm: "row" }}
					justifyContent={"space-between"}
					gap={"1rem"}
				>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Spotify}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Google}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img src={Uber} alt="" style={{ width: "100%", height: "100%" }} />
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Microsoft}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Shopify}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
				</Stack>
				<Stack
					width={{ xs: "30%", sm: "80%" }}
					height={{ xs: "80%", sm: "20%" }}
					direction={{ xs: "column", sm: "row" }}
					justifyContent={"space-between"}
					gap={"1.2rem"}
				>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Evernote}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img src={Adobe} alt="" style={{ width: "100%", height: "100%" }} />
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Paypal}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img
							src={Amazon}
							alt=""
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
					<Stack width={{ xs: "100%", sm: "12%" }} height={"100%"}>
						<img src={Asana} alt="" style={{ width: "100%", height: "100%" }} />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Partners;
