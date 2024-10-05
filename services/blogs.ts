import { blogger_v3 } from "googleapis";
import GoogleAuth from "./auth";

const blogId = process.env.GOOGLE_BLOG_ID;
const blogger = new GoogleAuth(['https://www.googleapis.com/auth/blogger']).blogger();

export const getBlogInfo = async () => {
    const response = await blogger.blogs.get({
        blogId
    });
    return response.data;
};

export const getPosts = async (params?: blogger_v3.Params$Resource$Posts$List, options?: any) => {
    const response = await blogger.posts.list({ blogId, ...params }, options);
    return (response.data as blogger_v3.Schema$PostList).items || [];
};

export const getBlogByPath = async (path: string) => {
    const response = await blogger.posts.getByPath({
        path,
        blogId
    });
    return response.data;
};