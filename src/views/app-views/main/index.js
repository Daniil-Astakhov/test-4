import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Apps = () => (
  <Routes>
    <Route path="*" element={<Navigate to="katalog" replace />} />
  </Routes>
);

export default Apps;
