import React from 'react';
import { Layout } from '../layouts';
import { Home } from '../page/Home';
import { Routes, Route } from 'react-router-dom';
import { Iniciosesion } from '../page/iniciosesion/iniciosesion';
import { Registro } from '../page/Registro/Registro';
import { Catalogo } from '../page/Catalogo';
import { MetodoPago } from '../page/Metodopago/Metodopago';
import { Servicios } from '../page/Servicios/Servicios';
import { ProServicios } from '../page/Servicios/ProServicios/ProServicios';
import { ProServicios1 } from '../page/Servicios/ProServicios/ProServicios1';
import { ProCatalogo1 } from '../page/Catalogo/ProCatalogo/ProCatalogo1';
import { ProCatalogo2 } from '../page/Catalogo/ProCatalogo/ProCatalogo2';
import { ProCatalogo3 } from '../page/Catalogo/ProCatalogo/ProCatalogo3';
import { Reservas } from '../Reservas/Reservas';
// Corrige la ruta de importación del componente Administrador
import{AdministradorProductos} from'../Administrador/AdministradorProductos';
import { Folio } from '../page/Metodopago/Folio';

export function Rutas() {
  const Layouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  }
//hola
  return (
    <Routes>
      <Route path="/" element={Layouts(Layout, Home)} />
      <Route path="/Iniciosesion" element={Layouts(Layout, Iniciosesion)} />
      <Route path="/Registro" element={Layouts(Layout, Registro)} />
      <Route path="/Catalogo" element={Layouts(Layout, Catalogo)} />
      <Route path="/Metodopago" element={Layouts(Layout, MetodoPago)} />
      <Route path="/Servicios" element={Layouts(Layout, Servicios)} />
      <Route path="/ProServicios" element={Layouts(Layout, ProServicios)} />
      <Route path="/ProServicios1" element={Layouts(Layout, ProServicios1)} />
      <Route path="/ProCatalogo1" element={Layouts(Layout, ProCatalogo1)} />
      <Route path="/ProCatalogo2" element={Layouts(Layout, ProCatalogo2)} />
      <Route path="/ProCatalogo3" element={Layouts(Layout, ProCatalogo3)} />
      <Route path="/Reservas" element={Layouts(Layout, Reservas)} />
      <Route path="/AdministradorProductos" element={Layouts(Layout, AdministradorProductos)} />
      <Route path="/Folio" element={Layouts(Layout, Folio)} />
    </Routes>
  );
}
