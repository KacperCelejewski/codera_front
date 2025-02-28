/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import BlogPost from "./views/Blog/PostDetails";
import Blog from "./views/Blog/BlogPostList";
import Courses from "./views/Courses/Courses";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Login from "./views/Login/Login";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import Konto from "./components/konto/Konto";
import CourseDetails from "./views/courses/CourseDetails";

const RoutesElement = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/kursy" element={<Courses />} />
      <Route path="/kursy/:slug" element={<CourseDetails />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesElement;
