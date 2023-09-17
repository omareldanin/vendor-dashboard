import { Sidebar } from "@/components";
import { ProductsTable } from "@/components/ui/RestaurantsTable";
import { columns } from "@/components/ui/RestaurantsTable/columns";
import { useNotifications, useProducts } from "@/hooks";

export const HomeScreen = () => {
    const { data: products = {
        results: []
    }, isLoading, isError } = useProducts();
    useNotifications();
    return (
        <div className="border-t">
            <div className="h-screen">
                <Sidebar className="block">
                    <h1 className="text-2xl font-bold mb-8">كل المنتجات</h1>
                    <ProductsTable
                        isLoading={isLoading}
                        isError={isError}
                        columns={columns}
                        data={products.results}
                    />
                </Sidebar>
            </div>
        </div>
    );
};
