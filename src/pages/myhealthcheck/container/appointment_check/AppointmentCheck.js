// 진료예약 확인
import React, { Component } from 'react';
import AppointmentCheckList from './AppointmentCheckLilst';
import Axios from "axios";
// import Moment from 'react-moment';

//임시 데이터로 테스트 -> 서버에서 데이터 받아와야함
class AppointmentCheck extends Component {
  state={
    items: [
      // {
      //   id: 0,
      //   hospital:[],
      //   reserveDate: "2020-02-06",
      //   reserveTime: "21:00",
      //   status: "예약완료",
      //   symptom: "두통"
      // },
      // {
      //   id: 1,
      //   hospital:[],
      //   reserveDate: "2020-02-06",
      //   reserveTime: "21:00",
      //   status: "처방완료",
      //   symptom: "두통"
      // },
    ],
      
  }

  componentDidMount = async () => {
    try {
        const response = await Axios.get("/medicalHelper/reservation"); 
        const { status, data } = response;
        if (status == 200) {
            console.log(data);
            const { state } = this;
            this.setState({
                ...state,
                items: data,
            });
        }
        
    } catch (e) {
      console.log(e);
    }
}
  
  render() {
    const {items} = this.state;
    
    return (
      <div>
        <AppointmentCheckList items={items}/>
      </div>
    );
  }
}

export default AppointmentCheck;
