import { useDispatch } from 'react-redux';

export const NewGame = () => {
	const dispatch = useDispatch();
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
};
