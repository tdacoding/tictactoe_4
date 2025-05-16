import React from 'react';
import { connect } from 'react-redux';

class NewGameContainer extends React.Component {
	render() {
		const { dispatch } = this.props;

		return (
			<button
				className="w-40 bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
				onClick={() => {
					dispatch({ type: 'newGame' });
				}}
			>
				New Game
			</button>
		);
	}
}

export const NewGame = connect()(NewGameContainer);
