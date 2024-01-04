import MyCV from '../assets/suxia_cv.pdf';
export default function CV() {
  const URL = 'https://drive.google.com/file/d/1JPf-gmuFRmlh4m4pEpZylIZxSoxQkI0U/view';

  return <article  className="container">
    <h4 className='mb20'><a href={URL} target="_blank">SuxiaWang's CV</a></h4>
    <embed src={MyCV} type="application/pdf" width="1000px" height="1200px" />
  </article>
}