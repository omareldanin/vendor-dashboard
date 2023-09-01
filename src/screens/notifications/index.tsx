import { Sidebar, } from "@/components";

export const NotificationsScreen = () => {
    return (
        <div className="border-t">
            <div className="h-screen">
                <Sidebar className="block">
                    <h1 className="text-2xl font-bold mb-12">الاشعارات</h1>
                </Sidebar>
            </div>
        </div>
    );
};
