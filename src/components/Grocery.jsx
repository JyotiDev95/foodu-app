import React from 'react'

const Grocery = () => {
  return (
    <div className='p-4 bg-slate-100 text-center text-xl'>
      <h2>This is another component which will be not render on initial render becouse it's cover in the lazy loading so it will be render after 3 seconds when we click to this page link to call or try to render this component</h2></div>
  )
}

export default Grocery