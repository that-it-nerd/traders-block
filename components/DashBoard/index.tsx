import React from 'react';

interface Data{
    name:string;
    age:number;
}
interface Props {
	data: Data;
	setData: React.Dispatch<React.SetStateAction<object>>;
	// children?: JSX.Element|JSX.Element[];
}

const DashBoard: React.FC<Props> = ({ data, setData }) => {
	return (
		<div
			onClick={() => {
				setData({
					name: 'That Nerd',
					age: 30,
				});
			}}
		>
			<h1>DashBoard</h1>
			<p>{data.name}</p>
            <p>{data.age}</p>
		</div>
	);
};

export default DashBoard;
