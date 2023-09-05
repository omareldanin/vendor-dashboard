import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Button,
    Input,
    Label,
    DialogClode,
    buttonVariants
} from "@/components"
import { useEditProduct } from "@/hooks/useEditProduct";
import { Product } from "@/services";
import { useState } from "react";


interface EditPriceProps {
    product: Product;
}

export const EditPrice = ({ product }: EditPriceProps) => {
    const [newPrice, setNewPrice] = useState<number>(parseInt(product.price));
    const [open, setOpen] = useState<boolean>(false);

    const { mutate: changePrice, isLoading } = useEditProduct({
        onSuccess: () => {
            setOpen(false);
            setNewPrice(0);
        }
    });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('price', newPrice.toString());
        changePrice({ id: product.id, payload: formData });
    }

    return (
        <Dialog
            onOpenChange={(open) => {
                setOpen(open);
            }}
            open={open}
        >
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    تعديل السعر
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        تعديل سعر  {product.title}
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                            السعر
                        </Label>
                        <Input
                            id="price"
                            className="col-span-3"
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(parseInt(e.target.value))}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        size='lg'
                        type="submit"
                        onClick={handleSubmit}
                        isLoading={isLoading}
                        disabled={
                            isLoading ||
                            newPrice === 0 ||
                            newPrice === parseInt(product.price)
                        }
                    >
                        حفظ
                    </Button>
                    <DialogClode
                        className={buttonVariants({
                            size: "lg",
                            variant: "destructive",
                        })}
                    >
                        الغاء
                    </DialogClode>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
