import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
//pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      {/* <MainTitleText>소플의 미니 블로그</MainTitleText> */}
      <div className="App"></div>
      <Routes>
        {/* <Route index element={<MainPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
