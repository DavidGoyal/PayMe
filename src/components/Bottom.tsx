import { Button, Link, Stack, Typography } from "@mui/material";
import Circle from "../utils/Circle";
import Polygon from "../utils/Polygon";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Bottom = () => {
	const { darkMode } = useSelector((state: RootState) => state.theme);

	return (
		<Stack
			width={"100%"}
			height={{ xs: "100vh", sm: "60vh" }}
			justifyContent={"center"}
			bgcolor={darkMode ? "#1A1A1A" : "#F5F5F5"}
		>
			<Stack
				width={"80%"}
				direction={{ xs: "column", lg: "row" }}
				marginX={"auto"}
				justifyContent={"space-between"}
				height={{ xs: "80%", sm: "60%" }}
			>
				<Stack
					width={{ xs: "100%", lg: "fit-content" }}
					height={{ xs: "30%", sm: "40%", lg: "100%" }}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Stack direction={"row"} alignItems={"center"}>
						<Stack
							direction={"row"}
							alignItems={"center"}
							display={"inline-block"}
						>
							<Circle />
							<Polygon />
						</Stack>
						<Typography variant="h4">
							<b>Embrace</b>
						</Typography>
					</Stack>
					<Stack
						direction={"row"}
						width={"100%"}
						justifyContent={"space-between"}
					>
						<InstagramIcon color="primary" />
						<TwitterIcon color="primary" />
						<FacebookIcon color="primary" />
					</Stack>
					<Button
						variant="contained"
						fullWidth
						sx={{
							borderRadius: "30px",
							paddingY: "0.7rem",
							textTransform: "initial",
						}}
					>
						Contact Us
					</Button>
				</Stack>

				<Stack
					width={{ xs: "100%", lg: "50%" }}
					height={{ xs: "60%", sm: "40%", lg: "100%" }}
					justifyContent={{ xs: "space-around", sm: "space-between" }}
					direction={{ xs: "column", sm: "row" }}
					alignItems={"center"}
					gap={"2rem"}
				>
					<Stack
						height={"100%"}
						gap={{ xs: "2rem", sm: "20%" }}
						alignItems={"flex-start"}
					>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Work With Us
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Advertise With Us
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Support Us
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Business Advices
						</Link>
					</Stack>

					<Stack
						height={"100%"}
						gap={{ xs: "2rem", sm: "20%" }}
						alignItems={"flex-start"}
					>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Private Coaching
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Our Work
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Our Commitment
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Our Team
						</Link>
					</Stack>

					<Stack
						height={"100%"}
						gap={{ xs: "2rem", sm: "20%" }}
						alignItems={"flex-start"}
					>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							About Us
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							FAQs
						</Link>
						<Link color="text.primary" underline="none" fontWeight={"bold"}>
							Report a Bug
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Bottom;
