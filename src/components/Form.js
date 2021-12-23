import { useState } from "react"

const Form = ({onAdd}) => {
    const[title,setTitle] = useState('');
    const[rating,setRating] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!title){
            alert('title is required');
            return
        }

        if(rating > 10){
            alert('rating must be from 0 to 10');
            return
        }

        onAdd({title,rating});

        setTitle('');
        setRating('');
    }

    return (
        <form onSubmit={onSubmit} className="form row justify-content-center"> 
            <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <label className="form-label">Title</label>
                <input
                className="form-control" 
                type="text"
                value={title}
                placeholder="show title"
                onChange={(e)=>setTitle(e.target.value)}
                />
            </div>

            <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <label className="form-label" >Rating</label>
                <input
                    className="form-control"  
                    type="text"
                    value={rating}
                    placeholder="rating"
                    onChange={(e)=>setRating(e.target.value)}
                />
            </div>
            <div className="row justify-content-center">
            <input className="submit-btn col col-sm-4 col-md-3 col-lg-2 col-xl-1 mt-5" type="submit" value="Add Show" />
            </div>
            
        </form>
    )
}

export default Form
