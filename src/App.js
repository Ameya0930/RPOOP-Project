
import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Contact from './components/Contact';

function App() {
  // const [items,setItems] = useState([])
  // const inputRef = useRef()
  // function onSubmit(e){
  //   e.preventDefault()

  //   const value = inputRef.current.value
  //   if(value === "")return
  //   setItems(prev =>{
  //     return [...prev,value]
  //   })
  //   inputRef.current.value =""
  // }
  // function onChange(e){
  //   const value =e.target.value
  //   setItems(prev=>{
  //     return prev.filter(item => item.toLowerCase().includes(value.toLowerCase()))
  //   })
  // }
  return (
   <>
   <Navbar />

   {/* <Text /> */}

   <Content />
   <Contact />
   <br />
   {/* <div className='Search'>
   Search:
   <input onChange={onChange} type='search' id="mybar"/>
   <form onSubmit={onSubmit}>
    New Item:<input ref={inputRef} type="text" id="itembar"/>
    <button type="submit">Add</button>
   </form>
  
   <h3>Items:</h3>
   {items.map(item =>(
    <div>{item}</div>
   ))}
    </div> */}
    
   </>
  );
}

export default App;
