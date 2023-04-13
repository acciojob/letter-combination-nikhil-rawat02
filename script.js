function letterCombinations(input_digit) {
  //Complete the function
	function  helper(index, curr) {

		if(index == input_digit.length){
			if (curr.length > 1) {
				res.push(curr);
				return;
			}
		}

		
		let elem = input_digit[index];
		for(let c for obj[elem]){
			helper(index+1, curr + c);
		}
}
	let obj ={
		'0' = '0';
		'1' = '1';
		'2' = "abc";
		'3'= "def"; 
		'4'= "ghi";
		'5' = "jkl";
		'6' = "mno";
		'7' = "pqrs";
		'8' = "tuv";
		'9'= "wxyz";
	}

	let res = [];
	helper(0, "");

	res.sort();
	return res;

}

module.exports = letterCombinations;
