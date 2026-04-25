
import { redirect } from 'next/navigation';
import React from 'react';
const defult_category_id= "01"

const Homepages = async() => {
  return (
    redirect(`/category/${defult_category_id}`)
  );
};

export default Homepages;
