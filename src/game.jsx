import styles from './game.module.css';
import { Information, Field, NewGame } from './components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const GameLayout = (props) => {
	return (
		<div className={styles['game']}>
			<Information
				isDraw={props.isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={props.field}
				isDraw={props.isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<NewGame {...props} />
		</div>
	);
};

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const props = {
		field,
		isDraw,
		isGameEnded,
		currentPlayer,
		setField,
		setIsDraw,
		setIsGameEnded,
		setCurrentPlayer,
	};
	return <GameLayout {...props} />;
}
