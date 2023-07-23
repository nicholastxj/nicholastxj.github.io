import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { StorageProvider } from "./contexts/StorageContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StorageProvider>
          <div className="app">
            <Navbar />
            <AppRoutes />
          </div>
        </StorageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
