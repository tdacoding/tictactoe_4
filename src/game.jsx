import styles from './game.module.css';
import { Information, Field, NewGame } from './components';
import { useState } from 'react';
import { store } from './store';

export function Game() {
	const [refresh, setRefresh] = useState(false);
	store.subscribe(() => setRefresh(!refresh));
	return (
		<div className={styles['game']}>
			<Information />
			<Field />
			<NewGame />
		</div>
	);
}
