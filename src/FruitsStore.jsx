import Fruit from "./fruit"
export default function FruitsStore({fruits}){
    return(
        <div>
            <h3>Fruits:{fruits.length}</h3>
            {
                fruits.map(fruit=>
                <Fruit key={fruit.id} 
                fruit={fruit}></Fruit>)
            }
        </div>
    )
}