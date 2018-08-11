import React from 'react';
import dummydata from './dummydata';
import StudentShortList from './StudentShortList';
import moment from "moment";

class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: undefined
    }
  };
  componentWillUpdate(prevProps,prevState) {
    console.log(prevState.id);
    console.log(prevProps.id);
  }
  checkId = () => {
    console.log(this.state.id)
    if(this.props.id === this.state.id) {
        return true;
    } else {
        this.setState(() => ({ id: this.props.id }));
        return false;
    }
  };
  render (){
    return(
      <div>
          <div className="messages">
            {
              this.props.type === 'sent'
              &&
              <div className="message_box">
                <h3 className="message_text">{this.props.text}</h3>
                <h3 className="message_time">{moment().format('LT')}</h3>
              </div>
            }{
              this.props.type === 'received'
              &&
              <div className="received_message">
                <div className="profile_circle">
                  {
                      this.checkId() && <div className="blue_circle" />
                  }
                </div>

              <div className="message_box_received">
                  <h3 className="message_text">{this.props.text}</h3>
                  <h3 className="message_time_received">{moment().format('LT')}</h3>
                </div>
              </div>

            }
          </div>
        </div>
    )
  }
};
export default GroupChat;
