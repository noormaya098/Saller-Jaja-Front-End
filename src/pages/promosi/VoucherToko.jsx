import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Button, Input, Modal, Select, Tabs } from 'antd';
import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid';
import Semua from './Tabs/Semua';
import { useNavigate } from 'react-router-dom';

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
    label: 'Aktif',
    children: <Semua status="Aktif" />,
  },
  {
    key: '3',
    label: 'Tidak Aktif',
    children: <Semua status="Tidak Aktif" />,
  },
  
];


function VoucherToko() {
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

  const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/dashboard/promosi/daftarr-promosi/tambah-promosi');
      }

  return (
      <div className="mt-12 mb-8 ">
        <div className='w-full flex '>
          <div className='w-1/2'>
              <h1 className='text-2xl'>
                  Voucher Toko
              </h1>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
              <Button onClick={handleAdd} className='bg-[#43d39e] text-white text-lg h-12'>
                <PlusIcon className='h-6 w-6 ' /> Buat Voucher 
              </Button>
          </div> 
      </div>
      <br />

      <>
        <div className='mt-10'>
        <Card>
          <CardHeader 
                variant="gradient" 
                className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
            >
                <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                    Daftar Voucher
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
      </>
      </div>
  )
}

export default VoucherToko
