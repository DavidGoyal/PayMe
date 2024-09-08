import { Stack, Typography } from "@mui/material";
import Works from "../assets/Works.png";
import Discovery from "../assets/Discovery.png";
import Strategy from "../assets/Strategy.png";
import Execution from "../assets/Execution.png";
import Measurement from "../assets/Measurement.png";

const HowItWorks = () => {
	return (
		<Stack
			height={{ xs: "100vh", lg: "80vh" }}
			width={"100%"}
			alignItems={"center"}
			justifyContent={"center"}
			direction={"row"}
		>
			<Stack
				width={"80%"}
				direction={{ xs: "column", lg: "row" }}
				justifyContent={"space-between"}
				height={{ xs: "90%", lg: "80%" }}
			>
				<Stack
					width={{ xs: "100%", lg: "37%" }}
					height={{ xs: "45%", lg: "100%" }}
					justifyContent={"space-between"}
					gap={"2rem"}
				>
					<Stack width={"100%"} gap={"1rem"}>
						<Typography
							variant="h2"
							textAlign={{ xs: "center", lg: "initial" }}
						>
							How It Works
						</Typography>
						<Typography variant="body1">
							We believe that the best way to create successful marketing
							campaigns is to work closey with our clients to understand their
							goals and challenges.
						</Typography>
					</Stack>
					<Stack
						width={{ xs: "100%", md: "70%", lg: "100%" }}
						height={{ xs: "60%", sm: "70%", lg: "55%" }}
						marginX={"auto"}
					>
						<img
							src={Works}
							alt="Works"
							style={{ width: "100%", height: "100%" }}
						/>
					</Stack>
				</Stack>
				<Stack
					width={{ xs: "100%", lg: "48%" }}
					height={{ xs: "50%", sm: "40%", lg: "100%" }}
					justifyContent={"space-between"}
				>
					<Card
						title="Discovery"
						description="We meet with you to learn about your business, your goals, and your target audience"
						image={Discovery}
					/>
					<Card
						title="Strategy"
						description="We develop a customized marketing strategy that is based on your unique needs and goals."
						image={Strategy}
					/>
					<Card
						title="Execution"
						description="We execute our strategy using the latest digital marketing tools and techniques."
						image={Execution}
					/>
					<Card
						title="Measurement"
						description="We track the results of our campaings so that we can make adjustments as needed."
						image={Measurement}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

const Card = ({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: string;
}) => {
	return (
		<Stack
			direction={"row"}
			gap={"1.5rem"}
			width={"100%"}
			alignItems={"center"}
			height={{ xs: "20%", lg: "20%" }}
		>
			<Stack
				width={{ xs: "45%", sm: "20%", md: "10%", lg: "30%", xl: "20%" }}
				height={"100%"}
			>
				<img src={image} alt={title} height={"100%"} width={"100%"} />
			</Stack>
			<Stack height={"100%"} justifyContent={"space-between"}>
				<Typography variant="h4">{title}</Typography>
				<Typography variant="body1">{description}</Typography>
			</Stack>
		</Stack>
	);
};
export default HowItWorks;
