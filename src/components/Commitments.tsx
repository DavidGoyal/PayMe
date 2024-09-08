import { Button, Stack, Typography } from "@mui/material";

const Commitments = () => (
	<Stack
		width={"100%"}
		height={"65vh"}
		justifyContent={"center"}
		alignItems={"center"}
	>
		<Stack
			width={"80%"}
			direction={{ xs: "column", md: "row" }}
			justifyContent={"space-between"}
			height={{ xs: "80%", md: "60%" }}
		>
			<Stack
				width={{ xs: "100%", md: "43%" }}
				height={{ xs: "40%", md: "100%" }}
				justifyContent={"space-between"}
			>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					width={"100%"}
				>
					<Stack>
						<Typography variant="h3">
							<b>245%</b>
						</Typography>
						<Typography variant="h6">More revenues for the brand</Typography>
					</Stack>

					<Stack>
						<Typography variant="h3">
							<b>130K+</b>
						</Typography>
						<Typography variant="h6">Audiences reached</Typography>
					</Stack>
				</Stack>

				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					width={"100%"}
				>
					<Stack>
						<Typography variant="h3">
							<b>50+</b>
						</Typography>
						<Typography variant="h6">Brands trust us</Typography>
					</Stack>

					<Stack>
						<Typography variant="h3">
							<b>24+</b>
						</Typography>
						<Typography variant="h6">Worldwide Awards</Typography>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				width={{ xs: "100%", md: "50%" }}
				height={{ xs: "40%", md: "100%" }}
				justifyContent={"space-between"}
			>
				<Typography variant="h3">
					<b>Commitments</b>
				</Typography>

				<Typography variant="h6">
					We are committed to working with you collaboratively to understand
					your goals and create a strategy that will achieve them.
				</Typography>

				<Button
					sx={{
						width: "fit-content",
						textTransform: "initial",
						fontSize: "1.2rem",
						padding: 0,
					}}
				>
					<b>Learn More →</b>
				</Button>
			</Stack>
		</Stack>
	</Stack>
);

export default Commitments;
