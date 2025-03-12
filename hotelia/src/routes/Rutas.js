import React from 'react'
import { Layout } from '../layouts'
import { Home } from '../page/Home'
import { Routes, Route } from 'react-router-dom';
import { iniciosesion } from '../page/iniciosesion';
import { registro } from '../page/registro';

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
      <Route path="/iniciosesion" element={Layouts(Layout, iniciosesion)} />
      <Route path="/registro" element={Layouts(Layout, registro)} />
    </Routes>
  )
}
