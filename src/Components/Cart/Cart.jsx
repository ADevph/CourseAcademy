
import React from "react";


const Cart = ({ selectedCourse, remaining, totalPrice , totalCredit }) => {
  return (

    <div className="">

    <div className="card flex w-96 h-96 bg-white rounded-xl ml-12 shadow-lg">
      <div className="card-body">
            <h2 className="card-title text-center text-[#2F80ED] ml-10 "> Credit Hour Remaining: {remaining} hr</h2>
        <hr />
        <p className=" font-bold text-start text-xl ">Course Name :
        
        <ol className=" text-[#1C1B1B99] ">
         
          {selectedCourse.map((course, idx) => (
            <li key={course.id}> {idx + 1}. {course.course_title}</li>
          ))}

        </ol>
        
        </p>
        <hr />

        
        <h5 className=" text-base text-start font-semibold">Total Credit Hour: {totalCredit}</h5>
<hr />
        <h5 className=" text-base text-start font-semibold">Total Price: {totalPrice} USD</h5>
        <hr />
      </div>
    </div>


    </div>
  );
};

export default Cart;
