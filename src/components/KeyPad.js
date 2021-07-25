import React from 'react';

const KeyPad = props => {
    const {onClick} = props;
    const click = (e) => onClick(e.target.name);
    const keys = ['(', 'CE', ')', 'C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];

    
    return (
        <> 
            { keys.map((key) =>  
                <button 
                    key={key} 
                    name = {key} 
                    onClick= {click}
                    className="w-1/4 h-12 text-base bg-gray-200 border border-gray-900 hover:bg-gray-100"
                > 
                {key} 
                </button>)}
        </>
    )
}

export default KeyPad;