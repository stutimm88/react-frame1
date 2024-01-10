import React from 'react'

function Tabs() {
  return (
    <>
      <div className='container text-center p-3'>
        <div className="row">
          <div className="col-8 p-2">
            <ul className="nav nav-tabs nav-fill">
              <li className="nav-item h4">
                <a className="nav-link text-dark " aria-current="page" href="#">Overview</a>
              </li>
              <li className="nav-item h4">
                <a className="nav-link text-dark " href="#">Ongoing</a>
              </li>
              <li className="nav-item h4">
                <a className="nav-link text-dark " href="#">Upcoming</a>
              </li>
              <li className="nav-item h4">
                <a className="nav-link text-dark " href='#'> Ended</a>
              </li>
            </ul>

            <div className="row p-2">
              <div className="col p-3 h4">Project</div>
              <div className="col p-3 h4">Industry</div>
              <div className="col p-3 h4">Start Date</div>
              <div className="col p-3 h4">Status</div>
              <div className="col p-3 h4">Likes</div>
            </div>

            <div className='container'>
              <hr className='drodown-divider'/> 
            </div>
          </div>
          
          <div className="col-4">
          <button type="button" className="btn btn-light text-wrap btn btn-lg shadow bg-body-tertiary rounded fs-4" 
          style={{'width':'300px','height':'65px'}}>Use Free Forms </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Tabs
