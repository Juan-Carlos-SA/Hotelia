import React from 'react'
import { Layout } from '../layouts'
import { Home } from '../page/Home'
import { Routes, Route } from 'react-router-dom';
import { Iniciosesion } from '../page/iniciosesion/iniciosesion';
import { Registro } from '../page/Registro/Registro'
import { Catalogo } from '../page/Catalogo';
import { MetodoPago } from '../page/Metodopago';
import { Servicios } from '../page/Servicios/Servicios';
import { ProServicios1 } from '../page/Servicios/ProServicios/ProServicios1';
import { ProCatalogo1 } from '../page/Catalogo/ProCatalogo/ProCatalogo1';
import { ProCatalogo2 } from '../page/Catalogo/ProCatalogo/ProCatalogo2';
import { ProCatalogo3 } from '../page/Catalogo/ProCatalogo/ProCatalogo3';
import { Productos } from '../Formulario/Productos';

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
      <Route path="/Iniciosesion" element={Layouts(Layout,Iniciosesion )} />
      <Route path="/Registro" element={Layouts(Layout, Registro)} />
      <Route path="/Catalogo" element={Layouts(Layout, Catalogo)} />
      <Route path="/Metodopago" element={Layouts(Layout, MetodoPago)} />
      <Route path="/Servicios" element={Layouts(Layout, Servicios)} />
      <Route path="/ProServicios1" element={Layouts(Layout, ProServicios1)} />
      <Route path="/ProCatalogo1" element={Layouts(Layout, ProCatalogo1)} />
      <Route path="/ProCatalogo2" element={Layouts(Layout, ProCatalogo2)} />
      <Route path="/ProCatalogo3" element={Layouts(Layout, ProCatalogo3)} />
      <Route path="/Administrador" element={Layouts(Layout,Productos)}/>
    </Routes>
  )
}