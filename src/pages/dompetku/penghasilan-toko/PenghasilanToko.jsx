import { Tabs } from 'antd';
import React from 'react'
import TabPenghasilanToko from './TabPenghasilanToko';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import MaskedNumber from './MaskedNumber';


const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Semua',
    children: <TabPenghasilanToko />,
  },
  {
    key: '2',
    label: 'Pending',
    children: <TabPenghasilanToko status="Pending" />,
  },
  {
    key: '3',
    label: 'Done',
    children: <TabPenghasilanToko status="Done" />,
  },
  {
    key: '4',
    label: 'Refund',
    children: <TabPenghasilanToko status="Refund" />,
  },
 
];

function PenghasilanToko() {
 
  return (
    <div className='mt-14'>
      <Card>
          <CardHeader 
                variant="gradient" 
                className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
            >
                <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                    Penghasilan Toko
                </Typography>
            </CardHeader>
            <CardBody>
              <h1 className='text-xl font-semibold'>
                  Informasi Penghasilan
              </h1>
              <br />
              <hr />
              <br />

              <div className='w-full flex space-x-5'>
                <div className='w-1/3'>
                    <h1 className='text-2xl font-semibold'>
                      Pending
                    </h1>
                    <p className='text-sm mt-4'>
                      Total
                    </p>
                    <p className='text-3xl mt-4'>
                      Rp1.204.693
                    </p>
                </div>
                <div className='w-full  border-s'>
                    <div className='pl-5'>
                        <h1 h1 className='text-2xl font-semibold'>
                          Done
                        </h1>
                        <div className='w-full flex space-x-4 '>
                          <div className='w-1/3 '>
                              <p className='text-sm mt-4'>
                                Total
                              </p>
                              <p className='text-3xl mt-4'>
                                Rp1.754.233
                              </p>
                          </div>
                          
                          <div className='w-1/3 '>
                              <p className='text-sm mt-4'>
                                Bulan ini
                              </p>
                              <p className='text-3xl mt-4'>
                                Rp1.228.002
                              </p>
                          </div>

                          <div className='w-1/3 '>
                              <p className='text-sm mt-4'>
                                Grand Total
                              </p>
                              <p className='text-3xl mt-4'>
                                Rp3.891.125
                              </p>
                          </div>
                          
                        </div>
                    </div>
                </div>

              </div>


              {/* Rekening saya dan Button Saldo Toko */}
              <br />
              <div className='w-full flex space-x-5'>
                <div className='w-1/3'>
                    Rekening Bank Saya : 
                    <span className='ml-2'>
                      <MaskedNumber number="1234 1587" />
                    </span>
                </div>
                {/* <div className='w-full'>
                  <div className='flex cursor-pointer group ' onClick={handleClick}>
                    <span className='hover:underline group-hover:text-[#64b0c9]'>Saldo Toko</span>
                    <div className='flex items-center justify-center ml-2'>
                      <ChevronRightIcon className='w-5 h-5 text-[#64b0c9] font-bold group-hover:text-blue-500' />
                    </div>
                  </div>
                </div> */}

              </div>

            </CardBody>
        </Card>


        <br />
        <Card>
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
                      
                      tabBarStyle={{ marginBottom: '0' }}
                      renderTabBar={(props, DefaultTabBar) => (
                        <DefaultTabBar {...props} className="custom-tab-bar bg-[#f3f4f7] rounded-lg pt-3 pb-3 pl-4 "  />
                      )}
                    />
          </CardBody>
        </Card>
             
    </div>
  )
}

export default PenghasilanToko
