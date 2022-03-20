let options = {
  width: 400,
  height: 500,
};

let { color = "black", width, height } = options;

console.log(width);
console.log(height);

if (options.color !== undefined) {
  color = options.color;
} else {
  color = "black";
  console.log(color);
  
}

