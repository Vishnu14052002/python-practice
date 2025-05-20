function CourseList() {
    // Define the Course component inside CourseList
    function Course(props) {
      return (
        <div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Degree: {props.degree}</p>
        </div>
      );
    }
  
    const courses = [
      {
        name: "vishnu",
        age: 24,
        degree: "Artificial Intelligence"
      },
      {
        name: "gowri",
        age: 24,
        degree: "Mech"
      },
      {
        name: "Litesh",
        age: 24,
        degree: "B.Com"
      }
    ];
  
    const coursesList = courses.map((course, index) => (
      <Course 
        key={index}
        name={course.name}
        age={course.age}
        degree={course.degree}
      />
    ));
  
    return (
      <>
      <h1>hello world</h1>
        {coursesList}
      </>
    );
  }
  
  export default CourseList;