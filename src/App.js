import './App.css';
import {useState,useEffect} from 'react';
import Header from './components/Header';
import Shows from './components/Shows';
import Form from './components/Form';
import Footer from './components/Footer';



function App() {
  const [shows , setShows] = useState([])

  useEffect(()=>{
    const getShows = async() => {
      const showsFromServer = await fetchShows()
      setShows(showsFromServer)
    }
    getShows();
  },[])

  //fetch shows
  const fetchShows = async () => {
    const res = await fetch('http://localhost:5000/shows');
    const data = await res.json();

    return data;
  }

  const fetchShow = async (id) => {
    const res = await fetch(`http://localhost:5000/shows/${id}`);
    const data = await res.json();

    return data;
  }

  //add show
    const addShow = async (tvShow)=>{
      const getImg = await fetch(`https://api.tvmaze.com/search/shows?q=${tvShow.title}`)
      const imgdata = await getImg.json();

      tvShow.image= imgdata[0].show.image.medium;

      const res = await fetch('http://localhost:5000/shows',{
        method : 'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(tvShow)
      })
      const data = await res.json()

      setShows([...shows,data])

    }


  // delete show 
  const deleteShow = async (id) =>{
    await fetch(`http://localhost:5000/shows/${id}`, {method:'DELETE'})

    setShows(shows.filter((show)=> show.id!== id))
  }
  //toggle favorite
  const toggleFavorite = async (id)=> {
    const showToToggle = await fetchShow(id)
    const updShow = {...showToToggle,favorite:!showToToggle.favorite}

    const res = await fetch(`http://localhost:5000/shows/${id}`,{
      method : 'PUT',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify(updShow)
    })

    const data = await res.json()

    setShows(
      shows.map((show)=> show.id=== id ? {...show,favorite :data.favorite}:show)
    )
  }

  return (
    <div className="App container">
        <Header/>
        <Form onAdd={addShow}/>
        {shows.length>0 ?(<Shows shows={shows} onDelete={deleteShow} onToggle={toggleFavorite}/>):('No shows added')}
        <Footer/>
    </div>
  );
}

export default App;
