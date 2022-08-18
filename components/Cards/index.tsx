import React from 'react';
import styles from './card.module.scss';
interface Props{
  type:string;
}
const Card: React.FC<Props>  = ({type}) => {
	return (
		<div className={styles.card}>
      {type==='card'&&(
			<div>
				<h4>Total incomes</h4>
				<h4>612.785</h4>
				<button>Receive</button>
			</div>
      )}
      {type ==='table' &&(
			<table className='table-auto'>
				<thead>
					<tr>
						<th>Song</th>
						<th>Artist</th>
						<th>Year</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
						<td>Malcolm Lockyer</td>
						<td>1961</td>
					</tr>
					<tr>
						<td>Witchy Woman</td>
						<td>The Eagles</td>
						<td>1972</td>
					</tr>
					<tr>
						<td>Shining Star</td>
						<td>Earth, Wind, and Fire</td>
						<td>1975</td>
					</tr>
				</tbody>
			</table>
      )}
		</div>
	);
};

export default Card;
