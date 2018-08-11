import React from 'react';

const StudentItem = (data) => (
  <div>
    <div>
      {
        data.id===1
        &&
        <div className="student_content">
          <div className="student_item">
            <div className="student_item_circle_1">
              <h3 className="student_sname">{data.sname}</h3>
            </div>
            <div className="student_name_head">
              <h3 className="student_name">{data.name}</h3>
            </div>
          </div>
          <img className="student_item_image" src="/images/phone.png"></img>
        </div>
      }
      {
        data.id===2
        &&
        <div className="student_content">
          <div className="student_item">
            <div className="student_item_circle_2">
              <h3 className="student_sname">{data.sname}</h3>
            </div>
            <div className="student_name_head">
              <h3 className="student_name">{data.name}</h3>
            </div>
          </div>
          <img className="student_item_image" src="/images/phone.png"></img>
        </div>
      }
    </div>
  </div>

);

export default StudentItem;
