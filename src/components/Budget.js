import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (e) => {
        const newBudget = e.target.value;
        setEditableBudget(newBudget);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
        if (newBudget > 20000){
            alert("Warning! Your budget exceed 20000!")
            return;
        }
        if (newBudget < totalExpenses){
            alert("Warning! Your budget is lower than the expenses ",expenses,"!")
            return;
        }

    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}  
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={editableBudget}
                    onChange={handleBudgetChange}
                /> 
            </span>
        </div>

        
    );
    
};

export default Budget;