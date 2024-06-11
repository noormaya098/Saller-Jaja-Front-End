import React from 'react'
import Gambar1 from "../../../../assets/dompetku/penghasilandaripesanan.jpg"
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { Button, Input, Tag } from 'antd';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const daftarReportProduk = [
  {
      produk: 'Bola Testing',
      
      invoice: '#INV-202406047093',
      tanggal: '2024-06-04',
      tipe: 'Penghasilan dari Pesanan',
      status: 'Selesai',
      jumlah: '13.000',
      name: 'jaja tet'

  },
  {
      produk: 'Bola Testing',
      
      invoice: '#INV-202406047093',
      tanggal: '2024-06-04',
      tipe: 'Penghasilan dari Pesanan',
      status: 'Selesai',
      jumlah: '13.000',
      name: 'jaja tet'

  },
  {
      produk: 'Bola Testing',
      
      invoice: '#INV-202406047093',
      tanggal: '2024-06-04',
      tipe: 'Penghasilan dari Pesanan',
      status: 'Selesai',
      jumlah: '13.000',
      name: 'jaja tet'

  },
]

function PenghasilanDariPesanan() {
  return (
    <div className="mt-5 mb-8 ">
    <Card>
        <CardBody>
              <>
                  <div>
                      <div className='w-full '>
                          <div className='w-full flex justify-end '>
                              <div>
                                  Search : <Input placeholder='Search' className='h-10' />
                              </div>
                          </div>
                      </div>
                  </div>
              </>
              <br />

              <div className='mb-5'>
              <table className="w-full table-auto border-collapse overflow-auto">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border text-center ">Tanggal</th>
                    <th className="border px-4 py-2">Tipe | Deskripsi</th>
                    <th className="border px-4 py-2">Jumlah</th>
                    <th className="border px-4 py-2 w-[20rem]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {daftarReportProduk.map((produks, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-100">
                      <td className="border px-4 py-10 text-center">{produks.tanggal}</td>
                      <td className="border px-4 py-10">
                          <div className='w-full flex space-x-7 justify-center'>
                              <div className='flex justify-center items-center'>
                                  <img src={Gambar1} className='w-14 h-14 rounded-md' alt="" />
                              </div>
                              <div className=' '>
                                  <p className='text-[#6c757d] font-bold text-xl '>
                                      {produks.tipe}
                                  </p>
                                  <p className='text-[#64b0c9] font-bold text-lg cursor-pointer '>
                                      {produks.invoice}
                                  </p>
                                  <p className='text-[#6c757d] text-sm'>
                                    {produks.name} | {produks.produk}
                                  </p>
                              </div>
                          </div>
                      </td>
                      <td className="border px-4 py-10">
                          <div className='flex justify-center'>
                              <div className='text-[#92dcba] text-xl'>
                                + Rp{produks.jumlah}
                              </div>
                          </div>
                      </td>
                     <td className='border px-4 py-10 text-center'>
                         <div className='text-lg'>
                          {produks.status}
                         </div>
                     </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


        </CardBody>
      </Card>
  </div>
  )
}

export default PenghasilanDariPesanan
