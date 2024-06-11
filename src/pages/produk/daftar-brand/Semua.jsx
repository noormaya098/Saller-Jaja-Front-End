import { Button, DatePicker, Input, Modal, Select, Steps, Tag } from 'antd'
import React, { useState } from 'react'
import {
    FunnelIcon,
    NewspaperIcon,
    ChatBubbleBottomCenterIcon,
    CursorArrowRippleIcon,
    PrinterIcon,
    PencilSquareIcon,
    TrashIcon
  } from "@heroicons/react/24/solid";
import Gambar1 from '../../../assets/pesanan/produkTesting2.png'
import Gambar2 from '../../../assets/dashboard/MobilMini.png'
import { Card, CardBody } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const orders = [
    {
        invoice: "INV-202406047095",
        date: "2021-07-08 00:49:17",
        status: "Disetujui",
        brand: 'MobileZen',
        kategori: 'Tidak ada',
        sub_kategori: 'Tidak ada',
    },
    {
        invoice: "INV-202406047095",
        date: "2021-07-08 00:49:17",
        status: "Menunggu",
        brand: 'MobileZen',
        kategori: 'Tidak ada',
        sub_kategori: 'Tidak ada',
    },
    
];


const { Option } = Select;

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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  return (
    <div>
        <br />
        <div className='w-full flex space-x-5'>
            <div className='w-full flex justify-end items-end'>
                <div className='w-1/4'>
                <Input placeholder='Search' className='h-10' />
                </div>
            </div>  
        </div>

        {/* Data */}
        <>
        <div className="mb-4 w-full mt-4 ">
            {filteredOrders.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
                <Card className="border border-solid mb-5">
                <CardBody>
                    <h1 className="text-2xl">Belum Ada Data</h1>
                </CardBody>
                </Card>
            </div>
            ) : (
            <table className="w-full table-auto border-collapse overflow-auto">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-lg">No.</th>
                    <th className="border px-4 py-2 text-lg">Brand</th>
                    <th className="border px-4 py-2 text-lg">Kategori</th>
                    <th className="border px-4 py-2 text-lg">Sub Kategori</th>
                    <th className="border px-4 py-2 text-lg">Status</th>
                    <th className="border px-4 py-2 text-lg">Aksi</th>
                </tr>
                </thead>
                <tbody>
                {filteredOrders.map((order, index) => (
                    <tr key={index}>
                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                    <td className="border px-4 py-2">
                        <div>
                            <div className='text-lg font-bold'>
                                {order.brand}
                            </div>
                            <p>
                                {order.date}
                            </p>
                        </div>
                    </td>
                    <td className="border px-4 py-2 text-center">{order.kategori}</td>
                    <td className="border px-4 py-2 text-center">{order.sub_kategori}</td>
                    <td className="border px-4 py-2 text-center">
                        <Tag color={order.status === "Disetujui" ? 'green' : 'yellow'}>
                            {order.status}
                        </Tag>
                    </td>
                    <td className="border px-4 py-2 text-center">
                        <div className='w-full flex space-x-2 justify-center items-center'>
                            <Button onClick={showModal} className='bg-blue-500 text-white'>
                                <PencilSquareIcon className='w-4 h-4 '/>
                            </Button>
                            <Button onClick={handleDelete} className='bg-red-500 text-white'>
                                <TrashIcon className='w-4 h-4 '/>
                            </Button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        </>

        
     {/* Modal Edit Brand */}
     <Modal 
        centered
        width={800}
        title={
          [
            <div className='text-2xl font-bold'>
              Edit dan Detail Brand 
            </div>
          ]
        }
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        className='p-6'
        footer={false}
      >
         <div className='w-full flex mt-8'>
            <div className='w-1/3 text-lg'>
                <label className='text-xl'>Nama Brand <span className='text-red-500'>*</span></label>
              </div>
              <div className='w-full'>
                  <Input placeholder='Masukkan Nama Brand' className='h-10'/>
              </div>
        </div>
        <br />
        <div className='w-full flex '>
          <div className='w-1/3 text-lg'>
            <label className='text-xl'>Kategori</label>
          </div>
          <div className='w-full'>
              <Select
                  showSearch
                  className="w-full  h-10"
                  placeholder="Pilih kategori"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                    filterSort={(optionA, optionB) =>
                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                    >
                      <Option value="kategori1">Kategori 1</Option>
                      <Option value="kategori2">Kategori 2</Option>
                      <Option value="kategori3">Kategori 3</Option>
              </Select>
             
          </div>
         
        </div>
        <div className='w-full flex mt-8'>
          <div className='w-1/3 text-lg'>
            <label className='text-xl'>Sub Kategori</label>
          </div>
          <div className='w-full'>
              <Select
                  showSearch
                  className="w-full  h-10"
                  placeholder="Pilih kategori"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                    filterSort={(optionA, optionB) =>
                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                    >
                      <Option value="kategori1">Kategori 1</Option>
                      <Option value="kategori2">Kategori 2</Option>
                      <Option value="kategori3">Kategori 3</Option>
              </Select>
             
          </div>
         
        </div>
        <br />
       
        <div className='w-full flex space-x-2 justify-end'>
          <Button onClick={handleCancel} className='bg-red-400 text-white text-lg h-10'>
            Batal
          </Button>
          <Button className='bg-blue-400 text-white text-lg h-10'>
            Tambah
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Semua
