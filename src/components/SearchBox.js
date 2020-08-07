import React from 'react';

// bring in searchChange from mapDispatchToProps
// onChange input filter the robots responsively
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <form className="example">
                <input 
                    className='pa3 ba b--green bg-lightest-blue' 
                    type="search" 
                    placeholder="search robots" 
                    name="search"
                    onChange={searchChange}
                />
            </form>
        </div>
    );
}

export default SearchBox;