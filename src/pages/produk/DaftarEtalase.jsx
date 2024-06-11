import { PencilIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { Input, Modal } from 'antd';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';


const daftarEtalase = [
  {
    nama_etalase: 'SSD'
  },
  {
    nama_etalase: 'Mouse'
  },
  {
    nama_etalase: 'Set'
  },
  {
    nama_etalase: 'Rename'
  },
  {
    nama_etalase: 'Monitor'
  },
  {
    nama_etalase: 'Casing PC'
  },
]

function DaftarEtalase() {
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

  return (
    <div className="mt-12 mb-8 ">
      <Card>
            <CardHeader 
                variant="gradient" 
                className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
            >
                <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                    Daftar Etalase
                </Typography>
            </CardHeader>
            <CardBody>
                <div>
                    <div className='w-full '>
                        <div className='w-full flex justify-end '>
                            <div>
                                Search : <Input placeholder='Search' className='h-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='mb-5'>
                  <table className="w-full table-auto border-collapse overflow-auto">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border text-center w-20 ">No.</th>
                        <th className="border px-4 py-2">Nama Etalase</th>
                        <th className="border px-4 py-2 w-[20rem]">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {daftarEtalase.map((etalase, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-100">
                          <td className="border px-4 py-2 text-center">{index + 1}</td>
                          <td className="border px-4 py-2">{etalase.nama_etalase}</td>
                          <td className="border px-4 py-2 text-center">
                              <div className='w-full flex space-x-2 justify-center items-center'>
                                    <button onClick={showModal} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                      <div className='flex '>
                                        <PencilSquareIcon  className='h-4 w-4 mr-2 flex justify-center items-center mt-1'/> Edit
                                      </div>
                                  </button>
                                  <button onClick={handleDelete} className=" bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded">
                                      <div className='flex '>
                                        <TrashIcon  className='h-4 w-4 mr-2 flex justify-center items-center mt-1'/> Delete
                                      </div>
                                  </button>
                              </div>
                            
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </CardBody>
      </Card>


      {/* Modal Edit Etalase */}
      <Modal 
        centered
        width={800}
        title={
          [
            <div className='text-2xl font-bold'>
              Edit Etalase
            </div>
          ]
        } 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
        <div className='pt-6'>
          <div className='w-full flex '>
              <div className='w-1/3 text-lg'>
                  <label className='text-xl'>Nama Etalase <span className='text-red-500'>*</span></label>
                </div>
                <div className='w-full'>
                    <Input placeholder='Masukkan Nama Brand' className='h-10'/>
                </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DaftarEtalase
