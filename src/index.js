import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Card = (props) =>
{
  console.log();
  return (
    <>
      <div className="cards">
        <div classname="card">
          <img src={props.imgsrc} className="img" alt="my pic" />
          <div className="card_info">
            <span className="card_category">{props.title} </span>
            <h3 className="cardtitle"> { props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>
                WatchNow
            </button>
            </a>
          </div>
        </div>
      </div>
    </>);
  
}
  const x=":smi";

ReactDOM.render( 
<>
<h1 className="heading_style"> Top 5 Netflix series </h1>
    <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A netflix original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
     <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A netflix original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
     <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A netflix original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    /> 
     <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A netflix original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    /> 
     <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A netflix original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    /> 
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

