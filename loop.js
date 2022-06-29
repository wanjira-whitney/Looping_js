for (var i =1; i<=100; i++){
    if (i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}
var sum=0;
for(var x=0; x < 1000; x++)
{
    if (x%3==0 || x%5==0)
    {
        sum+=x;
    }
}
console.log(sum);
"0 is even"
"1 is odd"
"2 is even"
for (var x=0; x<=20; x++){
    if (x==0){
        console.log(x + " ","is even");
    }
    else if (x%2==0){
        console.log(x + " ","is even");
    }
    else{
        console.log(x + " ","is odd");
    }
}
if (40>10){
    console.log("40 is greater than 10")
}
else{
    console.log("10 is greater than 40")
}


