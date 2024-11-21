
import { CardProductProps } from '@/app/ecommerce/components/detail/DetailClient';
import { removeFromCart, setProductCartQty } from '@/redux/Features/cartSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react'
import toast from 'react-hot-toast';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';

interface propsType{
    id:string;
    img:string;
    title:string;
    price:number;
    quantity:number;
}
const CartProduct:React.FC<propsType> = ({
    id,img,title,price,quantity
}) => {
    const { cartPrdcts,productCartQty } = useSelector((state: RootState) => state.cart);

    const dispatch =useDispatch<AppDispatch>();
    const handleRemoveFromCart = (product: CardProductProps) => {
        dispatch(removeFromCart(product)); // Ürünü sepetten kaldırıyoruz
        dispatch(setProductCartQty()); // Ürün sayısını güncelliyoruz
      
       
        toast.success('Ürün Sepetten Silindi...');
        localStorage.setItem('cart', JSON.stringify(cartPrdcts));
      };
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
            <img className='h-[80px]' src={img} alt={title} />
            <div className='space-y-2'>
                <h3 className='font-medium'>{title}</h3>
                <p className='text-gray-600 text-[14px]'>
                    {quantity}x${price}.00
                </p>
            </div>
        </div>
        <RxCross1 className='cursor-pointer'
        onClick={()=>handleRemoveFromCart}
        />
    </div>
  )
}

export default CartProduct