import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  outlineContainer: {
    width: '1090px',
    height: '910px',
    flexShrink: 0,
    background: '#FBFBFB'
  },
  courseHeader: {
    display: 'flex',
    width: '808px',
    flexDirection: 'column',
    flexShrink: 0,
    color: 'var(--black, #151515)',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '46px'
  },
  editToggle: {
    color: 'var(--black, #151515)',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '46px',
    borderRadius: '8px',
    background: 'rgba(0, 0, 0, 0.03)'
  },
  editButton: {
    display: 'flex',
    height: '40px',
    padding: '10px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    border: '1px solid #EAEAEA',
    background: '#FFF'
  },
  generatedOutline: {
    display: 'flex',
    width: '808px',
    height: '197px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '8px',
    border: '1px solid var(--gray-1, #EDEDED)',
    background: '#FFF'
  },
  outlineOptions: {
    width: '1090px',
    height: '187px',
    flexShrink: 0
  },
  askAI: {
    display: 'flex',
    width: '808px',
    padding: '14px 14px 14px 20px',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
}));

export default function EditOutlineCard() {
  const classes = useStyles();
  return (
    <div className={classes.outlineContainer}>
      <h1 className={classes.courseHeader}>Designing the Future: A UI Design Course for High Schoolers Who Want to Rule the World (or at Least Make It Look Good)</h1>
      <div className={classes.editToggle}>
        <button className={classes.editButton}>Basic Editing</button>
        <button className={classes.editButton}>Advanced Editing</button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_2572_18402)">
          <path d="M13.125 15H6.875V16.25H13.125V15Z" fill="#FF8A00"/>
          <path d="M11.875 17.5H8.125V18.75H11.875V17.5Z" fill="#FF8A00"/>
          <path d="M10.0003 1.25C8.34275 1.25 6.75303 1.90848 5.58093 3.08058C4.40883 4.25269 3.75035 5.8424 3.75035 7.5C3.70808 8.40834 3.88208 9.31373 4.25803 10.1417C4.63398 10.9696 5.20114 11.6965 5.91285 12.2625C6.53785 12.8438 6.87535 13.175 6.87535 13.75H8.12535C8.12535 12.6 7.4316 11.9562 6.7566 11.3375C6.17245 10.8902 5.70689 10.3064 5.40071 9.6374C5.09453 8.96838 4.95706 8.23448 5.00035 7.5C5.00035 6.17392 5.52713 4.90215 6.46482 3.96447C7.4025 3.02678 8.67427 2.5 10.0003 2.5C11.3264 2.5 12.5982 3.02678 13.5359 3.96447C14.4736 4.90215 15.0003 6.17392 15.0003 7.5C15.0429 8.23503 14.9045 8.96927 14.5972 9.63833C14.2899 10.3074 13.8231 10.8908 13.2378 11.3375C12.5691 11.9625 11.8753 12.5875 11.8753 13.75H13.1253C13.1253 13.175 13.4566 12.8438 14.0878 12.2563C14.7991 11.6912 15.366 10.9654 15.7419 10.1386C16.1179 9.31169 16.2921 8.40737 16.2503 7.5C16.2503 6.67924 16.0887 5.86651 15.7746 5.10823C15.4605 4.34994 15.0001 3.66095 14.4198 3.08058C13.8394 2.50022 13.1504 2.03984 12.3921 1.72575C11.6338 1.41166 10.8211 1.25 10.0003 1.25Z" fill="#FF8A00"/>
        </g>
        <defs>
          <clipPath id="clip0_2572_18402">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <p>Edit your outline with AI using prompts</p>
      <div className={classes.generatedOutline}>
        <ul>
          <li>Possible outline:</li>
          <li>The importance of exploring the ocean</li>
          <li>What lies beneath the surface</li>
          <li>Definition of deep-sea monsters</li>
          <li>Examples of terrifying creatures</li>
          <li>How they survive in the abyss</li>
<li>Implications for research and conservation</li>
          <li>Conclusion and future prospects</li>
        </ul>
      </div>
      <div className={classes.outlineOptions}>
        <button className={classes.editButton}>Re-generate all lecture</button>
        <button className={classes.editButton}>Make Shorter</button>
        <button className={classes.editButton}>Make Longer</button>
        <button className={classes.editButton}>Improve Writing</button>
        <div className={classes.askAI}>
          <input type="text" placeholder="Ask AI" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_3333_14439)">
              <path d="M20.7823 3.21745C20.681 3.1167 20.5532 3.04695 20.4137 3.01639C20.2742 2.98584 20.1288 2.99574 19.9948 3.04495L3.49476 9.04495C3.35246 9.09892 3.22995 9.19491 3.14349 9.32016C3.05704 9.44542 3.01074 9.59401 3.01074 9.7462C3.01074 9.89839 3.05704 10.047 3.14349 10.1722C3.22995 10.2975 3.35246 10.3935 3.49476 10.4474L10.6948 13.3274L13.5748 20.5274C13.6289 20.6635 13.7216 20.7807 13.8416 20.8647C13.9615 20.9487 14.1034 20.9957 14.2498 20.9999C14.4013 20.9968 14.5484 20.9479 14.6716 20.8595C14.7947 20.7711 14.8882 20.6475 14.9398 20.5049L20.9398 4.00495C20.9909 3.87226 21.0032 3.72777 20.9753 3.58834C20.9474 3.44891 20.8805 3.32028 20.7823 3.21745ZM14.2498 18.1499L12.1573 12.8999L15.7498 9.30745L14.6923 8.24995L11.0698 11.8724L5.84976 9.74995L18.9973 5.00245L14.2498 18.1499Z" fill="#22403B"/>
            </g>
            <defs>
              <clipPath id="clip0_3333_14439">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div> 
      </div>
    </div>
  );
}
