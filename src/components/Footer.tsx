import { Stack, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Stack
			height={"6rem"}
			width={"100%"}
			bgcolor={"black"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Stack
				width={"80%"}
				direction={{ xs: "column", sm: "row" }}
				justifyContent={"space-between"}
				gap={"1rem"}
				alignItems={"center"}
			>
				<Typography color="white" textAlign={{ xs: "center", sm: "initial" }}>
					&copy; 2022 Embrace, Inc. All Rights Reserved.
				</Typography>
				<Stack
					direction={"row"}
					width={{ xs: "100%", sm: "30%" }}
					justifyContent={"space-between"}
					gap={"1rem"}
				>
					<Typography color="white">Terms of use</Typography>
					<Typography color="white">Privacy Policy</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Footer;
