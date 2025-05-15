import { Information, Field, NewGame } from './components';

export function Game() {
	return (
		<div className="flex flex-col mt-15 items-center">
			<Information />
			<Field />
			<NewGame />
		</div>
	);
}
