import React from 'react'
import { Layout } from '../layouts'
import { Home } from '../page/Home'
import { Routes, Route } from 'react-router-dom';
import { Iniciosesion } from '../page/Iniciosesion';
import { registro } from '../page/Registro';
import { Catalogo } from '../page/Catalogo';
import { Metodopago } from '../page/Metodopago';

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
      <Route path="/Catalogo" element={Layouts(Layout, Catalogo)} />
      <Route path="/Metodopago" element={Layouts(Layout, Metodopago)} />
    </Routes>
  )
}
