import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
	Button,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../redux/themeReducer";
import Circle from "../utils/Circle";
import Polygon from "../utils/Polygon";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const { darkMode } = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Stack
			width={"100%"}
			borderBottom={"2px solid"}
			borderColor={"text.secondary"}
			position={"relative"}
		>
			<Stack
				width={{ xs: "95%", lg: "80%" }}
				marginX={"auto"}
				direction={"row"}
				justifyContent={"space-between"}
				alignItems={"center"}
				paddingY={"1.3rem"}
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
					<Typography variant="h5">
						<b>Embrace</b>
					</Typography>
				</Stack>

				<Stack
					direction={"row"}
					gap={{ sm: "0.7rem", md: "1.5rem" }}
					display={{ xs: "none", md: "flex" }}
				>
					<Link to={"/"} style={{ textDecoration: "none" }}>
						<Typography color="text.primary">
							<b>How It Works</b>
						</Typography>
					</Link>
					<Link to={"/"} style={{ textDecoration: "none" }}>
						<Typography color="text.primary">
							<b>Our Work</b>
						</Typography>
					</Link>
					<Link to={"/"} style={{ textDecoration: "none" }}>
						<Typography color="text.primary">
							<b>Pricing</b>
						</Typography>
					</Link>
					<Link to={"/"} style={{ textDecoration: "none" }}>
						<Typography color="text.primary">
							<b>About Us</b>
						</Typography>
					</Link>
				</Stack>

				<Stack direction={"row"} gap={{ sm: "0.7rem", md: "1.5rem" }}>
					<Button
						variant="contained"
						sx={{
							borderRadius: "30px",
							paddingY: "0.7rem",
							textTransform: "initial",
							display: { xs: "none", md: "flex" },
						}}
					>
						Book A Call
					</Button>

					<Button
						onClick={() => dispatch(toggleDarkMode())}
						sx={{
							backgroundColor: "transparent",
							border: "none",
							cursor: "pointer",
						}}
					>
						{darkMode ? <LightModeIcon /> : <DarkModeIcon />}
					</Button>

					<IconButton
						onClick={handleClick}
						sx={{ display: { xs: "block", md: "none" } }}
					>
						<MenuIcon />
					</IconButton>

					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleClose}>
							<Link to={"/"} style={{ textDecoration: "none" }}>
								<Typography color="text.primary">
									<b>How It Works</b>
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to={"/"} style={{ textDecoration: "none" }}>
								<Typography color="text.primary">
									<b>Our Work</b>
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to={"/"} style={{ textDecoration: "none" }}>
								<Typography color="text.primary">
									<b>Pricing</b>
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to={"/"} style={{ textDecoration: "none" }}>
								<Typography color="text.primary">
									<b>About Us</b>
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Button
								variant="contained"
								sx={{
									paddingY: "0.7rem",
									textTransform: "initial",
								}}
							>
								Book A Call
							</Button>
						</MenuItem>
					</Menu>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Header;
