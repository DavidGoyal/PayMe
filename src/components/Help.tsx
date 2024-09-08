import { Button, Link, Stack, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Help = () => {
	const { darkMode } = useSelector((state: RootState) => state.theme);

	return (
		<Stack
			width={"100%"}
			height={"80vh"}
			justifyContent={"center"}
			position="relative"
		>
			<Stack
				width={"80%"}
				direction={{ xs: "column", lg: "row" }}
				marginX={"auto"}
				justifyContent={"space-between"}
				height={{ xs: "80%", lg: "50%" }}
				alignItems={"center"}
			>
				<Stack
					width={{ xs: "100%", lg: "50%" }}
					height={{ xs: "40%", lg: "100%" }}
				>
					<Stack
						direction={"row"}
						width={"100%"}
						justifyContent={"space-between"}
						borderTop={"1px solid " + (darkMode ? "#FFFFFF33" : "#00000033")}
						alignItems={"center"}
						padding={"2rem 0.5rem"}
						height={"33%"}
					>
						<Typography>How do i sign up for the project?</Typography>
						<AddCircleIcon color="primary" />
					</Stack>
					<Stack
						direction={"row"}
						width={"100%"}
						justifyContent={"space-between"}
						borderTop={"1px solid " + (darkMode ? "#FFFFFF33" : "#00000033")}
						alignItems={"center"}
						padding={"2rem 0.5rem"}
						height={"33%"}
					>
						<Typography>
							What thing that i should prepare before starting?
						</Typography>
						<AddCircleIcon color="primary" />
					</Stack>
					<Stack
						direction={"row"}
						width={"100%"}
						justifyContent={"space-between"}
						borderTop={"1px solid " + (darkMode ? "#FFFFFF33" : "#00000033")}
						borderBottom={"1px solid " + (darkMode ? "#FFFFFF33" : "#00000033")}
						alignItems={"center"}
						padding={"2rem 0.5rem"}
						height={"33%"}
					>
						<Typography>
							Does my company need help for marketing advices?
						</Typography>
						<AddCircleIcon color="primary" />
					</Stack>
				</Stack>

				<Stack
					width={{ xs: "100%", lg: "35%" }}
					height={{ xs: "45%", lg: "100%" }}
					justifyContent={"space-between"}
				>
					<Typography variant="h4" fontWeight={"bold"}>
						How We Can Help You?
					</Typography>
					<Typography variant="h6" color="textSecondary">
						Follow our newsletter. We will regularly update our latest project
						and availability.
					</Typography>
					<Stack direction={"row"} gap={"1rem"}>
						<input
							type="text"
							placeholder="Enter Your Email"
							style={{
								flexGrow: 1,
								outline: "none",
								borderRadius: "30px",
								border: "none",
								padding: "1rem",
								backgroundColor: "whitesmoke",
							}}
						/>
						<Button
							variant="contained"
							sx={{
								borderRadius: "30px",
								paddingX: "1.5rem",
								textTransform: "initial",
							}}
						>
							Lets Talk
						</Button>
					</Stack>
					<Link fontWeight={"bold"}>More FAQ →</Link>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Help;
