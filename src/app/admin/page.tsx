import React from 'react'
import DashboardLayout from './dashboard/layout';

const page = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
  return (
 <DashboardLayout>
   <div className='bg-red-700'>merhaba</div>
   {children}
 </DashboardLayout>
 
  )
}

export default page