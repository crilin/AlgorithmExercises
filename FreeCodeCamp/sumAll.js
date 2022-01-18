function sumAll(arr) {
  let sum=0;
  const first=arr[0];
  const second=arr[1];

  if (first>second){
    for (let i=first;i>=second;i--){
      sum += i;
    }
    
  }else{
    for (let i=first;i<=second;i++){
      sum += i;
    }
    
  }
    return sum;
  }
  
  sumAll([1, 4]);