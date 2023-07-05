import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FiRefreshCcw } from 'react-icons/fi';
import { PiPencilSimpleLineThin, PiTrashLight } from 'react-icons/pi';
import ModifyButtons from './ModifyButtons'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: '20px 24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
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
  },
  header: {
    fontSize: '1.06rem',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    color: 'var(--black, #151515)',
  },
  paragraph: {
    color: '#666',
    fontSize: 13,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px',
    marginTop: theme.spacing(1),
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: theme.spacing(2),
  },
  circularButton: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor: '#FFF',
    border: '0.2px solid #666',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  icons: {
    width: 15,
    height: 15,
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
