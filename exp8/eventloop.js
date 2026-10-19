// 1. Simple callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Student", () => console.log("Callback executed"));

// 2. Event loop order
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

process.nextTick(() => console.log("nextTick"));

console.log("End");