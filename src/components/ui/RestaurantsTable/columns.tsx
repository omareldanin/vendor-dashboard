import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ChevronLeft } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Button,
    Checkbox,
    // DeleteRestuarantDialog,
    Avatar,
    AvatarImage,
    AvatarFallback,
    Badge,
} from "@/components";
import { Product } from "@/services";
// import { EditRestaurant } from "./components/EditRestaurant";
// import { AddDeliveryCost } from "./components/AddDeliveryCost";

export const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value: boolean) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="تحديد الكل"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
                aria-label="تحديد صف"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "image",
        accessorKey: "productImages[0].image",
        header: "الصورة",
        cell: ({ row }) => {
            const value = row.original;
            return (
                <Avatar className="mx-auto">
                    <AvatarImage src={value.productImages[0].image || ''} alt="restaurant image" />
                    <AvatarFallback>
                        {value.title.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                </Avatar >
            )
        },
    },
    {
        accessorKey: "title",
        header: "الاسم",
    },
    {
        accessorKey: "price",
        header: "السعر",
    },
    {
        accessorKey: "category.name",
        header: "القسم",
    },
    {
        header: "الخصائص",
        cell: ({ row }) => {
            const value = row.original;
            return (
                <div className="flex justify-center gap-3 items-center">
                    {value.available ? (
                        <div className="flex">
                            <Badge>متاح</Badge>
                        </div>
                    ) : null}
                    {value.featured ? (
                        <div className="flex">
                            <Badge variant='secondary'>مميز</Badge>
                        </div>
                    ) : null}
                </div>
            );
        }
    },
    // {
    //     accessorKey: "status",
    //     header: "الحالة",
    //     cell: ({ row }) => {
    //         const value = row.original;
    //         return (
    //             <div className="flex">
    //                 {value.status === 'open' ? (
    //                     <div className="mx-auto flex">
    //                         <Badge>مفتوح</Badge>
    //                     </div>
    //                 ) : value.status === 'close' ? (
    //                     <div className="mx-auto flex justify-end">
    //                         <Badge variant='destructive'>مغلق</Badge>
    //                     </div>
    //                 ) : value.status === 'busy' ? (
    //                     <div className="mx-auto flex justify-end">
    //                         <Badge variant='warning'>مشغول</Badge>
    //                     </div>
    //                 ) : value.status === 'soon' ? (
    //                     <div className="mx-auto flex justify-end">
    //                         <Badge variant='secondary'>قريبا</Badge>
    //                     </div>
    //                 ) : null}
    //             </div>
    //         );
    //     }
    // },
    {
        id: "actions",
        cell: () => {
            // const product = row.original;

            return (
                <div className="flex justify-center items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">فتح قائمة الاجراءات للمستخدم</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuLabel className="text-end mb-2">
                                <span className="sr-only">الاجراءات</span>
                                الاجراءات
                            </DropdownMenuLabel>
                            {/* <EditRestaurant restaurant={restuarant} />
                            <DeleteRestuarantDialog restuarant={restuarant} />
                            <AddDeliveryCost restaurant={restuarant} /> */}
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div>
                        <ChevronLeft className="h-4 w-4 cursor-pointer" />
                    </div>
                </div>
            );
        },
    },
];
