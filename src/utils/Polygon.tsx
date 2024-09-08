import { Box } from "@mui/material";

const Polygon = () => {
	return (
		<Box
			sx={{
				width: 0,
				height: 0,
				borderLeft: "10.5px solid transparent",
				borderRight: "10.5px solid transparent",
				borderBottom: "18px solid #3461FF",
				transform: "rotate(90deg) translateY(2px)",
				display: "inline-block",
			}}
		/>
	);
};

export default Polygon;
