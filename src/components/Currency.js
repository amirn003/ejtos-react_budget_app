import React, {useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
    return (
        <div className='alert alert-success'>
            <span>
            <label for="currency">Currency: </label>
             
            <select name="currency" id="currency" value={currency} onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            </span>
        </div>
    );
};
export default Currency;
