let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



// let i = 0;
// while(i<arr.length){

//     console.log(arr[i]);
//     i++;
// }

for(let i=0; i<arr.length; i++){
    if(arr[i]>20){
        break;
    }

    if(arr[i]%2===1){
        continue;
    }

    console.log(arr[i]);
}