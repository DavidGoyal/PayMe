import { Button, Stack, Typography } from "@mui/material";
import Apple from "../assets/Apple.png";
import CocaCola from "../assets/CocaCola.png";
import Nike from "../assets/Nike.png";

const Work = () => {
	return (
		<Stack
			width={"100%"}
			minHeight={"90vh"}
			alignItems={"center"}
			justifyContent={"center"}
			mt={"2rem"}
		>
			<Stack
				height={"80%"}
				width={"80%"}
				justifyContent={"space-between"}
				mt={"2rem"}
				gap={"2rem"}
			>
				<Stack width={"100%"}>
					<Typography variant="h2" textAlign={"center"}>
						Our Work
					</Typography>
					<Typography variant="body1" textAlign={"center"}>
						A glimpse of our portfolio
					</Typography>
				</Stack>
				<Stack
					direction={{ xs: "column", lg: "row" }}
					width={"100%"}
					height={"60%"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Card image={Apple} text="Apple" />
					<Card image={CocaCola} text="Coca-Cola" />
					<Card image={Nike} text="Nike" />
				</Stack>
				<Button
					variant="contained"
					sx={{
						width: "fit-content",
						marginX: "auto",
						borderRadius: "40px",
						padding: "0.6rem 2rem",
						textTransform: "initial",
					}}
				>
					See More
				</Button>
			</Stack>
		</Stack>
	);
};

const Card = ({ image, text }: { image: string; text: string }) => {
	return (
		<Stack
			gap={"1rem"}
			width={{ xs: "70%", md: "50%", lg: "30%" }}
			height={"90%"}
		>
			<img src={image} alt={text} height={"95%"} width={"100%"} />
			<Typography variant="h5" textAlign={"center"}>
				{text}
			</Typography>
		</Stack>
	);
};

export default Work;
