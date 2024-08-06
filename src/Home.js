import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
import PieChart from "./Charts";

const Home = () => {
    
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>We could not fetch data for this resource...</div> }
            {isPending && <div>Blogs Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='Learning React!!' />}
            <PieChart />
        </div>
    );
}

export default Home;