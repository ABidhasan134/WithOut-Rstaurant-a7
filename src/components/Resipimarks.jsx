import React from 'react'

const Resipimarks = ({handelremove,recipe,indx}) => {
  return (
    <div
          key={recipe.recipe_id}
          className="sm:flex justify-center items-center grid
          mt-5 mb-2 mx-0 bg-gray-100 p-2 shadow-md"
        >
          <p className="sm:relative sm:flex hidden  sm:left-7 justify-start text-2xl font-bold">{indx+1}</p>
          <div className="flex gap-5 sm:gap-28 sm:ml-24  items-center">
            <p className='ml-2 text-wrap overflow-clip sm:w-auto w-[166px]'>{recipe.recipe_name}</p>
            <p className="relative ">{recipe.preparing_time} min</p>{" "}
            {/* You can replace "Time" with the actual preparing time */}
            <p className="relative sm:pr-2 pr-0 sm:mr-4 mr-0">{recipe.calories} calories</p>{" "}
            {/* Replace "Carlos" with the actual calories */}
          </div>
          <button
            className="btn bg-green-400 hover:bg-green-800 hover:text-white"
            onClick={()=>{handelremove(recipe,recipe.recipe_id)}}
          >
            Preparing
          </button>
        </div>
  )
}

export default Resipimarks
