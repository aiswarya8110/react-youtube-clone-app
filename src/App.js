import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import Channel from './Channel';
import Video from './Video';
import Topbar from './Topbar';

function App(){

  return (
    <>
      <Header />
      <div className="app__page">
        <Topbar/>
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <RecommendedVideos />
          </Route>
          <Route path="/search/:searchValue">
            <SearchPage />
          </Route>
          <Route path="/channel/:channelId">
            <Channel />
          </Route>
          <Route path="/video/:videoId">
            <Video />
          </Route>
        </Switch>
      </div>
      </>
  )
}

// const [inputValue, setInputValue] = useState("");
//   const [count, setCount] = useState(0);
//   const [lists, setLists] = useState([]);
//   const [isPending, startTransition] = useTransition();


//   const list_size = 10000;

//   function handleChange(e){
//     setInputValue(e.target.value);
//     startTransition(()=>{
//       const dataList = [];

//       for(let i = 0; i < list_size; i++){
//         dataList.push({value: e.target.value, id: `${i}`})
//       }

//       setLists(dataList);
//     })
//   }

//   return (
//     <>
//       <input type="text" value={inputValue} onChange={handleChange}/>
//       {lists.map((list)=>{
//         return <li key={list.id}>{list.value}</li>
//       })}
//       count: {count}
//     </>
//     )







// const timerIdRef = useRef(0);
// const [inputValue, setInputValue] = useState("");
// const [count, setCount] = useState(0);
// const [users, setUsers] = useState([]);
// const [lists, setLists] = useState([]);
// const [isPending, startTransition] = useTransition();
// console.log(isPending);

// // false
// // true
// // false

// const list_size = 10000;

// useEffect(()=>{
//   startTransition(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=> res.json())
//     .then((data)=> setUsers(data))
//   })
// },[])


// function handleChange(e){
//     const { value } = e.target;
//     setInputValue(value);
//     setCount((c)=> c+1);

//     startTransition(()=>{
//       const dataList = [];
//       for(let i=0; i< list_size; i++){
//         dataList.push({value: value, id: `${i}`})
//       }
//       setLists(dataList);
//     })
// }

// function addItem(){
//   setLists([...lists, {value: "new Item", id: lists.length++}])
// }

// function reverseArray(){
//   const dummyLists = [...lists];
//   setLists(dummyLists.reverse());
// }

// return (
//   <>
//     <input type="text" value={inputValue} onChange={handleChange}/>
//     { lists.length > 0 && <>
//         <button onClick={addItem}>Add item</button>
//         <button onClick={reverseArray}>reverse array</button>
//       </>
//     }
//     {/* {isPending ? <h1>Loading...</h1> : lists.map((list, index)=>{
//         return <div key={index}>{list.value}</div>
//     })} */}

//     {isPending ? <h1>Loading users...</h1> : users.map((list)=>{
//       return <li key={list.id}>{list.name}</li>
//     })}
//     count: {count}
//   </>
// )







// const [inputValue, setInputValue] = useState("");
//   const [count, setCount] = useState(0);

//   function changeHandler(e){
//       setInputValue(e.target.value);
//       setCount((c)=> c + 1);
//   }

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={changeHandler}/>
//       <p>{count}</p>
//     </div>
//   )



// const [showH1, setShowH1] = useState(true);
//   const elementRef = useRef();
//   console.log(elementRef.current);

//   useEffect(()=>{
//     console.log(elementRef.current);
//   },[showH1])

//   useLayoutEffect(()=>{
//     if(!showH1){
//       elementRef.current.style.color="blue";
//     }
//   },[showH1]);

//   return (
//     <>
//       {showH1 ? <h1 ref={elementRef}>Text inside Heading 1</h1> : <h2 ref={elementRef}>Text inside Heading 2</h2>}
//       <button onClick={()=> setShowH1(false)}>change heading</button>
//     </>
//   )


// const timerIdRef = useRef(0);
//   const [count, setCount] = useState(0);

//   function startHandler(){
//     timerIdRef.current = setInterval(()=>{
//       setCount((c)=> c + 1);
//     }, 1000)
//   }

//   function stopHandler(){
//     clearInterval(timerIdRef.current);
//   }

//   return (
//     <>
//       <p>Timer {count}s</p>
//       <button onClick={startHandler}>start</button>
//       <button onClick={stopHandler}>stop</button>
//       <button onClick={()=> setCount(0)}>reset</button>
//     </>
//   )



