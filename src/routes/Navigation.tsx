import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Catalog } from "../pages/Catalog";
import { CharacterData } from "../pages/CharacterData";
import { Favorites } from "../pages/Favorites";
import { Location } from "../pages/Location";
import Navbar from "../components/Navbar";
import { ThemeProps } from '../interfaces/interfaces';

export const Navigation = ({theme, toggleTheme}:ThemeProps) => {
  return (
    <BrowserRouter>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>

          <Route index element={<Catalog />} />
          <Route path="/location/:idLocation" element={<Location />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={ <Navigate replace to="/" />} />

      </Routes>
    </BrowserRouter>
  );
};
