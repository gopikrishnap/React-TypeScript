// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthHoc from '../AuthHoc';

const Navbar =() => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/">
            HOC
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Redux
          </Button>
          <Button color="inherit" component={Link} to="/">
            Context
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};
const AuthNavBar =  AuthHoc(Navbar);
export default AuthNavBar;
