## Course Management Application

#### Project Features :

1. User can easily select course on their interested field.
2. User can check the credit hour and price before buying the course.
3. This application is very user-freindly. So that, anyone can easily access this.

## State Manage in this project :
In this project state managed by using React's built-in state management capabilities through the useState and useEffect hooks. This allowed to maintain, update, and share data within this application, enabling dynamic and responsive user interfaces.

For example, in initializing i used useState hook :
This creates a state variable for current and a corresponding function setCurrent to update its value.

 const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

For updating the state. 

setSelectedCourse([...selectedCourse, course]);
setTotalPrice((prevTotalPrice) => (parseFloat(prevTotalPrice) + course.price).toFixed(2));
setTotalCredit((prevTotalCredit) => prevTotalCredit + course.credit);
setRemaining((prevRemaining) => prevRemaining - course.credit);

This code updates the state variables based on the current state and the new data, ensuring that state remains consistent and up-to-date.

Also, used useEffect for data fetching, passing state as props etc. These things are used in this project to manage the state efficiently.
