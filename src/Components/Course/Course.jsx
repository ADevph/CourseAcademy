
import React, { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { LuDollarSign } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import Swal from 'sweetalert2'

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const time = 20;

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);

  const handleAddCourse = (course) => {
    const isExist = selectedCourse.find((c) => c.id === course.id);

    if (isExist) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This course is already on the list. Try another!',
      });
    return;
    }

    if (totalCredit + course.credit > 20 || remaining - course.credit < 0) {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: ' You already have exceeded the available credits! '
      });
     return;
    }

    setSelectedCourse([...selectedCourse, course]);
    setTotalPrice((prevTotalPrice) => (parseFloat(prevTotalPrice) + course.price).toFixed(2));
    setTotalCredit((prevTotalCredit) => prevTotalCredit + course.credit);
    setRemaining((prevRemaining) => prevRemaining - course.credit);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="card w-full h-148 ml-8 bg-white rounded-xl shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  className="w-96 h-32 rounded-lg"
                  src={course.course_img}
                  alt={`Cover picture of the title ${course.course_title}`}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold">{course.course_title}</h2>
                <p className="text-sm text-[#1C1B1B99]">
                  {course.course_details}
                </p>

                <div className="flex gap-8 text-sm mb-2">
                  <div className="flex items-center">
                    <p className="p-1">
                      <LuDollarSign />
                    </p>
                    <p className="text-[#1C1B1B99] font-semibold">
                      Price : {course.price}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <p className="p-1">
                      <FiBookOpen />
                    </p>
                    <p className="text-[#1C1B1B99] font-semibold">
                      Credit: {course.credit} hr
                    </p>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn bg-[#2F80ED] border-solid border-1 rounded-lg w-64 h-8 hover:bg-[#2F80ED]"
                    onClick={() => handleAddCourse(course)}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <Cart
          selectedCourse={selectedCourse}
          remaining={remaining}
          totalPrice={totalPrice}
          totalCredit={totalCredit}
        />
      </div>
    </div>
  );
};

export default Course;
