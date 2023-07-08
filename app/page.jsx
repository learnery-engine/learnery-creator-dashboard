"use client"

import Image from "next/image";
import CourseFormComponent from '../components/CourseFormComponent';
import Navbar from '../components/Navbar'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTitleTextContent from '../components/SimpleTitleTextContainer';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {/* <Navbar />
        <SimpleTitleTextContent /> */}
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
