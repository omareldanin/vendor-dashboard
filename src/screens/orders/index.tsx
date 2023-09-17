import { OrdersTable, Sidebar, } from "@/components";
import { columns } from "@/components/ui/OrdersTable/columns";
import { useNotifications, useOrders } from "@/hooks";
import { useState } from "react";

export const OrdersScreen = () => {
    const [page, setPage] = useState(1);
    const { data: orders = {
        results: [],
        count: 0,
        pages: 0,
    }, isLoading, isError } = useOrders({ page });
    useNotifications();
    return (
        <div className="border-t">
            <div className="h-screen">
                <Sidebar className="block">
                    <h1 className="text-2xl font-bold mb-12">كل الطلبات</h1>
                    <OrdersTable
                        isLoading={isLoading}
                        isError={isError}
                        columns={columns}
                        data={orders.results}
                        setPage={setPage}
                        totalPages={orders.pages || 0}
                        page={page}
                    />
                </Sidebar>
            </div>
        </div>
    );
};
