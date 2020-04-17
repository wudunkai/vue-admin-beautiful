import { mock, Random } from "mockjs";

function color() {
  return Random.color().substr(1);
}

export default [
  {
    url: "/table/list",
    type: "post",
    response: (config) => {
      const { query } = config;
      return {
        code: 200,
        msg: "success",
        totalCount: 238,
        data: mock({
          "data|2": [
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=1`,
              smalImg: `https://picsum.photos/200/200?random=1`,
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=2`,
              smalImg: `https://picsum.photos/200/200?random=2`,
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=3`,
              smalImg: `https://picsum.photos/200/200?random=3`,
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=4`,
              smalImg: `https://picsum.photos/200/200?random=4`,
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=5`,
              smalImg: `https://picsum.photos/200/200?random=5`,
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
          ],
        }).data,
      };
    },
  },
];
