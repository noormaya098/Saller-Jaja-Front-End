import { PencilIcon, PlusIcon, TrashIcon, TruckIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Alert, Button, Cascader, Flex, Image, Input, Modal, Radio, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';

const { Option } = Select;

const onChange = (e) => {
    console.log('Change:', e.target.value);
  };

function TambahProduk() {
  const [value, setValue] = useState('baru');
  const [valuePreOrder, setValuePreOrder] = useState('Tidak');
  const [showCard, setShowCard] = useState(false);
  const [variasiList, setVariasiList] = useState([]);

  const tambahVariasi = () => {
      setVariasiList([...variasiList, {
      tipeVariasi: '',
      namaVariasi: ''
      }]);
  };

  const handleChange = (index, event) => {
      const { name, value } = event.target;
      const newList = [...variasiList];
      newList[index][name] = value;
      setVariasiList(newList);
  };

  const handleButtonClick = () => {
      setShowCard(!showCard);
  };


  const onChange = e => {
      setValue(e.target.value);
  };
  const onChangePreOrder = e => {
    setValuePreOrder(e.target.value);
  };

  // Upload Foto 
  const getBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

      const [previewOpen, setPreviewOpen] = useState(false);
          const [previewImage, setPreviewImage] = useState('');
          const [fileList, setFileList] = useState([
              {
              uid: '-1',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
              uid: '-2',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
              uid: '-3',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
              uid: '-4',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
           
          ]);
          const handlePreview = async (file) => {
              if (!file.url && !file.preview) {
              file.preview = await getBase64(file.originFileObj);
              }
              setPreviewImage(file.url || file.preview);
              setPreviewOpen(true);
          };
          const handleChanges = ({ fileList: newFileList }) => setFileList(newFileList);
          const uploadButton = (
              <button
              style={{
                  border: 0,
                  background: 'none',
              }}
              type="button"
              >
              <PlusIcon />
              <div
                  style={{
                  marginTop: 8,
                  }}
              >
                  Upload
              </div>
              </button>
          );


          const selectBefore = (
              <Select defaultValue="Gram (g)">
                <Option value="Gram (g)">Gram (g)</Option>
                <Option value="Kilogram (kg)">Kilogram (kg)</Option>
              </Select>
            );


            // Upload Video 
            const [video, setVideo] = useState(null);
            const [errorMessage, setErrorMessage] = useState('');

            const handleVideoChange = (event) => {
                const selectedFile = event.target.files[0];
                const fileSizeLimit = 50 * 1024 * 1024; // 50 MB
                if (selectedFile && selectedFile.size > fileSizeLimit) {
                    setErrorMessage('File terlalu besar. Maksimum 50 MB.');
                } else {
                    setVideo(selectedFile);
                    setErrorMessage('');
                }
            };

            const handleSubmit = () => {
                // Kirim video ke backend atau lakukan operasi lain sesuai kebutuhan aplikasi Anda
                if (video) {
                    // Lakukan sesuatu dengan video
                    console.log('Video berhasil diunggah:', video);
                } else {
                    setErrorMessage('Silakan pilih video terlebih dahulu.');
                }
            };

            // Modal Usulkan Brand
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

            // Modal Usulkan Etalase Toko
            const [isModalVisible2, setIsModalVisible2] = useState(false);

            const showModal2 = () => {
              setIsModalVisible2(true);
            };

            const handleOk2 = () => {
              setIsModalVisible2(false);
            };

            const handleCancel2 = () => {
              setIsModalVisible2(false);
            };

  return (
    <div className="mt-12 mb-8 text-lg">
    <Card>
        <CardHeader 
              variant="gradient" 
              className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
          >
              <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                  Tambah Produk
              </Typography>
          </CardHeader>
          <CardBody>
                  {/* Kategori */}
                 <>
                  <div>
                          <h1 className='text-xl font-semibold mb-4'>
                              Pilih Kategori
                          </h1>
                          <hr />
                         <div className='w-full flex space-x-5 mt-5'>
                              <div className='sm:w-1/4 w-full'>
                                  <label className='mb-2 text-lg'>Kategori <span className='text-red-500'>*</span></label>
                                  <Select
                                      showSearch
                                      className="w-full mt-2 h-10"
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
                      </div>
                 </>
          </CardBody>
      </Card>

      <br />
      {/* Informasi Produk */}
     <>
     <Card>
          <CardBody>
              <>
                  <div>
                      <h1 className='text-xl font-semibold mb-4'>
                          Informasi Produk
                      </h1>
                      <hr />
                  </div>

                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Nama Produk <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <Input className='h-10' showCount maxLength={100} onChange={onChange} placeholder="Anker Soundcore Nano Speaker Bluetooth Original" />
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Deskripsi Produk <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <TextArea className='h-52' showCount maxLength={5000} onChange={onChange} placeholder="Anker Soundcore Nano Speaker Bluetooth Original" />
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Brand <span className='text-red-500'>*</span></label>
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
                                  <p className='cursor-pointer text-[#8cb4c9] text-lg' onClick={showModal}>
                                    Usulkan Brand
                                  </p>
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Asal Produk <span className='text-red-500'>*</span></label>
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
                                      <Option value="Dalam Negeri">Dalam Negeri</Option>
                                      <Option value="Luar Negeri">Luar Negeri</Option>
                                  </Select>
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Etalase Toko</label>
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
                                      <Option value="SSD">SSD</Option>
                                      <Option value="Mouse">Mouse</Option>
                                  </Select>
                                  <p className='cursor-pointer text-[#8cb4c9] text-lg' onClick={showModal2}>
                                    Tambah Etalase
                                  </p>
                      </div>
                  </div>
              </>
          </CardBody>
      </Card>       
     </>


      <br />
      {/* Informasi Penjualan */}
      <>
      <Card>
          <CardBody>
              <>
                  <div>
                      <h1 className='text-xl font-semibold mb-4'>
                          Informasi Penjualan
                      </h1>
                      <hr />
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Pre-Order <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <Radio.Group onChange={onChangePreOrder} value={valuePreOrder}>
                              <Radio value="Ya" className='text-lg'>Ya</Radio>
                              <Radio value="Tidak" className='text-lg'>Tidak</Radio>
                          </Radio.Group>
                          <p>
                          Kirimkan produk dalam 2 hari (tidak termasuk hari Sabtu, Minggu, libur nasional dan non-operasional jasa kirim).
                          </p>
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Kondisi Produk <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <Radio.Group onChange={onChange} value={value}>
                              <Radio value="baru" className='text-lg'>Baru</Radio>
                              <Radio value="bekas" className='text-lg'>Bekas</Radio>
                          </Radio.Group>
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Kode SKU <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <Input className='h-10' placeholder='1212211221' />
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Harga Satuan <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <Input type='number' addonBefore="Rp." placeholder='5000'/>
                          <p>Hanya berisi angka (0-9)</p>
                      </div>
                  </div>
                  <div className='w-full flex mt-8'>
                      <div className='w-1/3 text-lg'>
                          <label>Stok Produk <span className='text-red-500'>*</span></label>
                      </div>
                      <div className='w-full'>
                          <Input type='number' className='h-10' placeholder='100' />
                          <p>Hanya berisi angka (0-9)</p>
                      </div>
                  </div>
                  
                      <div>
                          <div className='w-full flex mt-8'>
                              <div className='w-1/3 text-lg'>
                                  <label>Variasi Produk</label>
                              </div>
                              <div className='w-full'>
                                  <Button 
                                      className={`w-full h-10 bg-${showCard ? 'red' : 'blue'}-500 text-white rounded-md`}
                                      onClick={handleButtonClick}
                                  >
                                      {showCard ? 'Batalkan Variasi Harga' : 'Aktifkan Variasi Harga'}
                                  </Button>
                              </div>
                          </div>
                          {showCard && (
                              <div >
                                  <div className='mt-4 p-4 border rounded shadow'>
                                  <Button className='w-full h-10 bg-blue-500  text-white' onClick={tambahVariasi}>+ Tambah Variasi</Button>
                                  {variasiList.map((variasi, index) => (
                                      <div key={index} className='w-full mt-5'>
                                     <div className='w-full flex'>
                                     <div className='w-1/3'>
                                          <label className='text-lg'>Tipe Variasi</label>
                                      </div>
                                      <div className='w-full'>
                                          <Select
                                          className="w-full h-10"
                                          value={variasi.tipeVariasi}
                                          onChange={(e) => handleChange(index, e)}
                                          name="tipeVariasi"
                                          >
                                          <Option value="">Pilih kategori</Option>
                                          <Option value="Model">Model</Option>
                                          <Option value="Warna">Warna</Option>
                                          <Option value="Ukuran">Ukuran</Option>
                                          </Select>
                                      </div>
                                     </div>
                                     <div className='w-full flex'>
                                     <div className='w-1/3'>
                                          <label className='text-lg'>Nama Variasi</label>
                                      </div>
                                      <div className='w-full mt-2'>
                                          <Input
                                          className='h-10'
                                          type="text"
                                          value={variasi.namaVariasi}
                                          onChange={(e) => handleChange(index, e)}
                                          name="namaVariasi"
                                          placeholder='Masukkan nama variasi sesuai tipe, Contoh: Biru'
                                          />
                                      </div>
                                     </div>
                                      </div>
                                  ))}
                                  
                                  </div>

                                  <div className='mt-4 p-4 border rounded shadow'>
                                      <h1 className='text-lg font-bold'>
                                          Daftar Variasi
                                      </h1>
                                      <div className='mt-4'>
                                          <table className="w-full table-auto ">
                                               <thead>
                                                  <tr >
                                                      <th className="border px-4 py-2">Variasi</th>
                                                      <th className="border px-4 py-2">Harga</th>
                                                      <th className="border px-4 py-2">Stok</th>
                                                      <th className="border px-4 py-2">Kode SKU</th>
                                                      <th className="border px-4 py-2">Aksi</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td className="border px-4 py-2">
                                                      </td>
                                                      <td className="border px-4 py-2">
                                                          <div>
                                                              <Input type='number' addonBefore="Rp." placeholder='5000'/>
                                                          </div>
                                                      </td>
                                                      <td className="border px-4 py-2">
                                                          <div>
                                                              <Input type='number'  placeholder='5000'/>
                                                          </div>
                                                      </td>
                                                      <td className="border px-4 py-2">
                                                          <div>
                                                              <Input type='number'  placeholder='5000'/>
                                                          </div>
                                                      </td>
                                                      <td className="border px-4 py-2">
                                                          <div className='flex space-x-2 justify-center items-center'>
                                                              <TrashIcon className='w-5 h-5'/>
                                                              <PencilIcon className='w-5 h-5'/>
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          )}
                      </div>
                  
              </>
          </CardBody>
      </Card>
      </>

      <br />
      {/* Foto Produk */}
      <>
      <Card>
          <CardBody>
              
                  <div>
                      <h1 className='text-xl font-semibold mb-4'>
                          Foto Produk
                      </h1>
                      <hr />

                      <Alert className='h-14 p-5' 
                      message={
                          [
                              <div>
                                  <div className='text-base'>
                                      <b>Info</b> : Gunakan foto yang memiliki kecerahan cukup, disarankan untuk mengatur bagian foto yang ingin di crop. 
                                  </div>
                              </div>
                          ]
                      }
                      type="warning" 
                      />
                  </div>

                  {/* Upload Foto*/}
                  <div className='mt-10 flex justify-center'>
                      <>
                      <Upload
                          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                          listType="picture-card"
                          fileList={fileList}
                          onPreview={handlePreview}
                          onChange={handleChanges}
                      >
                          {fileList.length >= 8 ? null : uploadButton}
                      </Upload>
                      {previewImage && (
                          <Image
                          wrapperStyle={{
                              display: 'none',
                          }}
                          preview={{
                              visible: previewOpen,
                              onVisibleChange: (visible) => setPreviewOpen(visible),
                              afterOpenChange: (visible) => !visible && setPreviewImage(''),
                          }}
                          src={previewImage}
                          />
                      )}
                      </>
                  </div>

                  
                  
          </CardBody>
      </Card>
      </>


      <br />
      {/* Video Produk */}
      <>
      <Card>
          <CardBody>
              
                  <div>
                      <h1 className='text-xl font-semibold mb-4'>
                          Video Produk
                      </h1>
                      <hr />

                      <Alert className='h-14 p-5' 
                      message={
                          [
                              <div>
                                  <div className='text-base'>
                                      <b>Info</b> : Durasi maksimal video 60 detik.
                                  </div>
                              </div>
                          ]
                      }
                      type="warning" 
                      />
                  </div>
                  <Input className='mt-4 h-10' type="file" accept="video/*" onChange={handleVideoChange} />
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    
          </CardBody>
      </Card>
      </>


      <br />
      {/* Pengiriman */}
      <>
      <Card>
          <CardBody>
              
                  <div>
                      <h1 className='text-xl font-semibold mb-4'>
                          Pengiriman
                      </h1>
                      <div className='flex space-x-2'>
                          <div>
                          <TruckIcon className='w-5 h-5'/>
                          </div>
                          <div>
                          Ayo Aktifkan Program Gratis Ongkos Kirim Toko Mu !
                          </div>
                      </div>
                      <hr />


                  </div>

                  <div className='mt-4'>
                      <div className='w-full flex'>
                          <div className='w-1/3'>
                              <label> Berat <span className='text-red-500'>*</span></label>
                          </div>
                          <div className='w-full'>
                              <Space direction="vertical">
                                   <Input type='number' className='h-10' addonBefore={selectBefore} />
                              </Space>
                              <p>
                              Hanya berisi angka (0-9)
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className='mt-4'>
                      <div className='w-full flex'>
                          <div className='w-1/3'>
                              <label> Ukuran </label>
                          </div>
                          <div className='w-full'>
                             <div className='w-full flex space-x-2'>
                                  <Input type='number' className='h-10' addonAfter="cm" placeholder='Panjang' />
                                  <Input type='number' className='h-10' addonAfter="cm" placeholder='Lebar' />
                                  <Input type='number' className='h-10' addonAfter="cm" placeholder='Tinggi' />
                              </div> 
                                <p>
                                Hanya berisi angka (0-9)
                                </p>                         
                          </div>
                         
                      </div>
                  </div>
                  
          </CardBody>
      </Card>
      </>

      {/* Button */}
      <br />
      <>
      <div className='w-full flex space-x-2 justify-end items-end'>
          <Button className='h-14 bg-blue-gray-300 text-gray-800 text-lg'>
              Edit Sebagai Draft
          </Button>
          <Button className='h-14 bg-blue-500 text-white text-lg'>
              Edit dan Tampilkan
          </Button>
      </div>
      </>


      {/* Modal Usulkan Brand  */}
      <Modal
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
        footer={false}
      >
        <>
                      <div>
                         <div className='w-full flex space-x-5 mt-5'>
                              <div className='w-1/3'>
                                  <label className='mb-2 text-lg'>Kategori</label>
                                  
                              </div>
                              <div className='w-full'>
                              <Select
                                      showSearch
                                      className="w-full mt-2 h-10"
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
                                  <p>
                                  Kosongkan jika kategori tidak ditemukan
                                  </p>
                              </div>
                         </div>
                         <div className='w-full flex space-x-5 mt-5'>
                              <div className='w-1/3'>
                                  <label className='mb-2 text-lg'>Nama Brand </label>
                                  
                              </div>
                              <div className='w-full'>
                                <Input className='h-10' placeholder='Masukkan Nama Brand'/>
                                  <p>
                                  Brand akan ditampilkan setelah disetujui
                                  </p>
                              </div>
                         </div>
                         <div className='w-full flex justify-end items-end space-x-2 mt-4'>
                              <Button className='h-10 text-lg bg-red-300 text-white' onClick={handleCancel}>Batal</Button>
                              <Button className='h-10 text-lg bg-blue-300 text-white'>Tambah</Button>
                         </div>
                      </div>
                      
        </>
      </Modal>


      {/* Modal Tambah Etalase  */}
      <Modal
        width={800}
        title={
          [
            <div className='text-2xl font-bold'>
              Etalase Toko
            </div>
          ]
        }
        visible={isModalVisible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
        footer={false}
      >
        <>
                      <div>
                        
                         <div className='w-full flex space-x-5 mt-5'>
                              <div className='w-1/3'>
                                  <label className='mb-2 text-lg'>Nama Brand </label>
                                  
                              </div>
                              <div className='w-full'>
                                <Input className='h-10' placeholder='Masukkan Nama Brand'/>
                                  <p>
                                  Masukkan Nama Etalase
                                  </p>
                              </div>
                         </div>
                         <div className='w-full flex justify-end items-end space-x-2 mt-4'>
                              <Button className='h-10 text-lg bg-red-300 text-white' onClick={handleCancel2}>Batal</Button>
                              <Button className='h-10 text-lg bg-blue-300 text-white'>Tambah</Button>
                         </div>
                      </div>
                      
        </>
      </Modal>
  </div>
  )
}

export default TambahProduk
