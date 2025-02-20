
import Home from './views/home';
import Blog from './views/Blog/PostDetails';
import BlogPost from './views/Blog/BlogPostList';
import Courses from './views/Courses/Courses';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path='/wiedza'element={<Courses/>}/>
      </Routes>
    </Router>



  )
}
export default App
