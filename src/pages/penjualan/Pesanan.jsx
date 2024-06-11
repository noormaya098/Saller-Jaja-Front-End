import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Tabs } from 'antd';
import React from 'react'
import Semua from './Tabs/Semua';

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
    label: 'Belum Dibayar',
    children: <Semua status="Pesanan Belum Dibayar" />,
  },
  {
    key: '3',
    label: 'Pesanan Baru',
    children: <Semua status="Pesanan Baru" />,
  },
  {
    key: '4',
    label: 'Siap Dikirim',
    children: <Semua status="Pesanan Siap" />,
  },
  {
    key: '5',
    label: 'Dikirimkan',
    children: <Semua status="Dikirim" />,
  },
  {
    key: '6',
    label: 'Selesai',
    children: <Semua status="Pesanan Selesai" />,
  },
  {
    key: '7',
    label: 'Dibatalkan',
    children: <Semua status="Pesanan Dibatalkan" />,
  },
  {
    key: '8',
    label: 'Pengembalian',
    children: <Semua status="Return" />,
  },
];

function Pesanan() {
  return (
    <div className="mt-12 mb-8 ">
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
  )
}

export default Pesanan
