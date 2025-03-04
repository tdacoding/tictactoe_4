import styles from './game.module.css';
import { Information, Field, NewGame } from './components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const GameLayout = (props) => {
	return (
		<div className={styles['game']}>
			<Information
				isDraw={props.isDraw}
				isGameEnded={props.isGameEnded}
				currentPlayer={props.currentPlayer}
			/>
			<Field {...props} />
			<NewGame
				setCurrentPlayer={props.setCurrentPlayer}
				setIsGameEnded={props.setIsGameEnded}
				setIsDraw={props.setIsDraw}
				setField={props.setField}
				setMovesNumber={props.setMovesNumber}
			/>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
	setMovesNumber: PropTypes.func,
};

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [movesNumber, setMovesNumber] = useState(9);
	const props = {
		field,
		isDraw,
		isGameEnded,
		currentPlayer,
		movesNumber,
		setField,
		setIsDraw,
		setIsGameEnded,
		setCurrentPlayer,
		setMovesNumber,
	};
	return <GameLayout {...props} />;
}
