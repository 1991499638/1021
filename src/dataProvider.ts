import jsonServerProvider from "ra-data-json-server";

// 导入task.json文件
import taskData from '../testData/task.json';

// 创建一个虚拟的 JSON Server
export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
  // taskData
);
