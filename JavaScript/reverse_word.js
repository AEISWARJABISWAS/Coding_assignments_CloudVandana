var str = "This is a sunny day";

var reverseStrings = reverseWords(str,"");

var output = reverseWords(reverseStrings," ");
console.log(output);

function reverseWords(str,separator){
  let s="";
  str=(str.split(separator));
  for(let i=str.length-1; i>=0; i--){
  s+=str[i];
  if (i !== 0) {
    s += separator;
  }
}
return s;
}