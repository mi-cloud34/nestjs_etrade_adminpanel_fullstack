import React from 'react'
import DashboardLayout from './dashboard/layout';

const page = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
  return (
 <DashboardLayout>
   
   {children}
 </DashboardLayout>
 
  )
}

export default page