import { queryClient, router } from "@/main";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// import jwt_decode from "jwt-decode";
import { LoginResponse } from "@/services";

interface AuthStore extends LoginResponse {
    setLoginVlaues: (token: LoginResponse) => void;
    logout: () => void;
}

const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            message: "",
            user: {
                address: "",
                cover: null,
                delivery_time: "",
                description: "",
                direction: "",
                distance: "",
                email: "",
                fcm: "",
                id: 0,
                image: "",
                name: "",
                phone: "",
                role: "",
                status: "",
                token: "",
            },
            setLoginVlaues: (LoginResponse: LoginResponse) => {
                localStorage.setItem("token", LoginResponse.user.token);
                set({
                    message: LoginResponse.message,
                    user: {
                        address: LoginResponse.user.address,
                        cover: LoginResponse.user.cover,
                        delivery_time: LoginResponse.user.delivery_time,
                        description: LoginResponse.user.description,
                        direction: LoginResponse.user.direction,
                        distance: LoginResponse.user.distance,
                        email: LoginResponse.user.email,
                        fcm: LoginResponse.user.fcm,
                        id: LoginResponse.user.id,
                        image: LoginResponse.user.image,
                        name: LoginResponse.user.name,
                        phone: LoginResponse.user.phone,
                        role: LoginResponse.user.role,
                        status: LoginResponse.user.status,
                        token: LoginResponse.user.token,
                    }
                });
            },
            logout: () => {
                set({
                    message: "",
                    user: {
                        address: "",
                        cover: "",
                        delivery_time: "",
                        description: "",
                        direction: "",
                        distance: "",
                        email: "",
                        fcm: "",
                        id: 0,
                        image: "",
                        name: "",
                        phone: "",
                        role: "",
                        status: "",
                        token: "",
                    }
                });
                localStorage.removeItem("token");
                queryClient.clear();
                router.navigate(`/`);
            },
        }),

        {
            name: "auth",
        }
    )
);

export const useAuth = () => useAuthStore((state) => state);
