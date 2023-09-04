// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('user'); 

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

// //   const handleRoleChange = (e) => {
// //     setRole(e.target.value);
// //   };

//   const handleLogin = () => {
     
    
   
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label>UserName:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={handleUsernameChange}
//             placeholder="Enter your username"
//           />
//         </div>
//         <div className="form-group">
//           <label>Role:</label>
//           <select>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter your password"
//           />
//         </div>
//         <Link to="/mainpage/*" >
//           Login
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, InputAdornment, IconButton,Typography } from '@mui/material';
import { Visibility, VisibilityOff  } from '@mui/icons-material';

const roles = ['Admin', 'User', 'Guest'];

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    role: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in...', formData);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xs" >
         <Typography  style={{textAlign:'center'}} variant="h6">Login</Typography>
      <form>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={formData.username}
          onChange={handleChange('username')}
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            label="Role"
            value={formData.role}
            onChange={handleChange('role')}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type={formData.showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          size="large"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
