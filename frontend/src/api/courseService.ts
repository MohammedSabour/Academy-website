import client from "./axiosClient.ts";

export const getLanguages = () => client.get("languages/");
export const getCourses = () => client.get("courses/");