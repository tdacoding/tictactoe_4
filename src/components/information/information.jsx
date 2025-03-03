import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div className={styles['informationDiv']}>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</div>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
