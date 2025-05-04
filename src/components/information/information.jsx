import styles from './information.module.css';
import { useSelector } from 'react-redux';

export const Information = () => {
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);
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
