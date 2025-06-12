import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BlogLandingPage from "./pages/Blog/BlogLandingPage";
import BlogPostView from "./pages/Blog/BlogPostView";
import PostByTags from "./pages/Blog/PostByTags";
import SearchPosts from "./pages/Blog/SearchPosts";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import BlogPosts from "./pages/Dashboard/BlogPosts";
import BlogPostEditor from "./pages/Dashboard/BlogPostEditor";
import Comments from "./pages/Dashboard/Comments";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<BlogLandingPage />} />
          <Route path="/:id" element={<BlogPostView />} />
          <Route path="/tag/:tagName" element={<PostByTags />} />
          <Route path="/search" element={<SearchPosts />} />

          {/* Logged In Routes (User) */}
          <Route element={<PrivateRoute />}>
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/posts" element={<BlogPosts />} />
            <Route path="/user/create" element={<BlogPostEditor />} />
            <Route
              path="/user/edit/:id"
              element={<BlogPostEditor isEdit={true} />}
            />
            <Route path="/user/comments" element={<Comments />} />
          </Route>
        </Routes>
      </Router>

      <Toaster toastOptions={{ className: "", style: { fontSize: "13px" } }} />
    </div>
  );
};

export default App;
