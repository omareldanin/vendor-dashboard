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
    Switch,
    DropdownMenuItem,
} from "@/components";
import { Product } from "@/services";
import { useEditProduct } from "@/hooks/useEditProduct";
import { EditPrice } from "./components/EditPrice";
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
        cell: ({ row }) => {
            const value = row.original;
            return (
                <div className="flex">
                    <span className="mx-auto">{parseInt(value.price) === 0 ? 'حسب الاختيار' : value.price}</span>
                </div>
            );
        }
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
    {
        id: "actions",
        cell: ({ row }) => {
            const product = row.original;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { mutate: changeProductStatus } = useEditProduct({
                onSuccess: () => { }
            });

            const handleStockChange = () => {
                const formData = new FormData();
                formData.append('title', product.title);
                formData.append('price', product.price);
                formData.append('vendorId', product.vendorId.toString());
                formData.append('description', product.description);
                formData.append('categoryId', product.categoryId.toString());
                formData.append('available', product.available ? 'false' : 'true');
                formData.append('featured', product.featured ? 'true' : 'false');
                changeProductStatus({
                    id: product.id,
                    payload: formData
                })
            }
            return (
                <div className="flex justify-center items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">فتح قائمة الاجراءات للمستخدم</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-50 space-y-2">
                            <DropdownMenuLabel>
                                حالة المنتج
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <div className="flex justify-between items-center">
                                    <p>متاح</p>
                                    <Switch
                                        dir="rtl"
                                        checked={product.available}
                                        onCheckedChange={handleStockChange}
                                    />
                                </div>
                            </DropdownMenuItem>
                            {parseInt(product.price) !== 0 ? (
                                <DropdownMenuItem asChild>
                                    <EditPrice product={product} />
                                </DropdownMenuItem>
                            ) : null}
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
