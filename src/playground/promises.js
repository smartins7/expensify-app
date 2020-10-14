const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Steven",
    //   age: 29,
    // });
    reject("Something went wrong");
  }, 3000);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);
  })
  .then((str) => {
    console.log("does this run?", str);
  })
  .catch((error) => {
    console.log("error:", error);
  });

console.log("after");
