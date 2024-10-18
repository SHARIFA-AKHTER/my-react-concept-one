
import './App.css'
import FruitsStore from './FruitsStore'

function App() {

  const fruits =[
    { id:1, name:'Mango',price:250},
    { id:2, name:'Banana',price:150},
    { id:3, name:'Orange',price:220},
    { id:4, name:'Apple',price:230},
    { id:5, name:'Jackfruit',price:240}
  ]
  
//   function handleClick(){
//     alert('button clicked')
//   }

//  const clickedTwo=()=>{
//   alert('handle clicked 2');
//   }

//   const addToFive =(num) =>{
//     alert(num+5);
//   }
  return (
    <>
    <h2>Fruit Store</h2>
   <FruitsStore  fruits={fruits}></FruitsStore>
        {/* <h1>Even Handler</h1>
        <button onClick={handleClick}>
          handle clicked
          </button>
        <button onClick={clickedTwo}>
          handle clicked 2
          </button>
          <button onClick={() =>{alert('Third clicked')}}>
            Third Clicked
          </button>
          <hr/>
          <button onClick={() => addToFive(3)}>
            Four Clicked
          </button> */}
    </>
  )
}

export default App
