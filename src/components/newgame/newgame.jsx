import styles from './newgame.module.css';
import { useDispatch } from 'react-redux';

export const NewGame = () => {
	const dispatch = useDispatch();
	return (
		<button
			className={styles['newGameButton']}
			onClick={() => {
				dispatch({ type: 'newGame' });
			}}
		>
			New Game
		</button>
	);
};
