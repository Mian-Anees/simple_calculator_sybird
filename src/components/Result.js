import React from 'react';

const Result = props => {
    const {result} = props;
    return(
        <div className="h-10 bg-gray-400 w-full">
                <p className="text-2xl pl-4">{result}</p>
            </div>
    );
}
export default Result;