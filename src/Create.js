import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('Ayesha');
    const [isPending, setIsPending] = useState(false); 
    const history = useHistory(); 

    const handleSubmit = (e) =>
    {
        e.preventDefault(); //prevent the data to get refreshed. 
        const blog = {title, body, author}; 
       
        setIsPending(true); 

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added!!")
            setIsPending(false)
        })

        history.push('/'); //Take the page back to Home one a blog has been added. 
    }
    return ( 
        <div className="create">
            <h2>Add a New blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={ title } onChange={ (e) => setTitle(e.target.value)}/>
                <label>Blog Body</label>
                <textarea required value={ body } onChange={ (e) => setBody(e.target.value)}></textarea>
                <label>Blog Author</label>
                <select value={ author } onChange={ (e) => setAuthor(e.target.value)}>
                    <option value="Ayesha">Ayesha</option>
                    <option value="Ahmed">Ahmed</option>
                    <option value="Sarmad">Sarmad</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;