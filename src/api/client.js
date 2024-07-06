import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://route-init.gallimap.com/api/v1/"
})