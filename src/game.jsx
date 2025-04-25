import styles from './game.module.css';
import { Information, Field, NewGame } from './components';
import { useState, useEffect } from 'react';
import { store } from './store';

export function Game() {
	const [actualState, setActualState] = useState(store.getState());
	useEffect(() => {
		return store.subscribe(() => setActualState(store.getState()));
	}, []);
	return (
		<div className={styles['game']}>
			<Information actualState={actualState} />
			<Field actualState={actualState} />
			<NewGame />
		</div>
	);
}
