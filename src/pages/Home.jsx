import React from 'react'

function Home() {
  return (
    <div className="form-control">
      <div className="input-group input-group-lg w-8/12">
        <input type="text" placeholder="Search…" className="input input-bordered input-lg w-8/12" />
        <button className="btn btn-square h-auto w-20 text-lg">
            Go
        </button>
      </div>
    </div>
  )
}

export default Home