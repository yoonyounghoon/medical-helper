import React, { useState, useEffect } from "react";
import Axios from "axios";
import HospitalList from "./HospitalList";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Search = ({ xPos, yPos }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  // 기관명으로 검색하는 버튼 클릭시 동작하는 부분
  const onClick = async e => {
    // 새로고침 방지
    e.preventDefault();

    // 데이터 가져오는 부분
    try {
      const response = await Axios.get(
        `/medicalHelper/emergency/emergentList/${text}/${1}`
      );
      setData(response.data.body.items);
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  // 지역으로 검색하는 부분

  const handleChangeQ1 = e => {
    setQ1(e.target.value);
  };
  const handleChangeQ2 = e => {
    setQ2(e.target.value);
  };
  const handleOnClick = async e =>{
    // 새로고침 방지
    e.preventDefault();

    // 데이터 가져오는 부분
    try {
      const response = await Axios.get(
        `/medicalHelper/emergency/emergentList/${q1}/${q2}/${1}`
      );
      setData(response.data.body.items);
      setQ1('');
      setQ2('');
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div>
      <form>
        이름으로 검색: &nbsp;
        <input
          type="text"
          placeholder="검색할 병원을 입력하세요."
          value={text}
          onChange={onChange}
          name="text"
        />
        <button variant="outlined" color="secondary" onClick={onClick}>
          검색
        </button>
      </form>
      <br/>
      지역으로 검색{" "}
      <form>
        <InputLabel >
          시/도
        </InputLabel>
        <Select value={q1} onChange={handleChangeQ1} autoWidth="true">
          <MenuItem value="서울특별시">서울특별시</MenuItem>
          <MenuItem value="부산광역시">부산광역시</MenuItem>
          <MenuItem value="대구광역시">대구광역시</MenuItem>
          <MenuItem value="인천광역시">인천광역시</MenuItem>
          <MenuItem value="광주광역시">광주광역시</MenuItem>
          <MenuItem value="대전광역시">대전광역시</MenuItem>
          <MenuItem value="울산광역시">울산광역시</MenuItem>
          <MenuItem value="세종특별자치시">세종특별자치시</MenuItem>
          <MenuItem value="경기도">경기도</MenuItem>
          <MenuItem value="강원도">강원도</MenuItem>
          <MenuItem value="충청북도">충청북도</MenuItem>
          <MenuItem value="충청남도">충청남도</MenuItem>
          <MenuItem value="전라북도">전라북도</MenuItem>
          <MenuItem value="전라남도">전라남도</MenuItem>
          <MenuItem value="경상북도">경상북도</MenuItem>
          <MenuItem value="경상남도">경상남도</MenuItem>
        </Select>

        <InputLabel >
          시/군/구
        </InputLabel>
        <Select value={q2} onChange={handleChangeQ2} autoWidth="true">
          <MenuItem value="마포구">마포구</MenuItem>
          <MenuItem value="종로구">종로구</MenuItem>
        </Select>
        <button onClick={handleOnClick}>찾기</button>
      </form>
      <br />
      병원목록
      <hr />
      <HospitalList data={data} />
    </div>
  );
};

export default Search;
