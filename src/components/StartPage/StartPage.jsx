import bookImg from './book.png';
import styles from './styles.module.css';
import { Typography } from '@material-ui/core';

function StartPage() {
  return (
    <>
      <Typography align="center" variant="h6">
        Please Login or Register
      </Typography>

      <img className={styles.image} src={bookImg} alt="book immage" />
    </>
  );
}

export default StartPage;
