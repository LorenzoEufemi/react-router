import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AboutUs from "./pages/AboutUsPage";
import ShowPage from "./pages/ShowPage";
import CreatePage from "./pages/CreatePage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post">
          <Route index element={<PostPage />} />
          <Route path=":id" element={<ShowPage/>} />
          <Route path="create" element={<CreatePage/>} />
          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
