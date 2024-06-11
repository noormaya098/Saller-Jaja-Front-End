import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { Tabs } from 'antd'
import React from 'react'
import Semua from './Semua';

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
    label: 'Konfirmasi',
    children: <Semua status="Konfirmasi" />,
  },
  {
    key: '3',
    label: 'Live',
    children: <Semua status="Live" />,
  },
  {
    key: '4',
    label: 'Habis',
    children: <Semua status="Habis" />,
  },
  {
    key: '5',
    label: 'Diarsipkan',
    children: <Semua status="Diarsipkan" />,
  },
 
  {
    key: '6',
    label: 'Ditolak',
    children: <Semua status="Ditolak" />,
  },
  {
    key: '7',
    label: 'Diblokir',
    children: <Semua status="Diblokir" />,
  },
 
];

function DaftarProduk() {
  
  return (
    <div className="mt-12 mb-8 ">
      <Card>
            <CardHeader 
                variant="gradient" 
                className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
            >
                <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                    Daftar Produk
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

export default DaftarProduk
