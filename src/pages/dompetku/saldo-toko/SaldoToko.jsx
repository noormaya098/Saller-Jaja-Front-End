import React from 'react'
import PenghasilanDariPesanan from './tab-saldo-toko/PenghasilanDariPesanan';
import PenarikanSaldo from './tab-saldo-toko/PenarikanSaldo';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Button, Tabs, Tag } from 'antd';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Penghasilan Dari Pesanan',
      children: <PenghasilanDariPesanan />,
    },
    {
      key: '2',
      label: 'Penarikan Saldo',
      children: <PenarikanSaldo/>,
    },
   
   
  ];
  

function SaldoToko() {
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
                    Saldo
                  </h1>
                  <p className='text-sm mt-4'>
                    Total
                  </p>
                  <p className='text-3xl mt-4'>
                    Rp1.629.233 
                    <span className='pl-8 '>
                        <Button className='h-10 text-lg bg-blue-500 text-white font-bold'>
                            Tarik Saldo
                        </Button>
                    </span>
                  </p>
              </div>
              <div className='w-1/3  border-s'>
                  <div className='pl-5'>
                      <h1 h1 className='text-2xl font-semibold'>
                        Penarikan Diproses
                      </h1>
                      <div className='w-full flex space-x-4 '>
                        <div className='w-1/3 '>
                            <p className='text-sm mt-4'>
                              Total
                            </p>
                            <p className='text-3xl mt-4'>
                                Rp11.000
                            </p>
                        </div>
                        
                      </div>
                  </div>
              </div>
              <div className='w-1/3  border-s'>
                  <div className='pl-5'>
                  <div className='w-full flex space-x-5'>
                        <div className='w-1/2 font-bold'>
                            Rekening Bank Saya 
                        </div>
                        <div className='w-1/3'>
                        {/* <div className='flex cursor-pointer group'>
                            <span className='hover:underline group-hover:text-[#64b0c9]'>Lainnya</span>
                            <div className='flex items-center justify-center ml-2'>
                            <ChevronRightIcon className='w-5 h-5 text-[#64b0c9] font-bold group-hover:text-blue-500' />
                            </div>
                        </div> */}
                        </div>

                        </div>

                      <div className='w-full flex space-x-4 '>
                        <div className='w-full '>
                           
                            <div className='text-base  mt-12'>
                            PT. BANK MANDIRI (PERSERO) TBK.
                            **** 1587 - FEBRIANSYAH ADI PUTR <span>
                                <Tag color='#43D39E'>
                                    UTAMA
                                </Tag>
                                <p className='mt-1'>
                                    <Tag color='green' >
                                        Terverifikasi
                                    </Tag>
                                </p>
                            </span>
                            </div>
                        </div>
                        
                      </div>
                  </div>
              </div>

            </div>


            {/* Rekening saya dan Button Saldo Toko */}
            <br />
            
          </CardBody>
      </Card>


      <br />
      <Card className='mt-14'>
        <CardHeader 
            variant="gradient" 
            className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
        >
            <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                 Transaksi Terakhir
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

export default SaldoToko
