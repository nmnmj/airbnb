import React from 'react'

const Navbar = () => {
    let logoimg = "data:image/png;base64,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"
    let avatarimg="https://framerusercontent.com/images/RkV86hKSZ17yNsuZKWylbt86ZiI.png"
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-white bg-white navbarb">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#">
                    <img src={logoimg} alt="" width="100vw" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                  
                    <li className="nav-item" style={{marginLeft:"30vw"}}>
                    <a className="nav-link onclickred text-dark fw-bold stays" aria-current="page" href="#">Stays</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link onclickred text-dark " href="#">Experiences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link onclickred text-dark " href="#">Online Experiences</a>
                    </li>
                                      
                </ul>
                <form className="d-flex">
                    <a className="me-3" type="submit">
                        <img src={avatarimg} alt="" width="40vw" className='avatarimg' />
                    </a>
                </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
