import React from 'react';
import ChatPortalModal from './ChatPortalModal';

class DashboardPage extends React.Component {
  state = {
    selectedOption: undefined
  }
  onCircleClicked = () => {
    this.setState(() => ({
      selectedOption: true
    }))
  }
  onCircleCloseClicked = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  closeModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  render() {
    return (

      <div>
        {
          this.state.selectedOption === undefined
          ?
            <div class="circle" onClick={this.onCircleClicked}></div>
          :
          <div>
            <div class="circle" onClick={this.onCircleCloseClicked}>
              <div class="circle_name">Ay</div>
              <div class="online_circle"></div>
            </div>
              <ChatPortalModal
                selectedOption={this.state.selectedOption}
                closeModal={this.closeModal}
              />

          </div>

        }

      </div>
    );
  }
}


export default DashboardPage;
