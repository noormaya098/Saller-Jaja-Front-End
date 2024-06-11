import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Button, Input, Modal, Select, Tabs } from 'antd';
import React, { useState } from 'react'
import SemuaVoucher from './Tabs/SemuaVoucher';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Semua',
      children: <SemuaVoucher />,
    },
    {
      key: '2',
      label: 'Aktif',
      children: <SemuaVoucher status="Aktif" />,
    },
    {
      key: '3',
      label: 'Tidak Aktif',
      children: <SemuaVoucher status="Tidak Aktif" />,
    },
    
  ];

function PengaturanVoucher() {
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
    <div>
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

export default PengaturanVoucher
