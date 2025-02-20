import PostCard from "./BlogComponents/PostCard";
import MainLayout from "../../MainLayout";
import { posts } from "../../data/posts";
export default function Blog() {


    return (
            <MainLayout>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post: any, index: number) => (
                        <PostCard key={index} post={post} />
                    ))}
                </div>
            </MainLayout>
            
    );
}