// const countRef = useRef(0);
// console.log(countRef.current);
// const [count, setCount] = useState(0);

// function increaseCountRef(){
//   countRef.current++;
//   console.log(`clicked ${countRef.current} times`);
// }

// function increaseCount(){
//   setCount(count+1);
// }

// console.log("rendered", `count ${count}`);

// return (
//   <>
//     <button onClick={increaseCountRef}>increase count ref</button>
//     <button onClick={increaseCount}>increase count</button>
//   </>
// )


// const [count, setCount] = useState(0);
  // const [users, setUsers] = useState([]);
  // const ref = useRef();

  // useEffect(()=>{
  //   console.log("count:", count);
  // },[count])

  // useLayoutEffect(()=>{
  //   console.log("useLayoutEffect");
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((res)=> res.json())
    // .then((data)=>{
    //   setUsers(data);
    // });

  //   setCount(count+1);
  // },[])

  // console.log("computations");

  // return (
  //   <>
  //     data: {users.map((user)=>{
  //       return <p>{user.name}</p>
  //     })}
  //     <h1 ref={ref}>Count: {count}</h1>
  //     <button onClick={()=> setCount(count+1)}>increase count</button>
  //   </>
  // )

// const [title, setTitle] = useState("Heat");
//   const [releaseDate, setReleaseDate] =  useState("December 15 1995");
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(count+1);
//   }

//   const changeMovieDetails = useCallback((e)=>{
//     console.log(e.target);
//     setTitle("Heat 2");
//     setReleaseDate("December 15 1999")
//   },[])

//   return (
//     <>
//       <Movie title={title} releaseDate={releaseDate} changeMovieDetails={changeMovieDetails}/>
//       <p>Count: {count}</p>
//       <button onClick={increaseCount}>increase count</button>
//     </>
//   )






// const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo1", "todo 2"]);

//   function increaseCount(){
//     setCount(count+1);
//   }

//   const addTodo = useCallback(()=>{
//     setTodos((todos)=> [...todos, "new todo"])
//   })

//   return (
//     <>
//       <Todos todos={todos}/>
//       <div>
//         Count: {count}
//         <button onClick={increaseCount}>increment</button>
//       </div>
//     </>
//   )


// const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <form>
//       <input name="email"
//       type="text"
//       placeholder="email"
//       onChange={(e)=> setEmail(e.target.value)}
//       value={email}/>

//       <input name="password"
//       type="password"
//       placeholder="password"
//       onChange={(e)=> setPassword(e.target.value)}
//       value={password}/>

//       <button type="submit">submit</button>
//     </form>
//   )

// const [count, setCount] = useState(0);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(()=>{
//     if(loggedIn) alert("logged in");
//   }, [loggedIn])

//   function increaseCount(){
//     setCount(count + 1);
//   }

//   function decreaseCount(){
//     setCount(count - 1);
//   }

//   return (
//           <>
//           <button onClick={decreaseCount}>-</button>
//           {count}
//           <button onClick={increaseCount}>+</button>
//           <button onClick={()=> setLoggedIn(!loggedIn)}>set login</button>
//           <p>{loggedIn ? 'You are logged in' : 'You are not logged in'}</p>
//           </>
//         )




// const [user, setUser]  = useState({firstName: '', lastName: ''});

//     function handleChange(e){
//       const { name, value } = e.target;
//       setUser((prev)=>{
//         return {...prev, [name]: value}
//       })
//     }

//     console.log(user.firstName);

//     return <>
//      <input value={user.firstName} name="firstName" type="text" onChange={handleChange}/>
//      <input type="text" value={user.lastName} name="lastName" onChange={handleChange}/>
//      <button onClick={()=> alert(`${user.firstName} ${user.lastName}`)}>Submit</button>
//     </>






// const [query, setQuery] = useState(1);
//   const [user, setUser] = useState({});

//   useEffect(()=>{
//     if(query < 11){

//     function fetchUser(){
//       fetch(`https://jsonplaceholder.typicode.com/users/${query}`)
//       .then((res)=> res.json())
//       .then((data)=>{
//         console.log(user);
//         setUser(()=>{
//           return {name: data.name, phone: data.phone}
//         })
//       });
//     }
    
//     fetchUser();
//     }
//   },[query]);

//   return (
//     <div className="app" onClick={()=> setQuery(query + 1)}>
//       click
//       <p>Name: {user.name}</p>
//       <p>Phone: {user.phone}</p>
//     </div>
//   );












export default App;
