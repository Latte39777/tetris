import React, { useEffect } from 'react';
import styles from './index.module.css';
import Board from '../components/Board';
import useGame from '../components/useGame';

const Home: React.FC = () => {
  const { downCell, clickHandler, board, minoMovement } = useGame();
  // const { downCell, clickHandler, board, minoMovement, keyDownHandler } = useGame();

  // useEffect(() => {
  //   window.addEventListener('keydown', () => keyDownHandler);
  //   return () => {
  //     window.removeEventListener('keydown', () => keyDownHandler);
  //   };
  // }, [keyDownHandler]);

  return (
    <div className={styles.container}>
      <Board
        clickHandler={clickHandler}
        board={board}
        downCell={downCell}
        minoMovement={minoMovement}
      />
    </div>
  );
};

export default Home;
