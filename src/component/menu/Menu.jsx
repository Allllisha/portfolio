import "./menu.scss";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <img src="assets/image.jpg" alt="" />
      <h1>Arisa Nemoto</h1>
      {/* <h1>Skils</h1> */}
      <div className = "skills">
       <ul>
         <li>HTML & CSS</li>
         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
         <LinearProgress color="secondary" />
         </Stack>
         <li>JavaScript</li>
         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
         <LinearProgress color="inherit" />
         </Stack>
         <li>Ruby on Rails</li>
         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
         <LinearProgress color="secondary" />
         </Stack>
         <li>React</li>
         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
         <LinearProgress color="inherit" />
         </Stack>
       </ul>
      </div>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Profile</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}