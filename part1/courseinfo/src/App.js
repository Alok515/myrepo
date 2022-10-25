
const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) =>{
  return (
    <>
    <Part part={props.parts[0].name} ex={props.parts[0].exercise} />
    <Part part={props.parts[1].name} ex={props.parts[1].exercise} />
    <Part part={props.parts[2].name} ex={props.parts[2].exercise} />
    </> 
  );
}

const Part = (props) => {
  return (
    <p>{props.part} {props.ex}</p>
  );
}

const Total = (props) =>{
  return (
    <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  );
}



function App() {

  const course = {
    name:'Half Stack application development',

   parts : [{
    name:'Fundamentals of React',
    exercise : 10
  }
,
 {
    name : 'Using props to pass data',
    exercise : 7
  },
  {
    name :'State of a component',
    exercise : 14
  }
]
};


  return (
    <div>
      <>
      {console.log(course)}
      <Header course = {course.name}/>
      {console.log(course.parts)}
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      </>
    </div>
  );
}

export default App;
