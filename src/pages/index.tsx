import React, { useEffect } from 'react';
import styles from './index.module.css';
import Board from '../components/Board';
import useGame from '../components/useGame';

const Home: React.FC = () => {
  // const { downCell, clickHandler, board, minoMovement } = useGame();
  const { downCell, clickHandler, board, minoMovement, keyDownHandler } = useGame();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => keyDownHandler(e);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyDownHandler]);

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
