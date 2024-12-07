const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise13 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise13])
  .then(response => console.log(response))