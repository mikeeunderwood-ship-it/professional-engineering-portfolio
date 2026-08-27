import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Resumes from "./routes/Resumes";
import Writing from "./routes/Writing";        // Writing index page
import WritingPost from "./pages/WritingPost"; // Markdown renderer

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
      </Routes>
    </Layout>
  );
}