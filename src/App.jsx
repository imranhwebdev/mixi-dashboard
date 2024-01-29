import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { Games, Staking, Affiliate, PageNotFound } from "./screens";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Staking />} />
            <Route path="/games" element={<Games />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;