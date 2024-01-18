import './App.css';
import Userprofile from "./components/userprofile/index.js"

const App=()=>{



  let userdetails=
  [
    {
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    name:"Bhavith",
    age:23,
    role:"software developer",
    uno:1
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name:"Vijay",
      age:23,
      role:"software developer",
      uno:2
    },{
      image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name:"Ramesh",
      age:23,
      role:"software developer",
      uno:3

    }
 ] 

 

  search=(event) => {
    
    console.log(event.target)
  }

  return(
    <div>
       
      <h1>User Details List</h1>
      <input onChange={this.search} placeholder="search here" class="input" type= "text"/>
      <ul>
      {userdetails.map((eachelement) => <Userprofile details={eachelement} key={eachelement.uno}/>)}
        
      </ul>

      
    </div>
  )

}

export default App;
