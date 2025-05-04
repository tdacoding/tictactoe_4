import styles from './game.module.css';
import { Information, Field, NewGame } from './components';

export function Game() {
	return (
		<div className={styles['game']}>
			<Information />
			<Field />
			<NewGame />
		</div>
	);
}
