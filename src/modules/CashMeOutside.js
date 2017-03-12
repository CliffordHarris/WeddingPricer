const CashMeOutside = {
	viewChange: function(view){
		// console.log(view);
		return (Array.isArray(view)) ? [...view] : [view];
	}
}

export default CashMeOutside;
