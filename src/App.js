import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Layout from "./Layout";

import Resume from "./Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resume />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AboutMe />, document.getElementById("root"));