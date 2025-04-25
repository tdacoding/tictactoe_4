import styles from './newgame.module.css';
import { store } from '../../store';

export const NewGame = () => {
	return (
		<button
			className={styles['newGameButton']}
			onClick={() => {
				store.dispatch({ type: 'newGame' });
			}}
		>
			New Game
		</button>
	);
};
