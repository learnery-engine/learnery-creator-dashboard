import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FiRefreshCcw } from 'react-icons/fi';
import { PiPencilSimpleLineThin, PiTrashLight } from 'react-icons/pi';
import ModifyButtons from './ModifyButtons';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(3), // Adjust padding based on theme spacing
    margin: theme.spacing(2), // Adjust margin based on theme spacing
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(3), // Adjust gap based on theme spacing
    alignSelf: 'stretch',
    borderRadius: 10,
    border: '1px solid #EAEAEA',
    backgroundColor: '#FFF',
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 8px 24px -8px rgba(0, 0, 0, 0.04)',
    transition: 'border-radius 0.3s, background-color 0.3s, box-shadow 0.3s',
    '&:hover, &:active': {
      borderRadius: 10,
      backgroundColor: '#FFF',
      boxShadow: '0px 1px 1px 0px #37F6AE',
      border: '1px solid #37F6AE',
    },
    // Responsive styles
    [theme.breakpoints.between('lg', 'xl')]: {
      width: 580, // Width set to 580px for the 1728px screen
      height: `calc(3 / 4 * ${theme.spacing(10)})`, // 3/4 height based on theme spacing
      padding: theme.spacing(2.25), // Adjust padding based on theme spacing
      margin: theme.spacing(1.5), // Adjust margin based on theme spacing
      gap: theme.spacing(2.25), // Adjust gap based on theme spacing
    },
    // Additional responsive styles
    [theme.breakpoints.down('lg')]: {
      width: 435, // Width set to 435px for the 1280px screen (3/4 of 580px)
    },
  },
  header: {
    fontSize: '17px',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    color: 'var(--black, #151515)',
    // Responsive styles
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '13px', // Reduce font size when screen width is between 1728px and 1280px
    },
  },
  paragraph: {
    color: '#666',
    fontSize: 13,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px',
    marginTop: theme.spacing(1),
    // Responsive styles
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '10px', // Reduce font size when screen width is between 1728px and 1280px
    },
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(2.25), // Adjust gap based on theme spacing
    marginTop: theme.spacing(1),
    // Responsive styles
    [theme.breakpoints.between('lg', 'xl')]: {
      marginTop: theme.spacing(0.75), // Adjust margin top based on theme spacing
    },
  },
  circularButton: {
    height: theme.spacing(3), // Adjust height based on theme spacing
    width: theme.spacing(3), // Adjust width based on theme spacing
    borderRadius: '50%',
    backgroundColor: '#FFF',
    border: '0.2px solid #666',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  icons: {
    width: theme.spacing(1.875), // Adjust width based on theme spacing
    height: theme.spacing(1.875), // Adjust height based on theme spacing
  },
}));

const SimpleTitleTextContainer = ({ title, text }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography variant="h6" className={classes.header}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        {text}
      </Typography>
      <ModifyButtons />
    </Paper>
  );
};

export default SimpleTitleTextContainer;
