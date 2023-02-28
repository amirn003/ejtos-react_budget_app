import React from 'react';

const Currency = () => {
    
    return (
        <div className='alert alert-success'>
            <span>
            <label for="currency">Currency: </label>
             
            <select name="currency" id="currency">
                <option value="dollar">$ Dollar</option>
                <option value="pound">£ Pound</option>
                <option value="euro">€ Euro</option>
                <option value="rupee">₹ Ruppee</option>
            </select>
            </span>
        </div>
    );
};
export default Currency;
