import { IProduct } from "@/app/admin/dashboard/page";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { setProduct } from "@/redux/Features/productSlice";
import { setLoading } from "@/redux/Features/loadingSlice";
import axios from "axios";
import { makeToast } from "@/utils/helper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

interface PropsType{
    srcNo:number;
    setOpenPopup:Dispatch<SetStateAction<boolean>>;
    setUpdateTable:Dispatch<SetStateAction<boolean>>;
    product:IProduct
}
const ProductRow=({srcNo,setOpenPopup,setUpdateTable,product}:PropsType)=>{
    const dispatch=useDispatch<AppDispatch>();
    const onEdit=()=>{
        dispatch(setProduct(product));
        setOpenPopup(true)
        setUpdateTable(true)
        console.log("basıldııııııı");
        
    }
    const onDelete=()=>{

        dispatch(setLoading(true))
        const payload={
            fileKey:product.fileKey
        }
        axios.delete("/api/uploadthing",{data:payload})
        .then((res)=>{
            console.log(res); 
            console.log("product client idddd",product._id);
            
            axios.delete(`/api/delete_product/${product._id}`)
            .then((res)=>{
                console.log(res.data);
                makeToast("Product deleted Succesfull")
                setUpdateTable((prevState)=> !prevState)
            }).catch((err)=>console.log(err)
            )
            .finally(()=>dispatch(setLoading(false)))
        }).catch((err)=>console.log(err)
          )

    }
    return (
        <tr>
            <td><div>{srcNo}</div></td>
            <td><div>{product.name}</div></td>
            <td>{product.price}</td>
            <td className="py-2"><Image src={product.imgSrc} width={40} height={40} alt={`${product.name}`}/></td>
             <td className="text-2xl flex items-center gap-2 text-gray-600">
                <CiEdit className="cursor-pointer hover:text-black"
                onClick={()=>onEdit()}
                />
                <RiDeleteBin5Fill className="text-[20px] cursor-pointer hover:text-red-600"
                onClick={()=>onDelete()}
                />
             </td>
        </tr>
    )
}
export default ProductRow