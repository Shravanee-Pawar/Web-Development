const fs = require("fs");

// ---------- 1. FILE SYSTEM ----------

fs.writeFileSync("demo.txt", "Hello Node.js\n");

fs.appendFileSync("demo.txt", "This line is appended\n");

let data = fs.readFileSync("demo.txt", "utf8");

console.log("File content:\n" + data);

fs.renameSync("demo.txt", "newdemo.txt");

console.log("File renamed to newdemo.txt");

// ---------- 2. BUFFER ----------

let buf = Buffer.from("Hello");

console.log("Buffer:", buf);

console.log("Length:", buf.length);

console.log("To string:", buf.toString());

buf.write("J");

console.log("After write:", buf.toString());

// ---------- 3. STREAMS ----------

const readStream = fs.createReadStream("newdemo.txt", "utf8");

const writeStream = fs.createWriteStream("copy.txt");

readStream.on("data", (chunk) => {
    console.log("Chunk received:", chunk);
});

readStream.pipe(writeStream);

readStream.on("end", () => {
    console.log("Reading finished. copy.txt created.");

    fs.unlinkSync("newdemo.txt");

    console.log("newdemo.txt deleted");
});