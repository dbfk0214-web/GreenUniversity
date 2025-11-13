import React from 'react'

const Navbar = ({children}) => {
  const drawMap = (mapData,keys) => {
    return ({mapData && mapData.map(data => 
        (
          <h1>{data}</h1>
        )
      )});
  }

  const {arrayData} = children;
  console.log(arrayData);

  return (
    <div>
      {map}
    </div>
  )
}

export default Navbar
