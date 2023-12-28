import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Header() {
  const [path, setPath] = useState(location.pathname);
  function handleCurrentPath(url) {
    setPath(url); 
  }
  
  return <div className="page-wrapper">
    <div className="page-header header--fixed">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Suxia(Sophia) Wang</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link onClick={() => handleCurrentPath('/')} className={path === '/' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
                <Link onClick={() => handleCurrentPath('/cv')} className={path === '/cv' ? 'nav-link active' : 'nav-link'} to="/cv">CV</Link>
                <Link onClick={() => handleCurrentPath('/publications')} className={path === '/publications' ? 'nav-link active' : 'nav-link'} to="/publications">Publications</Link>
                <Link onClick={() => handleCurrentPath('/projects')} className={path === '/projects' ? 'nav-link active' : 'nav-link'} to="/projects">Projects</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    <div  className="container mt-5">
      <Outlet />
    </div>
  </div>;
}
