import jsonServerProvider from "ra-data-json-server";

// 创建一个虚拟的 JSON Server
export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
  // taskData
);
