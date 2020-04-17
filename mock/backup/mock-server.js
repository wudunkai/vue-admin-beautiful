const chokidar = require("chokidar");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const path = require("path");
const express = require("express");
const app = express();
const mockDir = path.join(process.cwd(), "mock");
const fs = require("fs");
const dotenv = require("dotenv");
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

function registerRoutes(app) {
  let mockLastIndex;
  const { default: mocks } = require("./index");
  for (const mock of mocks) {
    if (mock.type !== "get") app["get"](mock.url, mock.response); //默认开启get请求
    app[mock.type](mock.url, mock.response);
    mockLastIndex = app._router.stack.length;
  }
  const mockRoutesLength = Object.keys(mocks).length;
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  };
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)];
    }
  });
}

module.exports = () => {
  require("@babel/register");
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  const mockRoutes = registerRoutes(app);
  let mockRoutesLength = mockRoutes.mockRoutesLength;
  let mockStartIndex = mockRoutes.mockStartIndex;
  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true,
    })
    .on("all", (event, path) => {
      if (event === "change" || event === "add") {
        try {
          app._router.stack.splice(mockStartIndex, mockRoutesLength);
          unregisterRoutes();
          const mockRoutes = registerRoutes(app);
          mockRoutesLength = mockRoutes.mockRoutesLength;
          mockStartIndex = mockRoutes.mockStartIndex;
          console.log(
            chalk.magentaBright(`\n > Mock服务热更新成功,修改路由${path}`)
          );
        } catch (error) {
          console.log(chalk.redBright(error));
        }
      }
    });
};
const envConfig = dotenv.parse(fs.readFileSync(".env.development"));
const mockUrl = envConfig["VUE_APP_BASE_API"];
const reg = new RegExp(/(\w+):\/\/([^/:]+)(:\d*)?/);
const matchObj = mockUrl.match(reg);
const mockPort = matchObj[3].split(":")[1];
const net = require("net");

// 检测端口是否被占用
function portIsOccupied(mockPort) {
  // 创建服务并监听该端口
  var server = net.createServer().listen(mockPort);

  server.on("listening", () => {
    // 执行这块代码说明端口未被占用
    server.close(); // 关闭服务
    if (
      mockUrl.indexOf("localhost") != -1 ||
      mockUrl.indexOf("127.0.0.1") != -1
    ) {
      app.listen(mockPort, () => {
        console.log(chalk.magentaBright(`Mock服务[${mockUrl}]开启成功!`));
      });
    } else {
      console.log(chalk.magentaBright(`前后端联调模式[${mockUrl}]开启成功!`));
    }
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      // 端口已经被使用
      console.log(chalk.magentaBright(`Mock服务端口[${mockPort}]被占用!`));
    }
  });
}

portIsOccupied(mockPort);
