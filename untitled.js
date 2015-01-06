var input = [0,2,3];

b = input[0].sort
foreach(a in input){
	a.sort
	if(a!=b){return false}
	b = a
}
return true;