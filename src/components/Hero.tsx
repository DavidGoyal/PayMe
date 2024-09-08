import { Button, Stack, Typography } from "@mui/material";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import img7 from "../assets/image7.png";
import img8 from "../assets/image8.png";
import img9 from "../assets/image9.png";
import img10 from "../assets/image10.png";
import img11 from "../assets/image11.png";
import img12 from "../assets/image12.png";
import img13 from "../assets/image13.png";

const Hero = () => {
	return (
		<Stack
			height={{ xs: "130vh", sm: "120vh", md: "100vh" }}
			justifyContent={"center"}
			width={"100%"}
			alignItems={"center"}
		>
			<Stack
				width={"80%"}
				direction={{ xs: "column", md: "row" }}
				justifyContent={"space-between"}
				height={{ xs: "90%", sm: "80%", md: "70%" }}
				alignItems={"center"}
			>
				<Stack
					width={{ xs: "100%", md: "44%" }}
					gap={"2rem"}
					height={{ xs: "35%", sm: "50%", md: "100%" }}
					justifyContent={{ xs: "flex-start", md: "center" }}
				>
					<Typography variant="h1" textAlign={{ xs: "center", md: "initial" }}>
						We Take Care Of Your Brand
					</Typography>
					<Typography variant="h6" textAlign={{ xs: "center", md: "initial" }}>
						We care about our work and we care about our clients.
					</Typography>
					<Stack direction={"row"} gap={"1rem"}>
						<input
							type="text"
							placeholder="Enter Your Email"
							style={{
								flexGrow: 1,
								outline: "none",
								borderRadius: "30px",
								border: "1px solid grey",
								padding: "1rem",
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
				</Stack>

				<Stack
					width={{ xs: "100%", md: "48%" }}
					alignItems={"center"}
					height={{ xs: "40%", sm: "50%", md: "100%" }}
					justifyContent={"center"}
				>
					<Stack
						direction={"row"}
						width={"100%"}
						height={"40%"}
						position={"relative"}
					>
						<img src={img1} alt="" style={{ width: "62%", height: "100%" }} />
						<Stack width={"38%"} position={"relative"} height={"100%"}>
							<img
								src={img2}
								alt=""
								style={{ width: "100%", height: "100%" }}
							/>
							<Stack
								sx={{
									position: "absolute",
									top: { xs: "-10%", sm: "-30%", md: "-10%", xl: "-30%" },
									left: "-50%",
									width: "75%",
								}}
							>
								<img
									src={img8}
									alt=""
									style={{
										width: "100%",
									}}
								/>
								<img
									src={img9}
									alt=""
									style={{
										width: "50%",
										position: "absolute",
										top: "15%",
										left: "20%",
									}}
								/>
							</Stack>
						</Stack>
					</Stack>

					<Stack direction={"row"} width={"100%"} height={"40%"}>
						<Stack width="40%" height={"100%"} position={"relative"}>
							<img
								src={img3}
								alt=""
								style={{ width: "100%", height: "100%" }}
							/>
							<img
								src={img10}
								alt=""
								style={{
									width: "50%",
									height: "50%",
									position: "absolute",
									top: "20%",
									left: "25%",
								}}
							/>
						</Stack>
						<img src={img4} alt="" style={{ width: "60%" }} />
					</Stack>

					<Stack direction={"row"} width={"100%"} height={"40%"}>
						<Stack width={"40%"} position={"relative"} height={"100%"}>
							<img
								src={img5}
								alt=""
								style={{ width: "100%", height: "100%" }}
							/>
							<Stack
								sx={{
									position: "absolute",
									top: { xs: "-10%", sm: "-25%", md: "-10%", xl: "-25%" },
									right: "-35%",
									width: "60%",
								}}
							>
								<img
									src={img8}
									alt=""
									style={{
										width: "100%",
										transform: "scaleX(-1)",
										zIndex: 1,
									}}
								/>
								<img
									src={img11}
									alt=""
									style={{
										width: "50%",
										position: "absolute",
										top: "15%",
										left: "20%",
										zIndex: 1,
									}}
								/>
							</Stack>
						</Stack>
						<Stack width={"30%"} height={"100%"} position={"relative"}>
							<img
								src={img6}
								alt=""
								style={{ width: "100%", height: "100%" }}
							/>
							<img
								src={img12}
								alt=""
								style={{
									width: "50%",
									height: "50%",
									position: "absolute",
									top: "20%",
									left: "25%",
								}}
							/>
						</Stack>
						<Stack width={"30%"} height={"100%"} position={"relative"}>
							<img
								src={img7}
								alt=""
								style={{ width: "100%", height: "100%" }}
							/>
							<img
								src={img13}
								alt=""
								style={{
									width: "50%",
									height: "50%",
									position: "absolute",
									top: "20%",
									left: "25%",
								}}
							/>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Hero;
