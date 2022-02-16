import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@mui/styles';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import './Header.css';

// const useStyles = makeStyles({
//   root: {
//     paddingLeft: '-10px',
//   }
// })

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '4 30px',
    marginLeft: '40px',
    marginRight: '7px',
    height: 30
  }
})
function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const [ user2, setUser2 ] = useState(JSON.parse(localStorage.getItem('profile2')));

  const logout = () => {
    dispatch({ type: 'LOGOUT'});
    navigate('/');
    setUser(null);
  };

  const classes = useStyles();
  // useEffect(() => { 
  //   const token = user?.token;

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  
  // setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [location]);

return (
<header className="text-gray-600 body-font bg-gray-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <div className="fas-fa">
      <Navbar />
    </div>
    <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div className="headfont">
      <span className="-ml-3 text-xl text-white -mb-5">Crime Reducer</span>
      </div>
    </a>
    <div className="ml-52 mr-60">
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link to="/">
      <div className="navfont">
      <i class="fas fa-home fa-left"></i>
      <a className="mr-5 ml-2 text-gray-300 hover:text-white">Home</a>
      </div>
      </Link>
      <Link to="/acts">
      <div className="navfont">
      <i class="fas fa-id-card-alt"></i>
      <a className="mr-5 ml-2 text-gray-300 hover:text-white">Acts</a>
      </div>
      </Link>
      <Link to="adminlog">
      <div className="navfont">
      <i class="fas fa-users-cog"></i>
      <a className="mr-5 ml-2 text-gray-300 hover:text-white">Admin</a>
      </div>
      </Link>
      <Link to="/stats">
      <div className="navfont">
      <i class="fas fa-signal"></i>
      <a className="mr-5 ml-2 text-gray-300 hover:text-white">Stats</a>
      </div>
      </Link>

      {/* <Link to="/auth">
      <div className="navfont">
      <a className="mr-5 ml-2 text-gray-300 hover:text-white">
        {user ? (
        <div className="user1">
        <i class="fas fa-sign-in-alt"></i>
        <p className="logout3">Logout</p>
        </div>
      ) : (
        <div className="user2">
        <i class="fas fa-sign-in-alt"></i>
        <p className="login3" component={Link} to="/auth">Login</p>
        </div>
      )}
      </a>
      </div>
      </Link> */}
    </nav>
    </div>
    <Toolbar className="">
      {user?.result ? (
    <div className="wrapper-avatar">
      <div className="text5 pt-2 text-gray-300 hover:text-white">
      <i class="fas fa-address-card"></i>
      <a className="ml-2" onClick={logout} href="">Logout</a>
      </div>
      <Avatar className={classes.root} alt={user?.result.name} src={user?.result.name.charAt(0)} />
      <Typography className="name6 pt-1" variant="h6">{user?.result.name}</Typography>
    </div>
      ) : (
      <div className="mr-5 -ml-64 text-gray-300 hover:text-white">
      <i class="fas fa-address-card"></i>
      <a className="ml-2 mr-60" href="/auth" color="primary" >Login</a>
      </div>
        // <a component={Link} to="/auth" color="primary" className="text4">Sign In</a>
      )}
    </Toolbar>
    {user?.result ? (
      <Link to="/complain">
      <div className="navfont">
      <button className="inline-flex items-center bg-gradient-to-r ml-10 from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 text-white rounded border-0 py-1 px-3 text-base mt-4 md:mt-0">Complain
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2 mt-1 mb-1 mr-0" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </div>
      </Link> ) : (
      <Link to="/auth">
      <div className="navfont">
      <button className="inline-flex items-center bg-gradient-to-r ml-10 from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 text-white rounded border-0 py-1 px-3 text-base mt-4 md:mt-0">Complain
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2 mt-1 mb-1 mr-0" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </div>
      </Link>
    )}
    
  </div>
</header>
);

}

export default Header;
