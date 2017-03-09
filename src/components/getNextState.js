function livingCount(x,y, array){
    function living(arr){
    	const [x,y] = arr;
    	return array[x] && array[x][y];
    }
    	
    const neighbors = [
    	[x-1, y-1],[x-1, y],[x-1, y+1],	[x, y-1], [x, y+1], [x+1,y-1], [x+1,y],[x+1, y+1]
    ]
    return neighbors.reduce((acc, val) => {
    	if(living(val)) acc+=1;
    	return acc;
    }, 0)
}

export default function getNextState(rows, cols){
    
    return function(game){
    let nextState = [];
    	for(let i = 0; i < rows; i++){
    		nextState[i] = [];
    		for(let j = 0; j < cols; j++){
    			let living = livingCount(i,j,game);
    			if(living === 3 || (living === 2 && game[i][j])){
    				nextState[i].push(1);
    			}else{
    				nextState[i].push(0)
    			}
    		}
    	}
    	return nextState;
    }
} 