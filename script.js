var obj ={
		'0' : '0',
		'1' : '1',
		'2' : "abc",
		'3': "def",
		'4': "ghi",
		'5' : "jkl",
		'6' : "mno",
		'7' : "pqrs",
		'8' : "tuv",
		'9': "wxyz"
	}
var res;
function  helper(index, curr, input_digit) {

		if(index == input_digit.length){
			if (curr.length >= 1) {
				res.push(curr);
				return;
			}
		}

		let elem = obj[input_digit[index]];
        for(let i =0; i < elem.length; i++){
            helper(index+1,curr + elem.charAt(i),input_digit);
        }
		
}
function letterCombinations(input_digit) {
  //Complete the function
	res = [];
    if(input_digit.length < 1)return res;
	helper(0, "", input_digit);

	res.sort();
	return res;
}
console.log(letterCombinations(23));