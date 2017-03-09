
export default function(rows,cols){
	let arr = [];
	
	for(let i = 0; i < rows; i++){
		arr[i] = [];
		for(let j = 0; j < cols; j++){
			const state = Math.round(Math.random());
			arr[i].push(state);
		}
	}
	return arr;
}

