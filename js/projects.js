import Flight from '../assets/flight_1.png';
import Fans from '../assets/fans_1.png';
import Baina from '../assets/bn_1.png';
import WNews from '../assets/www_1.png';
import MNews from '../assets/xw_m.png';
import Zen from '../assets/zen_1.png';
import NBA from '../assets/nba_1.png';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [project, setProject] = useState({});

  const myProjects = [
    {
      url: 'https://zenvideo.qq.com',
      title: 'Tencent Zenvideo',
      img: Zen,
      description: 'Web Platform for end-to-end one-stop video editing and production services.',
      date: '2021',
    },
    {
      url: '',
      title: 'Baina Kanban',
      img: Baina,
      description: 'intuitive and easy-to-use data visualization platform to provide integrated data support for decision-makers.',
      date: '',
    },
    {
      url: 'https://xw.qq.com/mobile/index.html',
      title: 'Tencent News App',
      isMobile: true,
      img: MNews,
      description: 'Brand advertising for Tencent News App.',
      date: '',
    },
    {
      url: 'https://www.qq.com',
      title: 'Tencent Web Portal',
      img: WNews,
      description: 'Provide the latest breaking news in China and around the world — politics, finance, entertainment, sports and much more.',
      date: '',
    },
    {
      url: 'https://fans.sports.qq.com',
      title: 'Tencent Sports Community',
      img: Fans,
      description: 'Nurture Comprehensive Community Sport Clubs.',
      date: '',
    },
    {
      url: 'https://sports.qq.com/nba',
      title: 'Tencent NBA Web Portal',
      img: NBA,
      description: 'Provide online NBA event service',
      date: '',
    },
    {
      url: 'https://m.flight.qunar.com',
      title: 'Qunar Flight',
      isMobile: true,
      img: Flight,
      description: 'Provide domestic and international flight booking service',
      date: '',
    }
  ];

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }, []);

  return <div className="post">
  <header className="post-header">
    <h1 className="post-title">Projects</h1>
    <p className="post-description">A collection of my professional projects since 2014.</p>
  </header>
  <div className="box">
    {myProjects.map((project, index) => 
    <div className="card item" key={index}>
        <div className="thumbnail">
            <a href={project.url}
              target='_blank'
              onClick={e => {
                setProject(project);
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={project.img} className="img-responsive img-rounded" />
            </a>
            <div className="caption">
              <h4>{project.title}</h4>
              <p>
                <small className="desc">{project && project.description}</small>
              </p>
          </div> 
      </div>
    </div>)}
  </div>
  <div className="modal fade modal-proj" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            {(project && project.url) ? <span>Go visit <a
              href={project.url}
              target="_blank" 
              title={project && project.title}>
              {project && project.title}
            </a></span> : <span>{project.title}</span>}
            <span>-- {project.description}</span>
          </h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className={`modal-body ${(project && project.isMobile) ? 'modal-mobile' : ''}`}>
          <img src={project && project.img} className="img"/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>;
}