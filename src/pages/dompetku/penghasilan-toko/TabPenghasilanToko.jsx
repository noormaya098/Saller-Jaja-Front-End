import React from 'react'
import Gambar1 from "../../../assets/dashboard/BolaTesting.png"
import { Tag } from 'antd';

const orders = [
  {
      invoice : "INV-202406107217",
      total_produk: '1',
      status: 'Refund',
      jumlah_dana_dilepaskan: "16.500",
      images: Gambar1,
      customer: 'TASYA ID'
  },
  {
      invoice : "INV-202406107217",
      total_produk: '1',
      status: 'Pending',
      jumlah_dana_dilepaskan: "16.500",
      images: Gambar1,
       customer: 'TASYA ID'
  },
  {
      invoice : "INV-202406107217",
      total_produk: '1',
      status: 'Done',
      jumlah_dana_dilepaskan: "16.500",
      images: Gambar1,
       customer: 'TASYA ID'
  },
 
  
];

function TabPenghasilanToko({status}) {
  const filteredOrders = status ? orders.filter(order => order.status === status) : orders;
  return (
    <div className='p-4'>
       {/* Data */}
       <>
        <div className="mb-4 w-full mt-4 ">
            {filteredOrders.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
                <Card className="border border-solid mb-5">
                <CardBody>
                    <h1 className="text-2xl">Belum Ada Data</h1>
                </CardBody>
                </Card>
            </div>
            ) : (
            <table className="w-full table-auto border-collapse overflow-auto">
                <thead>
                <tr className="bg-[#c2eef7]">
                    <th className="border px-4 py-2 text-lg">No.</th>
                    <th className="border px-4 py-2 text-lg">Pesanan</th>
                    <th className="border px-4 py-2 text-lg">Pembeli</th>
                    <th className="border px-4 py-2 text-lg">Status</th>
                    <th className="border px-4 py-2 text-lg">Jumlah Dana Dilepaskan</th>
                    
                </tr>
                </thead>
                <tbody>
                {filteredOrders.map((order, index) => (
                    <tr key={index}>
                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                    
                    <td className='border px-4 py-2 text-start'>
                      <div className='w-full flex space-x-4'>
                        <div className='w-1/4'>
                            <img src={order.images} alt="" className='w-10 h-10'/>
                        </div>
                        <div className='w-full'>
                            <div className='text-xl text-[#77b0c9]'>
                              {order.invoice}
                              
                            </div>
                              <p className='text-base text-[#6c757d]'>
                                {order.total_produk} Produk
                              </p>
                        </div>
                      </div>
                    </td>
                    <td className="border px-4 py-2 text-center text-[#6c757d] text-xl">{order.customer}</td>
                    <td className="border px-4 py-2 text-center text-[#6c757d] text-xl">
                        <Tag 
                        color={
                          order.status === 'Done' ? 'green' :
                          order.status === 'Refund' ? 'red' :
                          order.status === 'Pending' ? 'yellow' :
                          'gray' // default color if status does not match any case
                        } 
                        className='text-sm'
                      >
                        {order.status}
                      </Tag>
                    </td>
                    <td className="border px-4 py-2 text-center text-[#6c757d] text-xl">Rp {order.jumlah_dana_dilepaskan}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        </>
    </div>
  )
}

export default TabPenghasilanToko
