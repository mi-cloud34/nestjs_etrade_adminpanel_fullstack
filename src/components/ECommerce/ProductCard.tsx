


import { CardProductProps } from '@/app/ecommerce/components/detail/DetailClient';
import { addToBasket } from '@/redux/Features/cartSlice';
import { AppDispatch, RootState} from '@/redux/store';
import React from 'react'
import toast from 'react-hot-toast';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
interface ProductCardProps {
    product: CardProductProps;
  }
/* interface propsType{
    id:string;
    img:string;
     name:string;
    title:string;
    description:string;
    inStock:boolean
    price:number;
    category:string;
} */
//const ProductCard = ({id,name,img,category,title,description,inStock,price}:propsType) => {
    const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { cartPrdcts, productCartQty } = useSelector((state: RootState) => state.cart);
  /*   const payload:CardProductProps={
        id,name,img,inStock,description,category,price,quantity:1
    } */
  const dispatch=useDispatch<AppDispatch>();
  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
  };
    return (
    <div className='border border-gray-200'>
        <div className='text-center border-b border-gray-200'>
            <img className='inline-block object-fill' src={product.img} alt={product.description} width={300}  height={250} />
        </div>
        <div className='px-8 py-4'>
            <p className='text-gray-500 text-[14px] font-medium'>{product.category}</p>
            <h2 className='font-medium'>{product.description}</h2>
            <div className='mt-3 flex text-[#FFB21D] items-center'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <p className='text-gray-600 text-[14px] ml-2'>(3 Review)</p>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h2 className='font-medium text-accent text-xl'>${product.price}</h2>
                <div className='flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent' onClick={handleAddToBasket}>
                    <AiOutlineShoppingCart/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard