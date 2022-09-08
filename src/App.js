import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Main from "./pages/Dashboard/Main";
const App = () =>{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/business" element={<Main />}></Route>
          <Route path="/risk-profile" element={<Main />}></Route>
          <Route path="/konnect" element={<Main />}></Route>
          <Route path="/funding" element={<Main />}></Route>
          <Route path="/academy" element={<Main />}></Route>
          <Route path="/support" element={<Main />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
