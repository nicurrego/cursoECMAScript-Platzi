const anotherFunction = () =>{
  return new Promise((resolve, reject) =>{
    if(false){
      resolve('hey!!');
    } else {
      reject('whooops!');
    }
  })
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err));