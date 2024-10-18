import './Fruit.css';
export default function fruit({fruit}){
    const{name,price} = fruit;
    return(
        <div className="fruit">
            <h3>FruitName:{name}</h3>
            <p>Price: {price}</p>
        </div>
    )
}