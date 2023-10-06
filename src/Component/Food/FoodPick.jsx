import React,{useState} from "react"
import { foodData } from "./FoodData"
import './FoodPick.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const FoodPick = () => {
    const [meals, setMeals] = useState(foodData)

    const filterCats  = (category) => {
        setMeals(
            foodData.filter((item) => {
                return(
                    item.category === category
                ) 
            })
        );
    };
    return (
        <div className="food__pick">
            <h4>Our meal</h4>
            <div className="filter__div">
                <div className="filter__divs">
                     <button className="btn__orange" onClick={() => setMeals(foodData)}>All</button>
                     <button className="btn__orange" onClick={()=> filterCats("pizza")}>pizza</button>
                     <button className="btn__orange" onClick={()=> filterCats("chicken")}>chicken</button>
                     <button className="btn__orange " onClick={()=> filterCats("salad")}>salad</button>
                </div>
            </div>
            <div className="foodpick__grids">
                 {meals.map((data) => {
                     return (
                         <div className="foodpick__grid" key={data.id}>
                              <div className="foodpick__img">
                                   <img src={data.img} alt={data.title}/>
                              </div>
                              
                              <div className="food__price">
                                    <div className="food__prices"> {data.price}</div>
                                  
                              </div>
                               <div className="p">
                                     <p className="food__nm">{data.title}</p>
                                     <p className="moree">view more <ArrowRightAltIcon/></p>
                               </div>
                                
                             
                         </div>
                     )
                 })}
            </div>
        </div>

    )
}
export default FoodPick;