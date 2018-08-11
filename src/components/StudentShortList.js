import React from 'react';

const StudentShortList = (data) => (
  <div>
    <div className="header_background">
      {
        data.id===1
        &&
          <div className="student_circle_1">
            <div class="online_circle_header"></div>
            <h3 className="student_header_name">{data.name}</h3>
        </div>
      }{
        data.id===2
        &&
          <div className="student_circle_2">
            <div class="online_circle_header"></div>
            <h3 className="student_header_name">{data.name}</h3>
          </div>
      }{
        data.id===3
        &&
          <div className="student_circle_3">
            <div class="online_circle_header"></div>
            <h3 className="student_header_name">{data.name}</h3>
          </div>
      }{
        data.id===4
        &&
          <div className="student_circle_4">
            <div class="online_circle_header"></div>
            <h3 className="student_header_name">{data.name}</h3>
          </div>
      }{
        data.id===5
        &&
          <div className="student_circle_5">
            <div class="online_circle_header"></div>
            <h3 className="student_header_name">{data.name}</h3>
          </div>
      }

    </div>
  </div>

);

export default StudentShortList;
