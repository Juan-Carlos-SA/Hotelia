import React from 'react'
import { Layout } from '../layouts'
import { Home } from '../page/Home'
import { Routes, Route } from 'react-router-dom';
import { Iniciosesion } from '../page/Iniciosesion';
import { registro } from '../page/Registro';

export function Rutas() {
  const Layouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  }

  return (
    <Routes>
      <Route path="/" element={Layouts(Layout, Home)} />
      <Route path="/Iniciosesion" element={Layouts(Layout, Iniciosesion)} />
      <Route path="/registro" element={Layouts(Layout, registro)} />
    </Routes>
  )
}
