import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import AboutUs from "./components/AboutUsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/about" element={<AboutUs />} />
          </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
