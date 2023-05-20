import { useDispatch,useSelector } from 'react-redux'
import './Addpost.css'
import React ,{ useState } from 'react'
import { addPost } from '../../redux/postsSlice';




export default function Addpost() {

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("")
    const posts = useSelector((state) => state.posts.items)

    
    const dispatch = useDispatch();


    const [checkfiledadded, setCheckFiledAdded] = useState(false)



    return (
        <div className="form sidebar form-group">
                <h2>Add Yore Post</h2>
                <input className="form-control" id="title" type="text" placeholder="Enter Post Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                {/* <input className="form-control" id="desc" type="text" placeholder="Enter Post Title" onChange={(e) => setDescription(e.target.value) } value={description}/> */}
                <textarea className="form-control text-area" id="desc" placeholder="Enter Post Title" onChange={(e) => setDescription(e.target.value)} value={description} />
                <button className="btn btn-success" onClick={() => {
                    if(title.trim().length !== 0 && description.trim().length !== 0) {

                        dispatch(addPost({ id: posts.length + 1, title, description }))
                        setTitle("")
                        setDescription("")
                        setCheckFiledAdded(false)
                    }else {
                        setCheckFiledAdded(true)
                    }
                }}>Add Post</button>
                {checkfiledadded ? <span>Please fill in the fields first</span> : ""}
        </div>
    )
}
