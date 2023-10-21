import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,

} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./user";
import { authProvider } from "./authProvider";
import MyLoginPage from './MyLoginPage';
import MyRegisterPage from './MyRegisterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// 创建检查令牌的函数
const checkToken = () => {
  // 从localStorage中获取令牌（假设令牌存储在名为'authToken'的键中）
  // const token = localStorage.getItem('authToken');
  const token = '1'
  const IfRenderAdmin = token=='1' ? (
    <Admin 
    authProvider={authProvider} 
    dataProvider={dataProvider}
    >
      <Resource name="tasks" list={ListGuesser} />
      {/* 添加其他资源 */}
    </Admin>
  ) : (<a href="/login"></a>)
  return IfRenderAdmin; // 如果令牌存在，返回true；否则，返回false
};

export const App = () => {
    // 检查令牌是否存在
    const TokenRender = checkToken();
    // console.dir(dataProvider)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<MyLoginPage />} />
          <Route path="/register" element={<MyRegisterPage />} />
          <Route path="/" element={<MyLoginPage />} />
        </Routes>
        {TokenRender}

    </BrowserRouter>
  )
};
