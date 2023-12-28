import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import PostHome from "./post/PostHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostHome />} />
      </Routes>
    </BrowserRouter>
  );
}
