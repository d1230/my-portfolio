import { useState } from "react";

const initialBlogPosts = [
    {title: "My Journey into Web Development", content: "I started my web development journey with HTML and CSS, learning the basics of structuring and styling web pages. As I progressed, I delved into JavaScript, which allowed me to add interactivity to my projects. Over time, I explored various frameworks and libraries, such as React and Node.js, which further expanded my skill set. The journey has been challenging but rewarding, and I'm excited to continue learning and growing in this ever-evolving field."},
    {title: "The Importance of Responsive Design", content: "In today's multi-device world, responsive design is crucial for providing a seamless user experience. It ensures that websites and applications look and function well on a variety of screen sizes and devices, from desktops to smartphones. By using flexible layouts, media queries, and scalable images, developers can create interfaces that adapt to different environments, improving accessibility and user satisfaction."},
]
export const BlogPost = () => {
    // const [blogContent, setBlogContent] = useState<{timeStamp: number, content: string}>({timeStamp: 0, content: ""});
    // const [blogComments, setBlogComments] = useState<{timeStamp: number, content: string}[]>([
    //   {timeStamp:200501200120, content: "Great post! I learned a lot about web development."},
    //     {timeStamp:200502150988, content: "Thanks for sharing your journey. It's inspiring to see how far you've come."},
    //     {timeStamp:200503101500, content: "I can relate to your experience. I also started with HTML and CSS before diving into JavaScript."},


    // ]);
    // return (
    //     <div className="blog-post">
    //         <h2>My Journey into Web Development</h2>
    //         <select onChange={(e) => setBlogContent({timeStamp: parseInt(e.target.value), content: blogComments.find(c => c.timeStamp === parseInt(e.target.value))?.content || ""})} value={blogContent.timeStamp}
    //           className="blog-select">
    //             {blogContent.timeStamp === 0 && (
    //               <option value={0}  disabled hidden>
    //                 Select a comment-------
    //               </option>
    //             )}
    //           {blogComments.length>0 && blogComments.map((comment,idx) => (
    //               <option key={idx} value={comment.timeStamp}>
    //                 {comment.content} ({new Date(comment.timeStamp).toLocaleString()})
    //               </option>
    //           ))}
    //         </select>
    //         {blogContent.content && (
    //           <div style={{border:'1px solid black', padding:'10px', marginTop: '15px'}}>
    //             <div>{new Date(blogContent.timeStamp).toLocaleString()}</div>
    //             <div>{blogContent.content}</div>
    //           </div>
    //         )}
    //     </div>
    // );
    const [blogPost, setBlogPost] = useState<{title: string, content: string}>();
    const [blogPosts, setBlogPosts] = useState<{title: string, content: string}[]>(initialBlogPosts);
   const handleAddBlogPost = () => {
    if(blogPost && blogPost.title && blogPost.content){
        setBlogPosts((prev) => [...prev, blogPost]);
        setBlogPost({title: "", content: ""});
    }
   }

    return (
        <div className="blog-post" style={{display:'flex', flexDirection: 'row', gap: '20px', width: '100%', padding: '20px'}}>
            <div style={{flex: 1}}>
                <h2>Blog Posts</h2>
                {blogPosts.length>0 && blogPosts.map((post,idx) => {
                    return (
                        <div key={idx} style={{border:'1px solid black', padding:'10px', marginBottom: '15px', cursor: 'pointer'}} onClick={() => setBlogPosts(blogPosts.filter((_,index) => index !== idx))}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>

            <div style={{display:'flex', flexDirection: 'column', gap: '10px', flex: 1}}>
                <h2>Add Post</h2>
                <input type='text' placeholder="Blog Title" value= {blogPost?.title||""} onChange={(e)=> setBlogPost((prev)=>({title:e.target.value, content:prev?.content || ""}))} />
                <textarea placeholder="Blog content" value = {blogPost?.content ||""} onChange={(e)=> setBlogPost((prev) => ({title:prev?.title ||"", content: e.target.value}))} />
                <button type="button" onClick={handleAddBlogPost}>
                    Add Blog Post
                </button>
            </div>
        </div>
    )
}   