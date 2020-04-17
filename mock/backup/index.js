import Mock from "mockjs";
import mocks from "./controller";
import chalk from "chalk";

const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`mock-server${url}`),
    type: type || "get",
    response(req, res) {
      console.log(chalk.magentaBright(`\n >请求mock接口地址: ${req.path}`));
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      );
    },
  };
};
export default mocks.map((route) => {
  return responseFake(route.url, route.type, route.response);
});
