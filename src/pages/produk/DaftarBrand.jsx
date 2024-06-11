import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Button, Input, Modal, Select, Tabs } from 'antd';
import React, { useState } from 'react'
import Semua from './daftar-brand/Semua';
import { PlusIcon } from '@heroicons/react/24/solid';

const { Option } = Select;

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Semua',
    children: <Semua />,
  },
  {
    key: '2',
    label: 'Menunggu',
    children: <Semua status="Menunggu" />,
  },
  {
    key: '3',
    label: 'Disetujui',
    children: <Semua status="Disetujui" />,
  },
  
];

function DaftarBrand() {
  // Modal Tambah brand 
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
    <div className="mt-12 mb-8 ">
      <div className='w-full flex '>
        <div className='w-1/2'>
            <h1 className='text-2xl'>
                Daftar Brand Toko
            </h1>
            <p>
                Brand akan ditampilkan dalam pilihan setelah disetujui
            </p>
        </div>
        <div className='w-1/2 flex justify-end items-center'>
            <Button onClick={showModal} className='bg-[#43d39e] text-white text-lg h-12'>
              <PlusIcon className='h-6 w-6 ' /> Usulkan Brand 
            </Button>
        </div>
            
      </div>
      <br />
   <div className='mt-10'>
      <Card>
        <CardHeader 
              variant="gradient" 
              className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
          >
              <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                  Daftar Pesanan
              </Typography>
          </CardHeader>
          <CardBody>
            
          <Tabs
            defaultActiveKey="1"
            items={items.map((item) => ({
              ...item,
              label: (
                <span className="tab-label text-lg font-bold">
                  {item.label}
                </span>
              ),
            }))}
            onChange={onChange}
            type="card"
            tabBarStyle={{ marginBottom: '0' }}
            renderTabBar={(props, DefaultTabBar) => (
              <DefaultTabBar {...props} className="custom-tab-bar" />
            )}
          />

          </CardBody>
      </Card>
   </div>
     

     {/* Modal Usulkan Brand */}
     <Modal 
        centered
        width={800}
        title={
          [
            <div className='text-2xl font-bold'>
              Usulkan Brand 
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
              <p className='text-xs text-gray-600'>
                Kosongkan jika kategori tidak ditemukan
              </p>
          </div>
         
        </div>
        <br />
        <div className='w-full flex '>
            <div className='w-1/3 text-lg'>
                <label className='text-xl'>Nama Brand <span className='text-red-500'>*</span></label>
              </div>
              <div className='w-full'>
                  <Input placeholder='Masukkan Nama Brand' className='h-10'/>
                  <p className='text-xs text-gray-600'>
                    Brand akan ditampilkan setelah disetujui
                  </p>
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

export default DaftarBrand
