import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Divider,
  IconButton,
  List,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItems from "./listItems";
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7.5),
      },
    }),
  },
}));

const Navigation = ({ toggleDrawer, open, drawerWidth }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Drawer variant="permanent" open={open} drawerWidth={drawerWidth} sx={{
      "& .MuiDrawer-paper": {
        position: isMobile ? "fixed" : "relative",

      },
    }}>
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <Typography
          component="h1"
          variant="body1"
          color="inherit"
          noWrap
          className="text-left "
          sx={{ flexGrow: 1 }}
        >

        </Typography>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <div className="mt-4">
          <ListItems />
        </div>
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  );
};

export default Navigation;
