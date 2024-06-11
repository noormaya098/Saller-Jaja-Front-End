import { Button, DatePicker, Input, Modal, Steps, Tag } from 'antd'
import React, { useState } from 'react'
import {
    FunnelIcon,
    NewspaperIcon,
    ChatBubbleBottomCenterIcon,
    CursorArrowRippleIcon,
    PrinterIcon
  } from "@heroicons/react/24/solid";
import Gambar1 from '../../../assets/pesanan/produkTesting2.png'
import Gambar2 from '../../../assets/dashboard/MobilMini.png'
import { Card, CardBody } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const { Step } = Steps;

  const orders = [
    {
        invoice: "INV-202406047095",
        date: "04 Jun 2024 14:48:14",
        status: "Pesanan Baru",
        color: "#ffbe0b",
        items: [
            {
                images: Gambar1, // Path to the image
                productName: "Anker Soundcore Nano Speaker Bluetooth Original",
                quantity: 1,
                price: 5000,
                notes: "Tidak Ada Catatan",
                address: "JL PENGADEGAN UTARA NO 20A PANCORAN, JAKARTA SELATAN, Kel. Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Prov. D.K.I Jakarta 12770",
                courier: "SiCepat Express",
                courierPrice: 11500,
                totalPrice: 5000
            }
        ]
    },
    {
        invoice: "INV-202406047095",
        date: "04 Jun 2024 14:48:14",
        status: "Pesanan Belum Dibayar",
        color: "#ffbe0b",
        items: [
            {
                images: Gambar1, // Path to the image
                productName: "Anker Soundcore Nano Speaker Bluetooth Original",
                quantity: 1,
                price: 5000,
                notes: "Tidak Ada Catatan",
                address: "JL PENGADEGAN UTARA NO 20A PANCORAN, JAKARTA SELATAN, Kel. Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Prov. D.K.I Jakarta 12770",
                courier: "SiCepat Express",
                courierPrice: 11500,
                totalPrice: 5000
            }
        ]
    },
    {
        invoice: "INV-202406047093",
        date: "04 Jun 2024 14:07:00",
        status: "Pesanan Selesai",
        color: "#ffbe0b",
        items: [
            {
                images: Gambar2, // Path to the image
                productName: "Mobil Mini",
                quantity: 1,
                price: 10000,
                notes: "Tidak Ada Catatan",
                address: "Jl Pengadegan Utara no 20D, Kel. Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Prov. D.K.I Jakarta 12770",
                courier: "SiCepat Express",
                courierPrice: 23000,
                totalPrice: 0,
                trackingNumber: "004308850708"
            }
        ]
    },
    {
        invoice: "INV-202406016899",
        date: "01 Jun 2024 13:15:06",
        status: "Pesanan Dibatalkan",
        statusPembatalan: 'Pembatalan Otomatis',
        color: "#ffbe0b",
        items: [
            {
                images: Gambar2, // Path to the image
                productName: "Mobil Mini",
                quantity: 1,
                price: 2000,
                notes: "Tidak Ada Catatan",
                address: "Jl Pengadegan Utara no 20D, Kel. Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Prov. D.K.I Jakarta 12770",
                courier: "SiCepat Express",
                courierPrice: 23000,
                totalPrice: 0,
                trackingNumber: "004308850708"
            },
            {
                images: Gambar2, // Path to the image
                productName: "Mobil Mini",
                quantity: 1,
                price: 2000,
                notes: "Tidak Ada Catatan",
                address: "Jl Pengadegan Utara no 20D, Kel. Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Prov. D.K.I Jakarta 12770",
                courier: "SiCepat Express",
                courierPrice: 23000,
                totalPrice: 0,
                trackingNumber: "004308850708"
            }
        ]
    }
];


