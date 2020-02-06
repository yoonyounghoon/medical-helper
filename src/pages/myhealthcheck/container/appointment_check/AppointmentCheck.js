// 진료예약 확인
import React, { Component } from 'react';
import AppointmentCheckList from './AppointmentCheckLilst';
// import Moment from 'react-moment';

//임시 데이터로 테스트 -> 서버에서 데이터 받아와야함
class AppointmentCheck extends Component {
  state={
    items:
    [
      {
        id: 0,
        hospital:[],
        reserveDate: "2020-02-06",
        reserveTime: "21:00",
        status: "예약완료",
        symptom: "두통"
      },
      {
        id: 1,
        hospital:"미정",
        reserveDate: "2020-02-06",
        reserveTime: "18:30",
        status: "예약완료",
        symptom: "복통"
      },
      {
        id: 2,
        hospital:"미정",
        reserveDate: "2020-02-05",
        reserveTime: "11:00",
        status: "처방완료",
        symptom: "복통"
      },
    ],

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
