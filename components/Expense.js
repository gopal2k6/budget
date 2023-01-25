import ExpanseItem from "./ExpanseItem";
import './Expense.css';
import Card from "./UI/Card";

const Expense = (props)=>{

return(

    <Card className="site-container">
        
       { console.log(props.item) }

        <ExpanseItem title={props.item[0].title} date={props.item[0].date} price={props.item[0].price}/>
        <ExpanseItem title={props.item[1].title} date={props.item[1].date} price={props.item[1].price}/>
        <ExpanseItem title={props.item[2].title} date={props.item[2].date} price={props.item[2].price}/>
        <ExpanseItem title={props.item[3].title} date={props.item[3].date} price={props.item[3].price}/>
    </Card>
)

}

export default Expense;