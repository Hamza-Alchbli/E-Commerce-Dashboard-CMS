"use-client"

import Image from "next/image";

import { Product } from "@/types";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data,
}) => {
    console.log(data?.images?.[0]?.url)
    return (
        <div className="bf-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">

                <Image
                    src={data.images?.[0]?.url}
                    alt=""
                    fill
                    className="aspect-square object-cover rounded-md"
                />
            </div>
        </div>
    )
}

export default ProductCard;