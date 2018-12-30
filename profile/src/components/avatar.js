import React, { Component } from "react";
//import Avatar from 'react-avatar';
import Avatar from '@material-ui/core/Avatar';

class MyAvatar extends Component {
  render() {
    const styles = {
      width: '250px',
      height: '250px',
      border: '1px solid white'

    };
    return (
      <Avatar alt="Rene Cruz" src="https://lh3.googleusercontent.com/ExV_7wsjK9TUjPUcMPlLyh9lrDOwfe735bG4l4MEDi-SkNgM30Zf0_73F_beqwa1NVCPtUrVRSjguVVVBBnv2nOMfKmgNnbV4mrLpw2X64SpQjNM2cq58sJiGD_0qav59EfcHnb9cNpHNiF68HyE4x_seaQZk5O3aN2n2BJfdq9EJgaVeSNcqpMMNlLuRoVcAHtruyv8n0DTM-NZhAQDTg89A8tpKVTXQrvIbyc9llbucuCYheX2IBhzkXEYjELHk_hJwjRdyGfASeISwkex7CnJCr3bsHfhITch2DSOpqGk4QhOM6CSu7cZPefHz4MH4HRhlVCieBpgad8r_iOvNoE8RnTjEpBa3YHHrPKL42iNUAr2gPagNrPZP92xYZoAsiy1DCMA-Vp_g_feZe3s4PCbf9OW5QGBglrKFli_OAK0Q3dOzD_AGtJtPY7N_GrK0Ik3ccdFAdlLMR3JbFCRSvEa5dPfrSdOjtkjBWQnfXclIpzpuxD7QRX8TVCK7iittG-PE1fkx1ZWppFhYHBLhMz3Bq8GJrWhUdO1HjP-M0zxQ5ZGKjVSoDuEC8rwshlt4RdNW_nHn_NDkvjla_cShXA31oqLe1hsYo0xlPsoLz4ewIHfxeaAqd7fZQ21JzCM=w929-h619-no" style={styles} />
    );
  }
}

export default MyAvatar;
