import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import { useTheme } from "@mui/material";
import {FaMicroblog} from 'react-icons/fa';
import styled from "@emotion/styled";

const HeaderButtons=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
min-width: 200px;
cursor: pointer;
`;
export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  const theme=useTheme()
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="nav">
      
      <Link to="/" className="logo"><FaMicroblog/>MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">CREATE</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <HeaderButtons>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <a 
            href="https://akankip1.github.io/Portfolio-Ashrit-Kankipati/" target="_blank">Contact </a>
          </HeaderButtons>
            
          
        )}
      </nav>
    </header>
  );
}