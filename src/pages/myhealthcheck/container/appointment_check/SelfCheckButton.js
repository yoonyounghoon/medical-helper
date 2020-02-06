import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "../../style/useStyles";
//버튼 어떻게 구현되는건지 물어보기
//처방입력시 서버에 전송되는 데이터 물어보기
/**
 * 버튼 상태
 * 예약완료 (state 예약)
 */

class SelfCheckButton extends Component {
    state = {
        doctorName: "",
        breakfast: false,
        lunch: false,
        dinner: false,
        deadline: "", //달력
        solution: "",
        title: "",

        serverDate: this.props.serverDate,
        serverTime: this.props.serverTime,
        toggle: false, // false-> 예약완료, true->처방입력
        open: false, //처방입력 모달창 오픈 유무
    }

    //모달창 열기
    handleClickOpen = (e) => {
        this.setState({
            open: true,
        })
    }
    //모달창 닫기
    handleClickClose = (e) => {
        this.setState({
            open: false,
        })
    }

    //모달창 완료 버튼 클릭 시 서버로 데이터 전송
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Here is handleFormSubmit in SelfCheckButton");
        console.log("변경 된 date 값 >>", this.state);
    }

    //시간비교
    componentDidMount = () => {
        try {
            const {serverDate, serverTime,toggle} = this.state;
            const preDate = new Date();
            const year = preDate.getFullYear();
            const month = preDate.getMonth()+1;
            const date = preDate.getDate();

            const currentDate = addZero(year)+"-"+addZero(month)+"-"+addZero(date); //현재날짜 string 2020-02-06
            const currentTime = addZero(preDate.getHours())+":"+addZero(preDate.getMinutes()); //현재시간 string 18:03
            
            console.log("현재날짜 >>>",currentDate+" "+currentTime);
            console.log("서버날짜 >>>",serverDate+" "+serverTime);

            if(currentDate+" "+currentTime > serverDate+" "+serverTime){
                if(!toggle)
                    this.setState({
                        toggle:true,
                    });
                console.log("지났으니까 처방입력으로 전환")
            }
            
            //(ex) 시간표시 6:5 -> 06:05로 변환
            function addZero(time){
                if(time<10)
                    time="0"+time;
                return time;
            }
            
            
        } catch (e) {

        }


    }

    
    // form valueChange
    handleValueChange = (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
  
    // checkbox toggle
    handleToggle = name => event => {
        this.setState({ 
            // this.state.breakfast,
            [name]: event.target.checked,
        });
    }

    render() {
        const classes = useStyles.bind();
        const {status} = this.props;
        
        const {doctorName, breakfast, lunch, dinner, deadline, solution, title, toggle} = this.state;
        
        return (
            <div>
                {console.log(toggle)}

                {/* 예약시간전 상태(예약)*/}
                {status==="예약완료"&&!toggle&&
                    <Button variant="contained" color="secondary"> 
                        예약완료
                    </Button>
                }
            
                {/* 예약시간후 상태(예약)*/}
                {status==="예약완료"&&toggle&&
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    처방입력
                </Button>
                }

                {/* 처방입력후 상태(처방)*/}
                {status==="처방완료"&&
                <Button variant="outlined" color="primary">
                    처방내역
                </Button>
                }      

                {/* 모달창 start */}
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClickClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <DialogTitle>처방입력</DialogTitle>
                  <form onSubmit={this.handleFormSubmit}>
                      <DialogContent>

                      <TextField
                            id="standard-basic"
                            label="제목"
                            name="title"
                            fullWidth
                            variant="outlined"
                            value={title}
                            onChange={this.handleValueChange}
                            />
                            <br />
                            <br />
                            <TextField
                            id="standard-basic"
                            label="처방내용"
                            rows="6"
                            multiline
                            fullWidth
                            variant="filled"
                            name="solution"
                            value={solution}
                            onChange={this.handleValueChange}
                            />
                            <br />
                            <br />
                            <TextField
                            id="standard-basic"
                            label="교수이름"
                            fullWidth
                            variant="outlined"
                            name="doctorName"
                            value={doctorName}
                            onChange={this.handleValueChange}
                            />
                            <br />
                            <br />
                            {/* 아침 점심 저녁 toggle */}
                            <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">복용시간</FormLabel>
                                <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={breakfast} onChange={this.handleToggle('breakfast')} value={breakfast} />}
                                    label="breakfast"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={lunch} onChange={this.handleToggle('lunch')} value={lunch} />}
                                    label="lunch"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={dinner} onChange={this.handleToggle('dinner')} value={dinner} />}
                                    label="dinner"
                                />
                                </FormGroup>
                            </FormControl>
                            <br />
                            <br />
                            <TextField
                            id="datetime-local"
                            helperText="~까지"
                            type="date"
                            name="deadline"
                            variant="outlined"
                            style={{width:200}}
                            value={deadline}
                            onChange={this.handleValueChange}
                            />
                          <br />
                      </DialogContent>

                      <DialogActions>
                          <Button variant="outlined" color="primary" onClick={this.handleClickClose}>취소</Button>
                          <Button type="submit" variant="contained" color="secondary" onClick={this.handleClickClose}>완료</Button>
                      </DialogActions>

                  </form>
              </Dialog>
            {/* 모달창 end */}


            </div>
        );
    }
}

export default SelfCheckButton;