function Semua({ status }) {
    const filteredOrders = status ? orders.filter(order => order.status === status) : orders;
    const navigate = useNavigate();
          
    const handleDetail = () => {
      navigate('/dashboard/pejualan/pesanan/detail-pesanan');
    }

    // Lacak Pesanan 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // Implementasi logika untuk melacak pesanan dengan nomor pesanan
        console.log('Lacak pesanan dengan nomor:', orderNumber);
        // Logika untuk update step
        setCurrentStep(1);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOrderNumberChange = (e) => {
        setOrderNumber(e.target.value);
    };

  return (
    <div>
        <br />
        <div className='w-full flex space-x-5'>
            <div className='w-1/2 flex space-x-2'>
               <div className='w-full'>
                <DatePicker className='w-full h-10'/>
               </div>
               <div className='w-1/2'>
                    <Button className='bg-blue-500 text-white text-base h-10 flex items-center'>
                        <FunnelIcon className="w-4 h-4 " />
                        Filter
                    </Button>
               </div>
            </div>
            <div className='w-1/2 flex justify-end items-end'>
                <div className='w-1/2'>
                <Input placeholder='Search' className='h-10' />
                </div>
            </div>  
        </div>


        {/* Data */}
        <>
        <div className="mb-4 w-full mt-4 overflow-x-scroll">
            {filteredOrders.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                <Card className='border border-solid mb-5'>
                    <CardBody>
                        <h1 className='text-2xl'>
                            Belum Ada Data 
                        </h1>
                    </CardBody>
                </Card></div>
            ) : (
                filteredOrders.map((order, index) => (
                <div key={index} className='mb-5'>
                    <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-start" colSpan={5}>
                            <div className='flex space-x-4'>
                            <div className='text-[#7db0c9] font-bold text-lg '>
                                {order.invoice}
                            </div>
                            <div className='text-[#798181] text-sm text-center flex items-center'>
                                {order.date}
                            </div>
                            <div className='flex items-center'>
                                <Tag color={order.color}>
                                {order.status}
                                </Tag>
                                {order.statusPembatalan && (
                                <Tag color='gray'>
                                    <p>{order.statusPembatalan}</p>
                                </Tag>
                                )}
                            </div>
                            </div>
                        </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2">Info Produk</th>
                        <th className="border px-4 py-2">Alamat</th>
                        <th className="border px-4 py-2">Kurir</th>
                        <th className="border px-4 py-2">Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.slice(0, 1).map((item, itemIndex) => (
                        <tr key={itemIndex}>
                            <td className="border px-4 py-2">
                            <img src={item.images} alt={item.productName} className='w-10 h-10' />
                            </td>
                            <td className="border px-4 py-2">
                            <div className='text-[#7db0c9] font-bold text-base mb-1 w-[20rem]'>{item.productName}</div>
                            <div className='mb-1 text-base'>{item.quantity} x <span className='text-red-500 '>Rp {item.price}</span></div>
                            <div className='mb-1 text-base'><i className='text-[#798181]'>{item.notes}</i></div>
                            </td>
                            <td className="border px-4 py-2">
                            <div className='w-[25rem] text-base'>{item.address}</div>
                            {item.trackingNumber && (
                                <div className='w-[25rem] text-base mt-4'>
                                Nomor Resi :
                                <p>{item.trackingNumber}</p>
                                </div>
                            )}
                            </td>
                            <td className="border px-4 py-2 text-base">
                            <div>{item.courier}</div>
                            <div className='mb-4'>Rp {item.courierPrice}</div>
                            <div className='mb-2'>
                                <Tag className="bg-gray-200 px-2 py-1 rounded">Belum Dicetak</Tag>
                            </div>
                            </td>
                            <td className="border px-4 py-2">
                            <div className='text-2xl font-semibold text-[#ffbe0b]'>Rp {item.totalPrice}</div>
                            </td>
                        </tr>
                        ))}
                        {order.items.length > 1 && (
                        <tr>
                            <td colSpan={5} className="border px-4 py-2 text-center">
                            <div className='text-[#7db0c9] font-bold text-base mb-1 w-[20rem] cursor-pointer'>
                                Lihat {order.items.length - 1} produk lainnya
                            </div>
                            </td>
                        </tr>
                        )}
                        <tr>
                        <td colSpan={5} className='border px-4 py-2'>
                            <div className='space-x-4'>
                            <Button className='h-10 border border-blue-800'onClick={() => handleDetail()}>
                                <NewspaperIcon className="w-4 h-4 text-blue-800" />
                                Rincian Pesanan 
                            </Button>
                            {order.status === "Pesanan Selesai" && (
                                <>
                                <Button className='h-10 border border-[#0b0fff]'>
                                    <PrinterIcon className="w-4 h-4 text-[#0b0fff]" />
                                    Cetak Label
                                </Button>
                                <Button onClick={showModal} className='h-10 border border-[#b60bff] '>
                                    <CursorArrowRippleIcon className="w-4 h-4 text-[#b60bff]" />
                                    Lacak Pesanan 
                                </Button>
                                </>
                            )}
                            <Button className='h-10 border border-[#ffbe0b]'>
                                <ChatBubbleBottomCenterIcon className="w-4 h-4 text-[#ffbe0b]" />
                                Pesan
                            </Button>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                ))
            )}
        </div>
        </>

        {/* Lacak Pesanan */}
        <>
        <Modal 
                width={800}
                title={
                    [
                        <div className='flex justify-center text-xl font-bolc'>
                            Lacak Pesanan
                        </div>
                    ]
                } 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                okText="Lacak"
                cancelText="Batal"
                footer={false}
            >
                <div className="mt-8">
                <Steps current={currentStep} progressDot>
                    <Step title="Pesanan Dibuat" description="2024-06-04 14:48:14" />
                    <Step title="Pesanan Dibayar" description="Pembayaran Berhasil" />
                    <Step title="Pesanan Dikirim" description="Pesanan Anda sedang dikirim." />
                    <Step title="Pesanan Diterima" description="Pesanan Anda diterima oleh tetangga" />
                </Steps>
                <br />
                <div className='text-lg font-bold'>
                    Tracking Pesanan
                   
                </div>
                <br />
                <div>
                    <Button className='bg-blue-700 text-white px-5 h-10'>
                        Track
                    </Button>
                </div>
            </div>
            </Modal>
        </>
    </div>

    
  )
}

export default Semua
