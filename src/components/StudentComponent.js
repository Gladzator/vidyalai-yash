import React from 'react';
import dummyStudentData from './dummyStudentData';
import StudentItem from './StudentItem';

class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return(
      <div className="student_open">
        <div className="student_header">
          <h1 className="modal__title_student" onClick={this.props.onClickedStudents}>STUDENTS</h1>
          <div className="student_items">
            {dummyStudentData.map((data) => {
                return <StudentItem {...data}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
};
export default StudentComponent;
