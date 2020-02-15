import React, { Component } from 'react';
import {Header,Body,Footer} from "./layout";
import Grid from '@material-ui/core/Grid';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import Appointment from "./container/Appointment"
import Checkdetail from "./container/Checkdetail";
import AppointmentCheck from "./container/appointment_check/AppointmentCheck";

import LoginPage from '../LoginPage';


//내건강관리페이지의 메인홈페이지
class MyHealthCheckMain extends Component {
    render() {
        return (
            <div>
                    <Grid
                        container
                        item sm = {9} 
                        direction="column"
                        justify="space-between"
                        alignItems="stretch"
                        spacing={10}
                    >
                        <Grid 
                            item sm
                            direction="row"
                        >
                            <Link to="/signIn">
                                 <Button>회원가입</Button>
                            </Link>
                            {/* <Header /> */}
                            

                        </Grid>    


                        <Grid item sm>
                            <Body/>
                        </Grid>

                        <Grid item sm>
                            <Footer />
                        </Grid>
                    
                    </Grid>

            </div>
        );
    }
}

export default MyHealthCheckMain;