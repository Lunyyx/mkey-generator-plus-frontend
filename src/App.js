import { useState } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [device, setDevice] = useState("CTR");
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  // const [deviceID, setDeviceID] = useState("");
  const [inquiryNb, setInquiryNb] = useState("");
  const [key, setKey] = useState("")
  const [error, setError] = useState("")

  const getMKey = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3001/?m=${month}&d=${day}&inquiryNumber=${inquiryNb}&device=${device}`).then(function(response) {
      if(!response.data.hasOwnProperty('error')) {
        setKey(response.data.master_key)
      } else {
        if(key) setKey("")
        setError(response.data.error)
      }
    })
  }

  return (
    <>
      <h1>MKey generator +</h1>

      <form onSubmit={getMKey}>
        <label>Device:</label><br />
        <select onChange={(e) => setDevice(e.target.value)}>
          <option value="CTR">3DS</option>
          <option value="WUP">Wii U</option>
          <option value="TWL">DSi</option>
          <option value="RVL">Wii</option>
          <option value="HAC">Switch</option>
        </select>

        <br /><br />

        <label>Console date:</label><br />
        <select onChange={(e) => setMonth(e.target.value)}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select onChange={(e) => setDay(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>

        <br /><br />

        {/*
        <label>Device ID (only for Switch 8.0.0+):</label><br />
        <input id="device_id" onChange={(e) => setDeviceID(e.target.value)} />

        <br /><br />
        */}

        <label>Inquiry number:</label><br />
        <input id="inquiry_number" pattern="[0-9]{10}" placeholder="0123456789" onChange={(e) => setInquiryNb(e.target.value)} required />

        <br /><br />

        <input type="submit" value="Generate MKey" />
        
        <br /><br />

        <label>{key && `Your master key: ${key}` || error}</label>
      </form>
    </>
  );
}

export default App;