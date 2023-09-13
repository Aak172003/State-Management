import { createContext, useState } from "react";


import { baseUrl } from '../baseUrl'


// Create Context Data 
export const AppContext = createContext();

// Create Provider 

// { children } here this represent , 
// AppContextProvider ke ander jo likha hai App Component j=wo uska children hai


// App is a children of AppContext
// <AppContext > <App /> </AppContext> 
export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);

    // At starting me mere pss koi post nhi hai 
    const [post, setPost] = useState([]);

    // By Default 1st page will goona render 
    const [page, setPage] = useState(1);

    // Initially we have no idea , which total no of pages we have 
    const [totalPages, setTotalPages] = useState(null);


    // Data Filling 
    async function fetchBlogPost(page = 1) {
        setLoading(true);

        // API Call 
        let url = `${baseUrl}?page=${page}`;
        // console.log("this is data ", url)

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)

            setPage(data?.page);
            setPost(data?.posts);
            setTotalPages(data?.totalPages)

        }
        catch (error) {
            console.log('Error in Ftching data ');
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    // This is  a page handler page  
    function handlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);
    }

    // this data passed to consumer
    const value = {
        post,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {/* here i pass the data to the children */}

        {/* App wale children ko upr ka saara data send krdo  */}
        {children}

    </AppContext.Provider>


}
