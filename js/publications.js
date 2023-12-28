export default function Publications() {
  const myPubs = [
    {
      year: '2014',
      pubs: [{
        badge: "Journal paper",
        journal: "Computer Systems & Applications",
        title: "Design and Realization of Report Management System Generator for Web Application",
        author: ["WANG Su-Xia", "YU Fang", "Zang Hui"],
        extra: "23(1):28-32",
        link: 'http://www.c-s-a.org.cn/csa/article/abstract/20140105',
      }]
    }, {
      year: '2011',
      pubs: [{
        badge: "Translation",
        journal: "China Water & Power Press",
        title: "Virtual Honeypots: From Botnet Tracking to Intrusion Detection",
        author: ["Haojun Zhang", "etc."],
        extra: "ISBN:9787508480169",
        comment: "",
        link: "https://baike.sogou.com/v63165979.htm",
      }]
    }
  ];
  const pubList = myPubs.map(pub => <div key={pub.year}>
    <h2 className="bibliography">{pub.year}</h2>
    <ol className="bibliography">
      {pub.pubs.map((item, index) => <li key={index}>
        <div className="row">
          <div className="col-sm-2 abbr"><abbr className="badge">{item.badge}</abbr></div>
          <div id="9903602" className="col-sm-8">
            <div className="title"><a href={item.link} target="_blank">{item.title}</a></div>
            <div className="author"> {item.author.join(', ')}</div>
            <div className="periodical"> <em>{item.journal}</em>, {pub.year} </div>
            <div className="periodical"> </div>
            <div className="links"> </div>
            <div className="badges"> <span className="altmetric-embed altmetric-hidden" data-hide-no-mentions="true"
                data-hide-less-than="15" data-badge-type="2" data-badge-popover="right"
                data-doi="10.1109/TVCG.2022.3209456" data-uuid="f4ed6b68-9ceb-17c0-f0ee-13b178e99db6"></span> </div>
          </div>
        </div>
      </li>
      )}
    </ol>
  </div>

  )
  return <article>
  <div className="publications">
    {pubList}
  </div>
</article>;
}