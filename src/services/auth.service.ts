import axiosClient from "@configs/axios.config"
import type { LoginData, LoginResponse, SignupFormData, SignupResponse } from "@type/auth.type"
import { sleep } from "@utils/sleep.util";

export const AuthService = {
    login: async (payload: LoginData) => {
        // TODO: Replace with actual API call when backend is ready
        // const { data } = await axiosClient.post<LoginResponse>("/auth/login", payload);
        
        // Temporary mock response for testing
        await sleep(1000);
        const mockResponse: LoginResponse = {
            token: `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            refreshToken: `mock_refresh_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            expireAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
        };
        
        return mockResponse;
    },
    signup: async (payload: SignupFormData) => {
        // TODO: Replace with actual API call when backend is ready
        const { data } = await axiosClient.post<SignupResponse>("/auth/signup", payload);
        return data;
    },
    logout: async () => {

    }
}