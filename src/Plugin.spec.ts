import path from "path";
import webpack from "webpack";

const run = (compiler: webpack.Compiler) =>
  new Promise((resolve, reject) => {
    compiler.run(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

let compiler: webpack.Compiler;
beforeAll(() => {
  compiler = webpack({
    context: path.resolve(__dirname, "__testfixtures__"),
    entry: "./entry.js",
    output: {
      path: path.resolve(__dirname, "../tmp"),
      filename: "bundle.js"
    }
  });
});

beforeEach(async () => {
  await run(compiler);
});

test.todo("hoge");
