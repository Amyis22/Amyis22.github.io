import MyPic from '../assets/prof_pic.jpeg';

export default function Home() {
  return <div className="container mt-5">
    <div className="post">
      <article>
        <div className="profile float-start">
          <figure>
            <picture>
              <source className="responsive-img-srcset" media="(max-width: 480px)" srcSet={MyPic}/>
              <source className="responsive-img-srcset" media="(max-width: 800px)" srcSet={MyPic}/>
              <source className="responsive-img-srcset" media="(max-width: 1400px)" srcSet={MyPic}/>
              <img src={MyPic} className="img-fluid z-depth-1 rounded"
                width="auto" height="auto" alt="prof_pic.jpg"
                onerror="this.onerror=null; $('.responsive-img-srcset').remove();"/>
            </picture>
          </figure>
        </div>
        <div className="clearfix">
          <p>Hi and welcome!<i className="fa-solid fa-hands-clapping"></i></p>
          <p>I graduated from Shenyang Institue of Computing Technology, 
            <a href="https://www.ucas.ac.cn/" rel="external nofollow noopener" target="_blank">China Academy of Sciences</a>,
             where I was advised by <a href="https://people.ucas.ac.cn/~0021221" rel="external nofollow noopener" target="_blank">Professor Yufang</a> and
              received a master's degree in Computer Applied Technology. I have been engaged in front-end design and development for 8 years, 
             and I have experience in data visualization. I’m motivated to delve deeper into the fields of visualization and computer graphics,
             and particularly interested in interdisciplinary research involving robotics and machine learning. </p>
          <p>I have worked as a web developer at Qunar and <a href="https://www.tencent.com/en-us" rel="external nofollow noopener" target="_blank">Tencent</a>,
             and been responsible for front-end design and development of various online product services. 
            During my 7 years at Tencent Technology (Beijing) Co. Ltd, as a senior experienced front-end developer, 
            I have participated in research development of multiple core products, including Tencent Open Platform,
             Tencent News, Tencent Zenvideo, Tencent Content Platform, striving to provide users with high-quality online  experiences. 
            Please check my <a href="/projects">projects-page</a>, where I have listed several projects that still provide online services. 
            Of course,  there are a couple of ToB or internal projects that I haven’t included. Most importantly, my extensive development experience
             will empower me in my future field of study.</p>
          <p>Apart from work, I'm very fond of fitness. I enjoy running, especially morning runs when the weather is nice. 
            I also love yoga and swimming, which I believe are more effective to exercise the entire body. 
            I maintain a frequency of 4-5 workouts per week and have kept up this intensity for over 5 years. 
            I always enjoy exploring the outdoors with my family. Besides, I love music very much. 
            Every day I play the piano with my 6-year-old daughter, we have so much fun together. </p>
        </div>
        {/* <h2><a href="/news/" style={{color: "inherit"}}>news</a></h2>
        <div className="news">
          <div className="table-responsive" style={{maxHeight: "60vw"}}>
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Dec 26, 2023</th>
                  <td> abcd </td>
                </tr>
                <tr>
                  <th scope="row">Dec 25, 2023</th>
                  <td>xx <a href=""
                      rel="external nofollow noopener" target="_blank">yy</a> at <a></a><a
                      href="" rel="external nofollow noopener" target="_blank">zz</a> working with <a href="" rel="external nofollow noopener"
                      target="_blank">aa</a> and <a href=""
                      rel="external nofollow noopener" target="_blank">bb</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
        <div className="social">
          <div className="contact-icons">
            <a href="mailto:wangsuxia.susan@gmail.com" title="email"><i className="fas fa-envelope"></i></a>
            <a href="https://github.com/amyis22" title="GitHub" rel="external nofollow noopener" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sophia-suxia-wang" title="LinkedIn"
              rel="external nofollow noopener" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="/" title="Twitter" rel="external nofollow noopener" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="contact-note"> The best way to reach me is via email or twitter! </div>
        </div>*/}
      </article>
    </div>
  </div>;
}