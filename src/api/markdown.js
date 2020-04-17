import request from "@/utils/request";

export function getPrettierList(data) {
  return request({
    url: "/markdown/getPrettierList",
    method: "post",
    data,
  });
}
