import React from 'react';

const MaskedNumber = ({ number }) => {
  // Menyamarkan empat angka pertama
  const maskedNumber = number.replace(/^(\d{4})/, '****');

  return (
    <span className='ml-2'>
      {maskedNumber}
    </span>
  );
};

export default MaskedNumber;
