import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import DetailPesanan from './pages/penjualan/DetailPesanan';
import EditProduk from './pages/produk/daftar-produk/EditProduk';
import DetailVoucher from './pages/promosi/DetailVoucher';
import TambahVoucher from './pages/promosi/TambahVoucher';
import DetailRating from './pages/riview/rating-produk/DetailRating';
import SaldoToko from './pages/dompetku/saldo-toko/SaldoToko';
import { SignIn, SignUp } from './pages/auth';
import ForgotPassword from './pages/auth/forgot-password';


function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route path='pejualan/pesanan/detail-pesanan' element={<DetailPesanan/>}/>
        <Route path='produk/daftar-produk/edit-produk' element={<EditProduk/>}/>
        <Route path='promosi/DaftarPromosi/EditDetailPromosi' element={<DetailVoucher/>}/>
        <Route path='promosi/daftarr-promosi/tambah-promosi' element={<TambahVoucher/>}/>
        <Route path='review/rating-produk/DetailRating' element={<DetailRating/>}/>
        <Route path='dompetku/saldo-toko' element={<SaldoToko />} />
      </Route>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/forgort-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
