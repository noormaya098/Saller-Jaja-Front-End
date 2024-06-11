import React from 'react'
import Gambar1 from '../../assets/dashboard/BolaTesting.png'
import { Input } from 'antd';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { PencilSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const gradientColors = 'from-[#64b0c9] via-[#8ACDE3] to-[#B1EBFE]';


const RatingCell = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={i} className="w-6 h-6 text-yellow-500" />);
        }
        if (hasHalfStar) {
            stars.push(<StarIcon key="half" className="w-6 h-6 text-yellow-500" />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} className="w-6 h-6 text-gray-300" />);
        }
        return stars;
    };

    return (
        <td className=" px-4 py-2 flex">
            {renderStars()}
        </td>
    );
};


function RatingProduk() {
    const daftarRating = [
        {
            produk: 'Bola Testing',
            harga:'2.000',
            kategori: 'Art Shop',
            rating: '5',
            jumlah_ulasan: '4',
            images: Gambar1
        },
        {
            produk: 'Bola Testing',
            harga:'2.000',
            kategori: 'Art Shop',
            rating: '4.5',
            jumlah_ulasan: '1',
            images: Gambar1
        },
        {
            produk: 'Bola Testing',
            harga:'2.000',
            kategori: 'Art Shop',
            rating: '3',
            jumlah_ulasan: '1',
            images: Gambar1
        },
    ]

    const navigate = useNavigate();
    const handleDetail = () => {
        navigate('/dashboard/review/rating-produk/DetailRating');
      }
    

  return (
    <div className="mt-12 mb-8 ">
    <Card>
          <CardHeader 
              variant="gradient" 
              className={`bg-gradient-to-b ${gradientColors} mb-8 p-6 text-center`}
          >
              <Typography className='text-white font-bold text-lg' variant="h6" color="white">
                  Daftar Rating
              </Typography>
          </CardHeader>
          <CardBody>

            <div>
                <h1 className='text-2xl font-bold'>
                    Rata-Rata Rating Produk
                </h1>
                <br />
                <div className='w-full flex'>
                    <div className='w-1/6'>
                        <div className='flex'>
                            <StarIcon className='w-14 h-14 text-yellow-800'/> 
                            <div className='text-5xl text-gray-600 flex justify-center items-end font-bold'>4.7</div>
                            <div className='text-2xl text-gray-600 flex justify-center items-end '>
                                /5.0
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex mt-2'>
                            <div className='text-5xl text-gray-600 flex justify-center items-end font-bold'>67</div>
                            <div className='text-2xl text-gray-600 flex justify-center items-end '>
                                Ulasan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
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
                      <th className="border px-4 py-2">Produk</th>
                      <th className="border px-4 py-2">
                        <div className='flex w-full space-x-2 justify-center text-center'>
                            Rating <StarIcon className='w-6 h-6'/>
                        </div>
                      </th>
                      <th className="border px-4 py-2">Jumlah Ulasan</th>
                      <th className="border px-4 py-2 w-[20rem]">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daftarRating.map((ratings, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-100">
                        <td className="border px-4 py-2 text-center">{index + 1}</td>
                        <td className="border px-4 py-2">
                            <div className='w-full flex space-x-4'>
                                <div className='flex justify-center items-center'>
                                    <img src={ratings.images} className='w-14 h-14' alt="" />
                                </div>
                                <div>
                                    <p className='text-[#64b0c9] font-bold text-xl'>
                                        {ratings.produk}
                                    </p>
                                    <p className='text-[#7a8081] font-bold text-lg'>
                                        Rp. {ratings.harga}
                                    </p>
                                    <p>
                                        Kategori : {ratings.kategori}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className="border px-4 py-2 text-center">
                            <div className='flex justify-center'>
                            ({ratings.rating})<RatingCell rating={ratings.rating} />
                            </div>
                        </td>
                        <td className="border px-4 py-2 text-center">{ratings.jumlah_ulasan}</td>
                        <td className="border px-4 py-2 text-center w-[10%]">
                            <div className='w-full flex space-x-2 justify-center items-center'>
                                  <button onClick={handleDetail}  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <div className='flex '>
                                      <PencilSquareIcon  className='h-4 w-4 flex justify-center items-center mt-1'/>
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


  
  </div>
  )
}

export default RatingProduk
