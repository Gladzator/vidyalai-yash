import React from 'react';
class InputComponent extends React.Component {
  render (){
    return(
        <div className="input_area">
          <div className="inputWithView">
            <textarea
              type="text"
              className="input_message"
              placeholder="Type your Message"
            />
            <img className="input_icon" src="/images/input_icon.png"></img>
          </div>
            <img className="send_icon" src="/images/send_icon.png"></img>
        </div>

    )
  }
};
export default InputComponent;
