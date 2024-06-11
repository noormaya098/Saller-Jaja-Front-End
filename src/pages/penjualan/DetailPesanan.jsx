import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { Button, Tag } from 'antd';
import React from 'react'
import LogoJaja from  '../../assets/LogoJaja.png'
import Gambar1 from "../../assets/dashboard/BolaTesting.png"
import Gambar2 from "../../assets/dashboard/MobilMini.png"
import { PrinterIcon } from '@heroicons/react/24/solid';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const produk = [
    {
      namaProduk: 'Mobil Mini',
      images: Gambar1,
      harga_satuan : '10.000',
      jumlah: '1',
      subtotal: '10.000'
    },
    {
        namaProduk: 'Mobil Mini',
        images: Gambar2,
        harga_satuan : '10.000',
        jumlah: '4',
        subtotal: '40.000'
    },
    
  ];

function DetailPesanan() {
    const handlePrint = () => {
        window.print();
    };
  return (
    <div className="mt-12 mb-8">
    <Card>
        <CardHeader 
            variant="gradient" 
            className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
        >
            <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                Invoice
            </Typography>
        </CardHeader>
        <CardBody>
            <Tag color='#43d39e' className='text-sm font-semibold'>
                Telah Dibayar
            </Tag>
            
            {/*Nomor Invoice dan Tanggal Transaksi*/}
            <div className='w-full sm:flex'>
                <div className='sm:w-1/2 w-full mt-6'>
                    <div className='text-lg w-full flex'>
                        <div className=' sm:w-1/4 w-1/2'>
                            Nomor Invoice 
                        </div>
                        <div className=' sm:w-3.5 w-1/6'>
                            : 
                        </div>
                        <div className=' sm:w-1/4 w-full'>
                            INV-202406047093
                        </div>
                    </div>
                    <div className='text-lg flex'>
                        <div className=' sm:w-1/4 w-1/2'>
                            Tanggal Transaksi
                        </div>
                        <div className=' sm:w-3.5 w-1/6'>
                            : 
                        </div>
                        <div className=' sm:w-1/4 w-full'>
                            20 May 2024
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <img src={LogoJaja} alt="" className='w-48 h-24' />
                </div>
            </div>

            <div className='w-full flex sm:justify-end justify-start'>
               <Tag color='#ffbe0b'>
                Pesanan Selesai
               </Tag>
            </div>
            <br />

            {/* Tujuan dan penerima */}
            <div className='w-full flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0'>
                <div className='w-full sm:w-1/4 text-justify'>
                    <div className='font-semibold'>
                        Tujuan Pengiriman :
                    </div>
                    <br />
                    <div>
                        Jl Pengadegan Utara no 20D, Kel. Pengadegan, 
                        Kec. Pancoran, Kota Jakarta Selatan, 
                        Prov. D.K.I Jakarta 
                        12770
                    </div>
                </div>
                <div className='w-full sm:w-full'>
                    <div className='font-semibold'>
                        Penerima :
                    </div>
                    <br />
                    <div className='font-bold'>
                        TASYA
                    </div>
                    <p>
                        085771942063
                    </p>
                </div>
            </div>

            <div className='w-1/2 font-bold mt-2'>
                <div className='text-xl w-full flex'>
                    <div className=' w-[7rem]'>
                        Pengirim 
                    </div>
                    <div className=' w-[2rem]'>
                        : 
                    </div>
                    <div className=' w-1/4'>
                        ZATATECH
                    </div>
                </div>
            </div>

            {/* Tabel Detail*/}
            <br />
            <div className="mb-4 w-full mt-4">
                <div className='overflow-auto'>
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th className="border-t border-b px-4 py-4">No.</th>
                                <th className="border-t border-b px-4 py-2 text-start">Produk</th>
                                <th className="border-t border-b px-4 py-2">Harga Satuan</th>
                                <th className="border-t border-b px-4 py-2">Jumlah</th>
                                <th className="border-t border-b px-4 py-2">Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produk.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2">
                                            <div className='flex space-x-3 items-center'>
                                                <img src={item.images} alt="" className='w-10 h-10' /> 
                                                <div>{item.namaProduk}</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-center">Rp {item.harga_satuan}</td>
                                        <td className="px-4 py-2 text-center">{item.jumlah}</td>
                                        <td className="px-4 py-2 text-center">Rp {item.subtotal}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            {/* Rincian yang bawah */}
            <div className='w-full h-full'>
                <div className='w-full flex h-10 justify-end'>
                    <div className='text-lg w-full md:w-1/2 flex justify-end'>
                        <div className='w-full md:w-[12rem] pl-3 text-start'>
                            Total Harga
                        </div>
                        <div className='w-3.5 text-center'>
                            :
                        </div>
                        <div className='w-full md:w-1/5 text-end font-bold'>
                            Rp. 50,000
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <div className='w-full'>
                        <div className='text-lg w-full flex'>
                            <div className='w-1/4'>
                                Pesan Customer
                            </div>
                            <div className='w-3.5'>
                                :
                            </div>
                        </div>
                        <div>
                            <i>[Tidak Ada Pesan dari Pembeli].</i>
                        </div>
                        <div className='text-lg w-full flex'>
                            <div className='w-1/4'>
                                Catatan Package
                            </div>
                            <div className='w-3.5'>
                                :
                            </div>
                        </div>
                        <div>
                            <i>[Tidak Ada Pesan dari Pembeli].</i>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full flex flex-col md:flex-row'>
                        <div className='w-1/2 h-10'></div>
                        <div className='w-full md:w-1/2 h-10'>
                            <div className='text-lg w-full flex justify-end'>
                                <div className='w-1/2 text-start'>
                                    Pengiriman
                                    <p className='text-sm'>
                                        SiCepat Express
                                    </p>
                                </div>
                                <div className='w-[4rem] text-center'>
                                    :
                                </div>
                                <div className='w-1/3 text-end font-bold'>
                                    <div className='mt-5'>
                                        Rp. 23,000
                                    </div>
                                </div>
                            </div>
                            <div className='text-lg w-full flex justify-end'>
                                <div className='w-1/2 text-start'>
                                    Potongan Jaja.id
                                </div>
                                <div className='w-[4rem] text-center'>
                                    :
                                </div>
                                <div className='w-1/3 text-end text-red-500'>
                                    - (Rp20.000)
                                </div>
                            </div>
                            <div className='text-lg w-full flex justify-end'>
                                <div className='w-1/2 text-start'>
                                    Koin Digunakan
                                </div>
                                <div className='w-[4rem] text-center'>
                                    :
                                </div>
                                <div className='w-1/3 text-end text-red-500'>
                                    - (13.000)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-4'/>
            <div className='w-full h-full mt-4'>
                <div className='w-full flex h-10 justify-end'>
                    <div className='text-lg w-full md:w-1/2 flex justify-end'>
                        <div className='w-full font-bold md:w-[12rem] pl-3 text-start'>
                            GRAND TOTAL
                        </div>
                        <div className='w-3.5 text-center'>
                            :
                        </div>
                        <div className='w-full text-xl md:w-1/5 text-end font-bold'>
                            Rp. 17,000
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='w-full justify-end flex'>
                <Button className='h-10 border border-[#0b0fff]' onClick={handlePrint}>
                    <PrinterIcon className="w-4 h-4 text-[#0b0fff] " />
                    <div className='font-bold'>
                        Print
                    </div>
                </Button>
            </div>
        </CardBody>
    </Card>
</div>
  )
}

export default DetailPesanan
