import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  top: {
    width: '1728px',
    height: '986px',
    flexShrink: 0,
    background: 'rgba(0, 0, 0, 0.35)'
  },
  container: {
    width: '1024px',
    height: '592px',
    flexShrink: 0,
    borderRadius: '8px',
    background: '#FFF',
    boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.04)'
  },
  header: {
    padding: '2em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    display: 'flex',
    width: '291px',
    height: '361px',
    paddingBottom: '0px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    flexShrink: 0,
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    background: '#FFF'
  },
  frame: {
    width: '291px',
    height: '170px',
    flexShrink: 0,
    background: 'rgba(159, 192, 176, 0.11)'
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  active: {
    display: 'flex',
    width: '251px',
    height: '40px',
    padding: '10px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '6px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    background: 'var(--button, radial-gradient(60.50% 100.00% at 49.59% 100.00%, #1EFF93 0%, #81D9FF 100%))'
  },
  inactive: {
    display: 'flex',
    width: '251px',
    height: '40px',
    padding: '10px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '6px',
    border: '1px solid #EAEAEA',
    background: '#FFF'
  }
}));

export default function NewCourseCard() {
  const classes = useStyles();
  
  return (
    <div className={classes.top}>
      <div className={classes.header}>
        <h1>New Course</h1>
        <p>How do you want to start?</p>
      </div>
      <div className={classes.card}>
        <div className={classes.frame}></div>
        <h2>Text to Course with AI</h2>
        <div className={classes.description}>
          <p>Create rich learning experiences with the help of lectures, quizzes..., powered by AI technology.</p>
        </div>
        <button className={classes.active}>Create</button>
      </div>
      <div className={classes.card}>
        <div className={classes.frame}></div>
        <h2>From Scratch</h2>
        <div className={classes.description}>
          <p>Create rich learning experiences with the help of lectures, quizzes..., powered by AI technology.</p>
        </div>
        <button className={classes.inactive} disabled>Coming Soon</button>
      </div>
      <div className={classes.card}>
        <div className={classes.frame}></div>
        <h2>Use Case Ideas</h2>
        <div className={classes.description}>
          <p>Create rich learning experiences with the help of lectures, quizzes..., powered by AI technology.</p>  
        </div>
        <button className={classes.inactive} disabled>Coming Soon</button>
      </div>
    </div>        
  );
}
