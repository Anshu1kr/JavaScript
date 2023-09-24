const name = "anshu"
const repoCount = 10

// console.log(nmae + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("anshu-hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);

const newStringOne = "    anshu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anshu.com/anshu%20kushwaha"

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));