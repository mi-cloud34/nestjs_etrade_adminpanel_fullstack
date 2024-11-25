"use client"
import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import {format, set } from 'date-fns'
import { useEffect, useState } from 'react';
import { DeleteIcon, EditIcon } from 'lucide-react';
const Category = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data,setData]=useState([])
  const handleChangePage=()=>{}
  const handleChangeRowsPerPage=()=>{}
  const dateFormater = (dateString:string) =>{
    const parseData=new Date(dateString);
    return format(parseData, 'MMMM d, yyyy h:mm a');
  }
  return (
    <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          <TableCell align="right"style={{ minWidth:70 }} > ID</TableCell>
          <TableCell align="right"style={{ minWidth:170 }} > Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                 <TableCell key={index} align="right">
                       {row!.id??""}
                      </TableCell>
                      <TableCell key={index} align="right">
                       {row!.name??""}
                      </TableCell>
                      <TableCell key={index} align="right">
                       {row!.email??""}
                      </TableCell>
                      <TableCell key={index} align="right">
                       {row!.type??""}
                      </TableCell>
                      <TableCell key={index} align="right">
                       {dateFormater(row!.created_at??"")}
                      </TableCell>
                      <TableCell key={index} align="right">
                      <div className='flex justify-center'>
                       <div className='cursor-pointer text-green-700 mr-2' onClick={()=>{}}>
                        <EditIcon/>
                       </div>
                       <div className='cursor-pointer text-orange-700' onClick={()=>{}}>
                        <DeleteIcon/>
                       </div>
                      </div>
                      </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  )
}

export default Category