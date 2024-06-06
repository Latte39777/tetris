import React from 'react';
import styles from './index.module.css';
import Board from '../components/Board';
import useGame from '../components/useGame';

const Home: React.FC = () => {
  const { downCell, clickHandler, minoAppear, board } = useGame();
  return (
    <div className={styles.container}>
      <Board clickHandler={clickHandler} board={board} downCell={downCell} />
    </div>
  );
};

export default Home;
