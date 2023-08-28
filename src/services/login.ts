import { api } from "@/api";
import { vendorLoginEndpoint } from "@/api/apiURLs";
import { AxiosResponse } from "axios";

export interface LoginParams {
    key: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    user: Vendor;
}

export interface Vendor {
    id: number;
    name: string;
    fcm: string | null;
    email: string;
    phone: string;
    address: string;
    role: string;
    description: string;
    status: string;
    direction: string;
    distance: string;
    delivery_time: string;
    image: string;
    cover: string | null;
    token: string;
}

export const loginService = async ({
    key,
    password,
}: LoginParams) => {
    const response = await api.post<
        LoginParams,
        AxiosResponse<LoginResponse>
    >(vendorLoginEndpoint, {
        key,
        password,
    });
    return response.data;

};
