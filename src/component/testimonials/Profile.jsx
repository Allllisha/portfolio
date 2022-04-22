import "./testimonials.scss";
import march from "./march-arisa.png"
import arisa from "./Arisa.jpeg"
import image from "./image.jpg"

export default function Profile() {
  const data = [
    {
      id: 1,
      name: "Violinist",
      title: "classical & jazz",
      img:
        `${arisa}`,
       
      desc:
        "I'm a classically trained violinist and had study and work in the UK and Germany. I obtained a Bachelor in Tokyo University of the Arts, and obtained a Master in Guildhall School Music and Drama in the UK.",
    },
    {
      id: 2,
      name: "Fullstack Developer",
      title: "React, Ruby on Rails",
      img:
      `${image}`,
      desc:
        "I completed 24weeks web development course and graduated Le Wagon Tokyo on March 2022. My tech stacks are Ruby on rails, react, Javascripts, Typescript, HTML, CSS(scss), Docker.",
      featured: true,
    },
    {
      id: 3,
      name: "Operation Tech Supervisor",
      title: "IT support teams",
      img:
      `${march}`,
      desc:
        "Currently, I'm a operation supervisor and supervising 20 people in my team. I report KPI and JP markets tendencies to the client. I also used to work as a tier2 and tier3 IT support specialist.",
    },
  ];
  return (
    <div className="testimonials" id="profile">
      <h1>Who am I ?</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
