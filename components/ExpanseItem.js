import React from 'react';
import './ExpanseItem.css'
import Card from './UI/Card';

const ExpanseItem = (props) =>
{
    const ExpanseMonth = props.date.toLocaleString('en-US',{month:"long"});
    const ExpanseDay = props.date.toLocaleString('en-US',{day:'numeric'})
    const ExpanseYear = props.date.getFullYear();

return(

<Card className="expense-item">
    <div className="expense-item__date">{ExpanseMonth}-{ExpanseDay}-{ExpanseYear}</div>
    <div className="expense-item__title">{props.title}</div>
    <div className="expense-item__price">{props.price}</div>
</Card>

)

}
export default ExpanseItem;