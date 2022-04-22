import { useState } from "react";
import "./works.scss";
import allow from "./allow.png"
import MovieList from "./MovieList.png"
import Taktivent from "./taktivent.png"
import Youtube from "./youtube.png"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "MovieList",
      desc:
        "MovieList app allows users to make own lists with their selected movies. Users are able to follow the lists which is created by other users and also can leave comments and ratings in the list and movies. Used Rails API, React",
      img: `${MovieList}`,
      url: "https://github.com/Allllisha/MovieLists"
    },
    {
      id: "2",
      title: "Taktivent",
      desc:
        "Taktivent is a real time feedback app for performers. Performer can make a flyer and this flyer page will change to an events programme when event starts. Performer can set any questions they would like to ask to the audience. This app will aggreagte ratings and data from the audience." ,
      img:
      `${Taktivent}`,
      url: "https://github.com/Allllisha/taktivent"
    },
    {
      id: "3",
      title: "Le wagon demoday",
      desc:
        "This is a youtube video of Demoday at Le wagon tokyo! If you are interested in my Taktivent project more, please check out 44:27~ from here!",
      img:
      `${Youtube}`,
      url: "https://www.youtube.com/watch?v=So6jxkBLk18&t=1172s"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.url}>Github & Links</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={allow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={allow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}