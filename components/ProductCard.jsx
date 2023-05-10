import Link from 'next/link'
import Image from 'next/image'
import { getDiscountedPricePercentage } from '@/utils/helper'

const ProductCard = ({ data: { attributes:pro, id } }) => {
    // console.log(pro.thumbnail.data[0].attributes.url)
    return (
        <Link
            key={id}
            href={`/product/${pro.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
         <Image
                width={500}
                height={500}
                src={pro.thumbnail.data[0].attributes.url}
                alt={pro.name}
            />
            {/* <img
                className='w-full'
                src={"/product-1.webp"}
                alt="product Image"
            /> */}
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{pro.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{pro.price}
                    </p>
                    {
                        pro.original_price && (
                            <>    
                                <p className="text-base font-medium line-through">
                                    &#8377;{pro.original_price}
                                </p>
                                <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(pro.original_price,pro.price)} %off
                                </p>
                            </>
                        )
                    }
                </div>
            </div>
        </Link>
    )
}

export default ProductCard