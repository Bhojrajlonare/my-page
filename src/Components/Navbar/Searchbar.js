import React from 'react'

const Searchbar = () => {
  
  return (
    <div>
       <form>
        <label htmlFor="header-search">
            <span className='hiden'> </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="Email" 
        />
        <button>search</button>
    </form>

    </div>
  )
}

export default Searchbar
