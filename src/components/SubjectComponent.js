import React from 'react';
import dummydata from './dummydata';
import StudentShortList from './StudentShortList';
import GroupChat from './GroupChat';
import dummyMessages from './dummyMessages';
import InputComponent from './InputComponent'

class SubjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount () {
    this.myRef.current.scrollTop = this.myRef.current.scrollHeight;
  }
  render (){
    return(
      <div>
        <div className="subject_header">
          <div className="subject">
            {dummydata.map((data) => {
                return <StudentShortList {...data}/>;
            })}
            <div className="student_endof_space">...</div>
          </div>
          <h1 className="modal__title" onClick={this.props.onClickedSubject}>Chemistry</h1>
        </div>
        <div className="chat_field">
          <InputComponent />
        <div  ref={this.myRef} id="chat" className="chat">
          {dummyMessages.map((data) => {
              return <GroupChat {...data}/>;
          })}
        </div>
        </div>
      </div>
    );
  }
};
export default SubjectComponent;
