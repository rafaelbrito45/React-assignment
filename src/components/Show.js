import {FaTimes,FaStar,FaHeart} from 'react-icons/fa';

const Show = ({show, onDelete,onToggle}) => {
    return (
        <div className="show-card col col-sm-5 col-md-3 col-lg-3 col-xl-3 mt-5" onDoubleClick={()=>onToggle(show.id)}>
            <div className="poster">
                <img src={show.image} alt="show poster" width="150" height="200"></img>
                <FaTimes className="close-btn" style={{color:'red', fontSize:'1rem'}} 
                    onClick={()=>onDelete(show.id)}/>     
            </div>
            <div>
                <h4>
                    {show.title}
                    {show.favorite?<FaHeart style={{color:'red',marginLeft:'1rem'}} />:''} 
                </h4>
            </div>

            <div className="rating" >
                <FaStar style={{color:'yellow',fontSize:'1.5rem',marginRight:'0.5rem'}}/>
                <p>{show.rating}</p>
            </div>

            
        </div>
    )
}

export default Show
