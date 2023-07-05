import { Box, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { FiRefreshCcw } from 'react-icons/fi';
import Divider from '@mui/material/Divider';
import SimpleTitleTextContainer from '../components/SimpleTitleTextContainer'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1rem',
    backgroundColor: '#fff'
  },
  listing: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '20px',
    backgroundColor: '#fff',
  },
  circularButton: {
    height: '23px',
    width: '23px',
    borderRadius: 28,
    backgroundColor: '#FFF',
    border: '0.2px solid #666',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    color: '#666666'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
    width: '100%'
  },
  icons: {
    width: '10px',
    height: '10px',
    color: '#666666'
  },
  searchInput: {
    width: '100%',
    height: '64px',
    boxShadow: '0px 1px 1px 0px #0000000A, 0px 8px 24px -8px #0000000A',
    borderRadius: '10px',
    border: '1px solid #EAEAEA',

    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  placeholder: {
    color: '#EAEAEA',
    margin: '20px'
  },
  paragraph: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0em',
    textAlign: 'left',   
    color: '#A8A8A8'
  },
}));

const VerticalContentCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography style={{ color: '#666666' }} variant="body1">Select a title to continue</Typography>
        <button className={classes.circularButton}>
          <FiRefreshCcw className={classes.icons} />
        </button>
      </div>
      <input
        className={classes.searchInput}
        placeholder="    Enter your custom title"
        InputProps={{
          classes: {
            input: classes.placeholder,
          },
        }}
      />
      <Divider />
      <Typography variant="body1" className={classes.paragraph}>
        Suggested by AI
      </Typography>
      <div className='classes.listing'>
        {/* Insert SimpleTitleTextContainer here */}
      </div>
    </div>
  );
};

export default VerticalContentCard;
