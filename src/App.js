import React, { useEffect,useState } from 'react';
import './App.css';
import Home from './Page/Home'
import Pagination from './components/Pagination/Pagination'
import Table from './components/Tabel/Tabel'
import Clock from 'react-live-clock';


function App() {

  const [posts, setPosts] = useState([]);
  const [search,setSearch] = useState('')
  const [update,setupdate]= useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostPerpage] = useState(10);
  const [height,setHeight]= useState(1322)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  if (search!==''){
     let A = [...posts]
     currentPosts= A.filter((el)=>el.country === search )
  }

  useEffect(()=>{
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(response=>response.json())
    .then(json=>setPosts(json))
    console.log("mounting")
    setTimeout(()=>{
      setupdate(!update)
    },20000)
    return()=>{
      fetch('https://coronavirus-19-api.herokuapp.com/countries')
      .then(response=>response.json())
      .then(json=>setPosts(json))
      console.log("updating")
    }
  },[update,postsPerPage])

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleFilter=(e)=>{
      if (e.target.value === "25") {
        setPostPerpage(25)
        setHeight(2000)
    } else if (e.target.value === "50") {
        setPostPerpage(50)
        setHeight(3000)
    } else if (e.target.value === "10") {
        setPostPerpage(10)
        setHeight(1300)
    }
  }

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <Home posts={currentPosts}/>
      <div>
        <div style={{position:'absolute',left:150,top:650}}>
          <select
            className="select-filter"
            onChange={handleFilter}
            >
                <option value={"10"}>10</option>
                <option value={"25"}>25</option>
                <option value={"50"}>50</option>
            </select>
        </div>
        <div style={{position:'absolute',right:150,top:650}}>
          <input
            placeholder = "Search"
            className="Search"
            type="text"
            value={search}
            onChange={handleSearch}
          />
			  </div>
		  </div>
      <Table detail={currentPosts}/>
     {search === "" && <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        height={height}
      />}
      <div style={{
        position:'absolute',
        paddingLeft:20,
        paddingRight:20,
        top:-20,
        left:'35%',
        borderRadius:20,
        backgroundColor:'#FF0742',
        color:'#ffffff',
        height:200,
        }}>
        <h1 style={{borderColor:'black',borderWidth:4,paddingTop:80}}>
          CORONA VIRUS LIVE UPDATE
        </h1>
        <h3 style={{textAlign:'center'}}><Clock format={'HH:mm:ss'} ticking={true} timezone={'Indonesia'} /></h3>
      </div>
      <p style={{textAlign:'center',color:'#FF0742'}}>Ⓒ 2020 FAKHRIL AK</p>
    </div>
  );
}

export default App;
