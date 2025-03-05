import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
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

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

export const Information = (props) => {
	return <InformationLayout {...props} />;
};
