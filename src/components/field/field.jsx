import styles from './field.module.css';
import PropTypes from 'prop-types';

const hasMoved = (ind) => {};

const FieldLayout = ({ field }) => {
	const INDX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div className={styles['buttons-container']}>
			{INDX.map((ind) => {
				return (
					<button
						className={styles.button}
						key={ind}
						disabled={field[ind]}
						onClick={() => {
							hasMoved(ind);
						}}
					>
						{field[ind]}
					</button>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
};

export const Field = (props) => {
	return <FieldLayout {...props} />;
};
