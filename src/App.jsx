import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Sample from "./pages/Sample";
import Clipboard from "./pages/Clipboard";
import LoopStudios from "./pages/LoopStudios";
import Shortly from "./pages/Shortly";
import TestimonialGrid from "./pages/TestimonialGrid";
import Fylo from "./pages/Fylo";
import Bookmark from "./pages/Bookmark";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="sample" element={<Sample />} />
          <Route path="clipboard" element={<Clipboard />} />
          <Route path="loopstudios" element={<LoopStudios />} />
          <Route path="shortly" element={<Shortly />} />
          <Route path="testimonial-grid" element={<TestimonialGrid />} />
          <Route path="fylo" element={<Fylo />} />
          <Route path="bookmark" element={<Bookmark />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5 * 1000,
            style: {
              backgroundColor: "#ecfdf5",
              color: "#065f46",
              border: "1px solid #34d399",
            },
          },
          error: {
            duration: 10 * 1000,
            style: {
              backgroundColor: "#fef2f2",
              color: "#991b1b",
              border: "1px solid #f87171",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}
