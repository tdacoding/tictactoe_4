import styles from './information.module.css';
import { store } from '../../store';

export const Information = () => {
	const { isDraw, isGameEnded, currentPlayer } = store.getState();
	return (
		<div className={styles['informationDiv']}>
			<div className={styles['information']}>
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победа: ${currentPlayer}`
						: `Ходит: ${currentPlayer}`}
			</div>
		</div>
	);
};
