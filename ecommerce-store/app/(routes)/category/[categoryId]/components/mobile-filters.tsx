"use client"

import { useState } from "react";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative lg:hidden">
            <Button className="flex items-center gap-x-2 lg:hidden" onClick={toggleSidebar}>
                Filters
                <Plus size={20} />
            </Button>

            <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} z-40 fixed top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out transform`}>
                <div className="p-4">
                    <div className="flex justify-end">
                        <IconButton
                            onClick={toggleSidebar}
                            className="text-gray-500 hover:text-gray-600"
                            icon={<X size={15} />}
                        />
                    </div>
                    <div className="mt-4">
                        <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                        <Filter valueKey="colorId" name="Colors" data={colors} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFilters;
