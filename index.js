console.log("Print 1");

setTimeout(() => {
  console.log("Print 2");
}, 1000);

const processorder = () => {
  var currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log("Print 3");
};

// processorder();
console.log("Print 4");
