import React from 'react';
import Modal from 'react-modal';
import SubjectComponent from './SubjectComponent';
import StudentComponent from './StudentComponent';

class ChatPortalModal extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    head_selectedOption: 'Subject'
  }
  onClickedSubject = () => {
    this.setState(() => ({
      head_selectedOption: 'Students'
    }));
  }
  onClickedStudents = () => {
    this.setState(() => ({
      head_selectedOption: 'Subject'
    }));
  }
  render (){
    return(
      <Modal
        isOpen={!!this.props.selectedOption}
        className="modal"
        overlayClassName="detail_modal"
        portalClassName="detail_modal"
      >
        <div>
          {
            this.state.head_selectedOption === 'Subject'
            ?
              <SubjectComponent
                onClickedSubject={this.onClickedSubject}
              />
            :
              <StudentComponent
                onClickedStudents={this.onClickedStudents}
              />
            }
        </div>
    </Modal>
    )
  }
};
export default ChatPortalModal;
