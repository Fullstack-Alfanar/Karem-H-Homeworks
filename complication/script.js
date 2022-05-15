function sort(arr) {
    let i, temp;
    for (i = 0; i < arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            i=-1;
        }
    }
    console.log(arr);
}
let arr1=[10,4,30,13,9,17,2,24,11,23,5,7];
sort(arr1);