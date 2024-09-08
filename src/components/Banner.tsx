import { Button, Stack, Typography, Box } from "@mui/material";

const Banner = () => {
	return (
		<Stack
			width={"100%"}
			height={"65vh"}
			justifyContent={"center"}
			alignItems={"center"}
			position="relative"
		>
			<Stack
				width={"80%"}
				direction={{ xs: "column", sm: "row" }}
				justifyContent={{ xs: "space-around", sm: "space-between" }}
				height={{ xs: "80%", sm: "60%" }}
				borderRadius={"20px"}
				paddingX={"4rem"}
				alignItems={"center"}
				sx={{
					background: "linear-gradient(135deg, #4A7FEF 25%,#3461FF 75%)",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						width: "330px",
						height: "120%",
						borderRadius: "50%",
						top: "-20px",
						left: "-100px",
						background: "linear-gradient(135deg, #4A7FEF 35%,#2D64E5 65%)",
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						width: "300px",
						height: "120%",
						borderRadius: "50%",
						backgroundColor: "#2D64E5",
						top: "-30px",
						left: "-250px",
					}}
				/>

				<Box
					sx={{
						position: "absolute",
						width: "300px",
						height: "120%",
						borderRadius: "50%",
						background:
							"linear-gradient(177.26deg, #3461FF 10.7%, #8399E9 103.87%)",
						transform: "rotate(90deg)",
						top: "-20px",
						left: "250px",
					}}
				/>

				<Typography
					variant="h3"
					color="white"
					width={{ xs: "100%", sm: "40%" }}
					height={{ xs: "40%", sm: "60%", md: "50%" }}
					textAlign={{ xs: "center", sm: "initial" }}
					lineHeight={"1.5"}
					sx={{ zIndex: 1, display: "flex", alignItems: "center" }}
				>
					<b>Elevate Your Brand Today!</b>
				</Typography>

				<Stack
					width={{ xs: "100%", sm: "40%" }}
					justifyContent={"space-between"}
					height={{ xs: "40%", sm: "60%", md: "50%" }}
					sx={{ zIndex: 1 }}
					alignItems={"center"}
					gap={"1rem"}
				>
					<Typography
						variant="h6"
						color="white"
						textAlign={{ xs: "center", sm: "initial" }}
					>
						Ready to transform your digital presence? Let's create magic
						together! Book our services now!
					</Typography>
					<Button
						variant="contained"
						sx={{
							width: "fit-content",
							bgcolor: "white",
							color: "black",
							borderRadius: "40px",
							padding: "0.6rem 2rem",
							textTransform: "initial",
							fontSize: "1.2rem",
							fontWeight: "550",
							zIndex: 1,
						}}
					>
						Book Call
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Banner;
