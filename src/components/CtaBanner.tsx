import { Button, Stack, Typography } from "@mui/material";
import Grid from "../assets/Grid.png";
import Spark from "../assets/Spark.png";
import Arrow from "../assets/Arrow.png";

const CtaBanner = () => {
	return (
		<Stack
			width={"100%"}
			height={"80vh"}
			justifyContent={"center"}
			position="relative"
		>
			<Stack
				width={"80%"}
				direction={"row"}
				marginX={"auto"}
				justifyContent={"space-between"}
				height={"60%"}
				borderRadius={"40px"}
				paddingX={"4rem"}
				alignItems={"center"}
				sx={{
					backgroundColor: "#232038",
					backgroundImage: `url(${Grid})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Stack
					width={{ xs: "100%", sm: "45%" }}
					height={"66%"}
					justifyContent={"space-between"}
				>
					<Typography
						variant="h3"
						color="white"
						textAlign={{ xs: "center", sm: "initial" }}
					>
						Start Your Journey With Us Now
					</Typography>
					<Button
						variant="contained"
						sx={{
							width: "fit-content",
							borderRadius: "40px",
							padding: "0.6rem 2rem",
							textTransform: "initial",
							marginX: { xs: "auto", sm: "0" },
						}}
					>
						Start Now
					</Button>
				</Stack>
				<Stack
					width={{ xs: "50%", lg: "40%", xl: "25%" }}
					height={"70%"}
					borderRadius={"100%"}
					bgcolor={"#E0FF22"}
					justifyContent={"center"}
					alignItems={"center"}
					direction={"row"}
					gap={"1rem"}
					display={{ xs: "none", sm: "flex" }}
				>
					<img
						src={Spark}
						alt="spark"
						style={{ height: "30%", width: "20%" }}
					/>
					<img
						src={Arrow}
						alt="arrow"
						style={{ height: "30%", width: "35%", rotate: "5deg" }}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default CtaBanner;
