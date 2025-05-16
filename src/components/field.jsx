import React from 'react';
import { connect } from 'react-redux';

class FieldContainer extends React.Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer, field, movesNumber, dispatch } =
			this.props;
		const INDX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		const hasWinner = (field) => {
			const sample = WIN_PATTERNS.map((winIndxs) => {
				return winIndxs
					.map((tripleElem) => {
						return field[tripleElem];
					})
					.join('');
			});
			const isTriple = sample.some((el) => {
				return el === 'XXX' || el === '000';
			});
			return isTriple;
		};

		const hasMoved = (ind) => {
			if (!isGameEnded && !isDraw) {
				const moves = movesNumber - 1;
				dispatch({ type: 'setMovesNumber', payload: movesNumber - 1 });
				const newField = [...field];
				newField[ind] = currentPlayer;
				dispatch({ type: 'setField', payload: newField });
				if (hasWinner(newField)) {
					dispatch({ type: 'setIsGameEnded', payload: true });
					return;
				}
				if (moves == 0) {
					dispatch({ type: 'setIsDraw', payload: true });
					return;
				}
				dispatch({
					type: 'setCurrentPlayer',
					payload: currentPlayer === 'X' ? '0' : 'X',
				});
			}
		};
		return (
			<div className="grid grid-cols-3 pad-0 py-5 ">
				{INDX.map((ind) => {
					return (
						<button
							className="h-15 w-15 bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow disabled:bg-gray-100"
							key={ind}
							disabled={field[ind] || isGameEnded}
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
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	field: state.field,
	movesNumber: state.movesNumber,
});

export const Field = connect(mapStateToProps)(FieldContainer);
