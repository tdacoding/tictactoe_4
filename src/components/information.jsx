import React from 'react';
import { connect } from 'react-redux';

class InformationContainer extends React.Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;

		return (
			<div className="w-80 text-center select-none">
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победа: ${currentPlayer}`
						: `Ходит: ${currentPlayer}`}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
