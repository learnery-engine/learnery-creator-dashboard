import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FiRefreshCcw } from 'react-icons/fi';
import { PiPencilSimpleLineThin, PiTrashLight } from 'react-icons/pi';

const useStyles = makeStyles((theme) => ({
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

const ModifyButtons = () => {
  const classes = useStyles();

  return (
      <div className={classes.buttonContainer}>
        <button className={classes.circularButton}>
          <FiRefreshCcw className='classes.icons' />
        </button>
        <button className={classes.circularButton}>
          <PiPencilSimpleLineThin className='classes.icons' />
        </button>
        <button className={classes.circularButton}>
          <PiTrashLight className='classes.icons' />
        </button>
      </div>
  );
};

export default ModifyButtons;
