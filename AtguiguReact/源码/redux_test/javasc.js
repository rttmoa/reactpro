

function fn(data, time) {
	return (disp) => {

		setTimeout(() => {
			disp(data)
		},time)
	}
	
}

function disp(data){
    console.log('data', data('lisi'))
}
disp(fn('zhangsan', 1000))
