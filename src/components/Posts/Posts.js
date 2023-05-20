import React, { useState } from "react";
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, updatePost } from "../../redux/postsSlice";
import Addpost from "../Sidebar/Addpost";

export default function Posts() {

    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")

    const [updateTitle, setUpdateTitle] = useState("")
    const [updateDescription, setUpdateDescription] = useState("")

    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);

    const posts = useSelector((state) => state.posts.items)
    const dispatch = useDispatch()

    // const [checkfiledadded, setCheckFiledAdded] = useState(false)
    const [checkfiled, setCheckFiled] = useState(false)


    
    return (
        <div className="content">


            <div className="posts">
                {
                    posts.length > 0 ? posts.map(post => <div className="post" key={post.id}>
                        <div className="card bg-light mb-3">
                            <div className="card-header">{post.title}</div>
                            <div className="card-body">
                                <p className="card-text">{post.description}</p>
                                <button className="btn btn-warning" onClick={() => {
                                    setIsEdit(true)
                                    setId(post.id)
                                }}>Edit</button>
                                <button className="btn btn-danger" onClick={() => {dispatch(deletePost(post.id)); setCheckFiled(false); setIsEdit(null)}}>Delete</button>
                            </div>
                            {isEdit && id === post.id && (
                                <div className="form-group">
                                    <input type="text"  className="form-control update-input" placeholder="update Title" onChange={(e) => setUpdateTitle(e.target.value)} />
                                    <textarea type="text"  className="form-control text-area update-input" placeholder="update Description" onChange={(e) => setUpdateDescription(e.target.value)} />
                                    <button className="btn btn-info btn-update" onClick={() => {
                                        if(updateTitle.trim().length !== 0 && updateDescription.trim().length !== 0) {

                                            dispatch(updatePost({ id: post.id, title: updateTitle, description: updateDescription }))
                                            setIsEdit(null)
                                            setUpdateTitle("")
                                            setUpdateDescription("")
                                            setCheckFiled(false)

                                        }else {
                                            setCheckFiled(true)
                                        }
                                        
                                    }}>Update</button>
                                    {checkfiled ? <span>Please fill in the fields first</span> : ""}
                                </div>
                            )}
                        </div>
                    </div>) : "No There Is Post"
                }
            </div>

            
            <Addpost />
        </div>
    )
} 