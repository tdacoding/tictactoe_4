export const initState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
	movesNumber: 9,
};

export const reducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'setIsGameEnded':
			return { ...state, isGameEnded: payload };
		case 'setIsDraw':
			return { ...state, isDraw: payload };
		case 'setField':
			return { ...state, field: payload };
		case 'setCurrentPlayer':
			return { ...state, currentPlayer: payload };
		case 'setMovesNumber':
			return { ...state, movesNumber: payload };
		case 'newGame':
			return initState;

		default:
			return state;
	}
};
