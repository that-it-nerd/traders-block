import React from 'react';
import styles from './card.module.scss';
interface Props {
	type: string;
}
const Card: React.FC<Props> = ({ type }) => {
	return (
		<div className={styles.card}>
			{type === 'card' && (
				<div className={styles.card_content}>
					<div className={styles.income_section}>
						<div className={styles.income_content}>
							<h4>Total incomes</h4>
							<h4 className='bold'>612.785</h4>
						</div>
						<div className={styles.income_content}>
							<h4>Residual incomes</h4>
							<h4 className='bold'>112.785</h4>
						</div>
					</div>
					<button>Receive</button>
				</div>
			)}
			{type === 'table' && (
				<table className={`table-fixed ${styles.custom_table}`}>
					<thead>
						<tr>
							<th>Song</th>
							<th>Artist</th>
							<th>Year</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
							<td>19:61</td>
							
						</tr>
						<tr>
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
							<td>19:72</td>
						</tr>
						<tr>
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
							<td>19:75</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Card;
