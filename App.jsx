import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
const AppLayOut = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayOut;
