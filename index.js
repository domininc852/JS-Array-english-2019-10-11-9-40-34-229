// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof a);
console.log(typeof b)
//variable a is type of string where variable b is type of array


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i=0;i<a.length;i++){
  a[i]*=2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

//case1:
var output="'"
for(var i=0;i<colors.length;i++){
  if (i!=colors.length-1){
    output+=colors[i]+" ";
  }
  else{
    output+=colors[i]+"'";
  }
}
console.log(output);

//case2:
var output="'"
for(var i=0;i<colors.length;i++){
  if (i!=colors.length-1){
    output+=colors[i]+"+";
  }
  else{
    output+=colors[i]+"'";
  }
}
console.log(output);

//case3:
var output="'"
for(var i=0;i<colors.length;i++){
  if (i!=colors.length-1){
    output+=colors[i]+",";
  }
  else{
    output+=colors[i]+"'";
  }
}
console.log(output);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(function(a,b){return b-a}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var count={};
count[a[0]]=1;
for(var i=1;i<a.length;i++){
  found=false;
  for(x in count){
    if (x==a[i]){
      found=true;
      count[x]=count[x]+1;
      break;
    }
  }
  if (found==false){
    count[a[i]]=1;
  }
}
var max=0;
var frequent="";
for (x in count){
  if (count[x]>max){
    max=count[x];
    frequent=x;
  }
}
console.log(frequent);
