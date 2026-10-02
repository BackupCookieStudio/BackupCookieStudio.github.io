import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import './App.css';

const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />

          <main className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
      </BrowserRouter>
      <footer>
        <p>&copy; {new Date().getFullYear()} BackupCookie Studio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;