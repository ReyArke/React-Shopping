import React from 'react'

function CategoryButton({categoryName, current}) {
  return (
    
        <button  className={
            `${
                current && " bg-black text-white "
            } border px-4 py-2 me-2 border-black text-nowrap 
            }`}>
            {categoryName}
        </button>
    
  )
}

export default CategoryButton