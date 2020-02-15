// 진료예약
// 리스트에 가까운 병원이 나오고 그걸 선택하는게 있고 그리고 병원예약시간 그리고 증상
// Date는 2020-01-15 Time은 스트링으로 0900

// 병원 api를 가져와서 현재 위치에서 가까운 병원을 출력해주는거야

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

let xPos = 0;
let yPos = 0;

const Appointment = () => {
  const [symptom, setSympmtom] = useState("");


  const handleSypmtom = e => {
    setSympmtom(e.target.value);
  };
  
  // componentDidMount
  useEffect(() => {
    
    // // 현재위치를 구하는 값
    // // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
      navigator.geolocation.getCurrentPosition(function(position) {
              xPos = position.coords.latitude; // 위도
              yPos = position.coords.longitude; // 경도
              
              const get = async () => {
                try {
                    const response = await Axios.get(`/medicalHelper/hospital/gps/around/${yPos}/${xPos}?pageNo=${1}`);
                    console.log(response.data)
                  } catch (e) {
                      console.log(e);
                }
            };
            get();
              console.log(xPos, yPos);
            });
    }
  }, []);

  return (
    <div>
      <form>
        병원리스트 :{" "}
        <FormControl>
          <NativeSelect
            //value={state.age}
            //onChange={handleChange('age')}
            name="age"
            inputProps={{ "aria-label": "age" }}
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        <br />
        <br />
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2020-02-10T10:30"
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <br />
        증상 :{" "}
        <input
          type="text"
          value={symptom}
          name="symptom"
          onChange={handleSypmtom}
        />
        <br />
        <br />
        <Button variant="contained" color="secondary">
          진료예약
        </Button>
      </form>
    </div>
  );
};

export default Appointment;