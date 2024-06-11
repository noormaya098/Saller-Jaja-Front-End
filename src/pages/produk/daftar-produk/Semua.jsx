import React, { useState } from 'react';
import Gambar1 from '../../../assets/pesanan/produkTesting2.png';
import Gambar2 from '../../../assets/dashboard/MobilMini.png';
import { Card, CardBody } from '@material-tailwind/react';

import {
    FunnelIcon,
    NewspaperIcon,
    ChatBubbleBottomCenterIcon,
    CursorArrowRippleIcon,
    PrinterIcon,
    ChevronDownIcon,
    PlusIcon,
    ChartBarIcon,
    ChatBubbleLeftIcon,
    ChatBubbleLeftRightIcon,
    InformationCircleIcon,
    PencilIcon,
    InboxArrowDownIcon,
    TrashIcon
} from "@heroicons/react/24/solid";
import { Button, Dropdown, Input, Menu, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const orders = [
    {
        invoice: "INV-202406047095",
        date: "04 Jun 2024 14:48:14",
        status: "Live",
        color: "#ffbe0b",
        sku: '1212211221',
        kategori: 'Art Shop',
        harga: '5.000',
        stok: "100",
        
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
        status: "Live",
        color: "#ffbe0b",
        sku: 'INVZNX',
        kategori: 'Art Shop',
        harga: '10.000',
        stok: "100",
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
   
  
];

function Semua({ status }) {
    const filteredOrders = status ? orders.filter(order => order.status === status) : orders;
    const navigate = useNavigate();
          
    const handleDetail = () => {
      navigate('/dashboard/produk/daftar-produk/edit-produk');
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Anda tidak akan dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus saja!',
            cancelButtonText: 'Batalkan'
        }).then((result) => {
            if (result.isConfirmed) {
                // Hapus item di sini
                Swal.fire(
                    'Dihapus!',
                    'Item berhasil dihapus.',
                    'success'
                );
            }
        });
    };

    const menu = (
        <Menu>
          <Menu.Item key="1">
            <a href="https://api.whatsapp.com/send?text=YourMessageHere" target="_blank" rel="noopener noreferrer">
               <div className='flex justify-center items-center space-x-2'>
                 <ChatBubbleLeftRightIcon className="w-4 h-4"/> 
                 <div>
                    Share on WhatsApp
                 </div>
               </div>
            </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="https://www.facebook.com/sharer/sharer.php?u=YourURLHere" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-center items-center space-x-2'>
                 <ChatBubbleLeftIcon className="w-4 h-4"/> 
                 <div>
                    Share on Facebook
                 </div>
               </div>
            </a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=YourURLHere" target="_blank" rel="noopener noreferrer">
            <div className='flex justify-center items-center space-x-2'>
                 <InformationCircleIcon className="w-4 h-4"/> 
                 <div>
                    Share on LinkedIn
                 </div>
               </div> 
            </a>
          </Menu.Item>
          <Menu.Item key="4">
                <button onClick={handleDetail}>
                    <div className='flex justify-center items-center space-x-2'>
                        <PencilIcon className="w-4 h-4"/> 
                        <div>
                            Edit
                        </div>
                    </div>
                </button>
          </Menu.Item>
          <Menu.Item key="5">
            <button> 
                    <div className='flex justify-center items-center space-x-2'>
                        <InboxArrowDownIcon className="w-4 h-4"/> 
                        <div>
                            Arsipkan 
                        </div>
                    </div>
                </button>
          </Menu.Item>
          <Menu.Item key="6">
                <button onClick={handleDelete}> 
                    <div className='flex justify-center items-center space-x-2'>
                        <TrashIcon className="w-4 h-4"/> 
                        <div>
                            Hapus 
                        </div>
                    </div>
                </button>
          </Menu.Item>
        </Menu>
      );

      
      
    return (
        <>
            <div>
                <div className='w-full '>
                    <div className='w-full flex justify-end mt-5'>
                        <div>
                            Search : <Input placeholder='Search' className='h-10' />
                        </div>
                    </div>
                </div>
            </div>
            <>
            <div className="mb-4 w-full mt-4 overflow-x-scroll">
                {filteredOrders.length === 0 ? (
                    <div className="text-center text-gray-500 mt-8">
                        <Card className='border border-solid mb-5'>
                            <CardBody>
                                <h1 className='text-2xl'>Belum Ada Data</h1>
                            </CardBody>
                        </Card>
                    </div>
                ) : (
                    <div className='mb-5'>
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2">No.</th>
                                    <th className="border px-4 py-2">Nama Produk</th>
                                    <th className="border px-4 py-2">Harga</th>
                                    <th className="border px-4 py-2">Stok</th>
                                    <th className="border px-4 py-2">Status</th>
                                    <th className="border px-4 py-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order, orderIndex) => (
                                    order.items.map((item, itemIndex) => (
                                        <tr key={`${orderIndex}-${itemIndex}`}>
                                            <td className=" px-4 py-2 text-center">{orderIndex + 1}</td>
                                            <td className=" px-4 py-2">
                                                <div className=' mb-1 w-[20rem]'> 
                                                    <div className='flex space-x-5'>
                                                        <div className='flex items-center'>
                                                            <img src={item.images} alt={item.productName} className='w-16 h-10' />
                                                        </div>
                                                        <div >
                                                            <div className='text-[#7db0c9] font-bold text-base '>
                                                                {item.productName}
                                                            </div>
                                                            <div className='mt-2'>
                                                                <Tag color='yellow'>
                                                                    SKU : {order.sku}
                                                                </Tag>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <Tag color='green'>
                                                                    Kategori : {order.kategori}
                                                                </Tag>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" px-4 py-2">
                                                <div className='text-center text-base'>Rp. {order.harga}</div>
                                            </td>
                                            <td className=" text-center px-4 py-2 text-base">
                                                <div>{order.stok}</div>
                                            </td>
                                            <td className=" px-4 py-2">
                                                <div className='text-2xl text-center font-semibold '>
                                                    <Tag color='green'>
                                                        {order.status}
                                                    </Tag>
                                                </div>
                                            </td>

                                            {/* Dropdown */}
                                            <td className="  px-2 py-2">
                                                <div className='flex space-x-2 text-center justify-center'>
                                                    <div>
                                                    <Dropdown overlay={menu} trigger={['click']}>
                                                        <Button className="text-center px-2 py-2 h-10 border border-[#6fcbf2] text-[#6fcbf2]">
                                                            Atur <ChevronDownIcon className="w-4 h-4 text-[#6fcbf2] "/>
                                                        </Button>
                                                    </Dropdown>
                                                    </div>
                                                    <div>
                                                    <Button className="text-center px-2 py-2 h-10 bg-blue-500 text-white">
                                                        <PlusIcon className="w-4 h-4"/> Feed 
                                                    </Button>
                                                </div>
                                                </div>
                                               
                                            </td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
        </>
    );
}

export default Semua;
