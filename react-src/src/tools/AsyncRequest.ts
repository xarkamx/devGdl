import { Ajax } from "./Ajax";

export function AsyncRequest(path: string) {
  const methods = ["get", "post", "put", "delete"];
  let fetchItem: any = {};
  for (let method of methods) {
    fetchItem[method] = (parameters: object = {}) => {
      const ajax = new Ajax();
      return ajax.fetchData(path, parameters, method);
    };
  }
  return fetchItem;
}
