import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const Search = ({ xPos, yPos }) => {

  const [type, setType] = useState("");

  const onClick = e => {
    // 새로고침 방지
    e.preventDefault();

    // 값저장
    setType(e.target.value);

    console.log(type);

    // 데이터 가져오는 부분
    // try{
    //   const response = Axios.get(`/medicalHelper/hospital/gps/name/${xPos}/${yPos}/${name}?pageNo=${1}`)
    // }catch(e){
    //   console.log(e);
    // }

  };
  return (
    <div>
      {/* 검색창을 통해 병원리스트 출력
       <input
        type="text"
        placeholder="검색할 병원을 입력하세요."
        value={text}
        onChange={onChange}
        name="text"
      />
      <Button variant="outlined" color="secondary" onClick={onClick}>
        검색
      </Button> 
      */}
      <br />

      <Button variant="outlined" value="내과" color="primary" onClick={onClick}>
        내과
      </Button>
      &nbsp;
      <Button variant="outlined" value="소아과" color="primary" onClick={onClick}>
        소아과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary" onClick={onClick}>
        피부과
      </Button>
      &nbsp;
      <Button variant="outlined" value="정형외과" color="primary" onClick={onClick}>
        정형외과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        외과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        가정의학과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        신경외과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        마취통증과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        성형외과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        산부인과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        안과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        정신의학과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        비뇨기과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        치과
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        한의원
      </Button>
      &nbsp;
      <Button variant="outlined" value="피부과" color="primary">
        노인
      </Button>
      {xPos},{yPos}
    </div>
  );
};

export default Search;
