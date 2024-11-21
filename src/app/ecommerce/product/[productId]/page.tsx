

import React from 'react'
import DetailClient from '../../components/detail/DetailClient';

type DetailProps = {
    productId? : string
}

const Detail = ({params}: {params: DetailProps}) => {

    const {productId} = params;

    const product = [{}]
    //products.find(product => product.id == productId)

  return (
    <div>
        <DetailClient product={product}/>
    </div>
  )
}

export default Detail