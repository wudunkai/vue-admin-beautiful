import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/face/list", //Byui代码生成机生成的url,请修改为正确的url
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/face/edit", //Byui代码生成机生成url的,请修改为正确的url
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/face/delete", //Byui代码生成机生成url的,请修改为正确的url
    method: "post",
    data,
  });
}
