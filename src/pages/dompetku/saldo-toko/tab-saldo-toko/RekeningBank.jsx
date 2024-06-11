import { PlusIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Button, Modal, Tag } from 'antd';
import React, { useState } from 'react'
import TambahRekeningBank from './TambahRekeningBank';
import Chip from "../../../../assets/rekening/Chip.png"
import verified from "../../../../assets/rekening/verified.png"
import Atas from "../../../../assets/rekening/Atas.png"
import Bawah from "../../../../assets/rekening/Bawah.png"
import MaskedNumber from '../../penghasilan-toko/MaskedNumber';
import DetailRekening from './DetailRekening';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

function RekeningBank() {
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

  // Detail Rekening
  const [isModalVisibleDetail, setIsModalVisibleDetail] = useState(false);

  const showModalDetail = () => {
    setIsModalVisibleDetail(true);
  };

  const handleOkDetail = () => {
    setIsModalVisibleDetail(false);
  };

  const handleCancelDetail = () => {
    setIsModalVisibleDetail(false);
  };
  return (
    <div className='mt-14'>
       <Card>
        <CardHeader 
              variant="gradient" 
              className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
          >
              <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                  Rekening Bank
              </Typography>
          </CardHeader>
          <CardBody>
            <h1 className='text-xl font-semibold'>
              Rekening Toko (Maksimal 2 Rekening)
            </h1>
            <p className='text-blue-gray-400'>
              Silahkan kirim ulang verifikasi jika tidak terkirim ke Email Anda
            </p>
            <br />
            <hr />
            <br />
                <div className='w-full rounded-lg'>
                  <div className="flex justify-center items-center space-x-10 ">
                    <div>
                    <Button onClick={showModal} className='w-[28rem] h-[15rem] bg-white border border-dashed rounded-lg flex flex-col justify-center items-center'>
                      <PlusIcon className='w-10 h-10 font-bold' />
                      <p className='mt-5'>
                        Tambah Rekening Bank
                      </p>
                    </Button>
                    </div>


                    <div onClick={showModalDetail} className='cursor-pointer w-[28rem] h-[15rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex flex-col relative'>
                      <img src={Atas} alt="Atas" className='absolute top-0 right-0 h-[240px] w-[139.73px]' />
                      <img src={Bawah} alt="Bawah" className='absolute bottom-0 left-0 h-[150px] w-[136px]' />
                      <div className='p-6'>
                          <div className='text-white text-lg'>
                              PT. Bank Mandiri (PERSERO) TBK.
                          </div>
                                              
                          <br />
                          <div className='flex w-full'>
                              <div className='w-full'>
                                  <img src={Chip} alt="" className='w-[53px] h-[42px]' />
                              </div>
                              <div className='w-1/4 '>
                                  <div className='bg-white rounded-lg text-[#5DBA46] flex h-10 justify-center items-center  text-xs'>
                                      Verified <span className='ml-2 '><img src={verified} alt="" className='w-[14px] h-[14px]' /></span>
                                  </div>
                              </div>
                          </div>
                          
                          <br />
                          <div className='text-2xl text-white font-semibold '>
                            <MaskedNumber number="1234 1587" />
                          </div>

                          
                          <div className='flex w-full mt-5'>
                              <div className='w-full text-2xl text-white font-bold'>
                                  FEBRIANSYAH ADI PUTRA
                              </div>
                              <div className='w-1/4 '>
                                  <div className='bg-white rounded-lg text-purple-500 flex h-8 justify-center items-center  text-xs'>
                                      UTAMA
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>

                  </div>
            </div>
          </CardBody>
        </Card>


        {/* Modal Tambah Tabungan */}
        <Modal 
        width={1000}
        title={[
          <div className='text-2xl font-semibold'>
            Tambah Rekening Bank
          
            <hr className='mt-5 mb-5' />
           
          </div>
          
        ]}
        footer={false}
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        centered
        className="custom-modal"
      >
       <TambahRekeningBank/>
      
      </Modal>


      {/* Modal Detail Rekening */}
      <Modal 
        width={900}
        title={[
          <div className='text-2xl font-semibold'>
            Detail Rekening Bank
          
            <hr className='mt-5 mb-5' />
           
          </div>
          
        ]}
        footer={false}
        visible={isModalVisibleDetail} 
        onOk={handleOkDetail} 
        onCancel={handleCancelDetail}
        centered
        className="custom-modal"
      >
       <DetailRekening/>
      
      </Modal>

    </div>
  )
}

export default RekeningBank
