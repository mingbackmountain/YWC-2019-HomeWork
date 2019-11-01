import React from 'react'
import styled from '@emotion/styled'
import {browserSizeRule} from '../utils/style'


const RegisterContainer = styled.div`
    position: relative;
`
const RegisterLink = styled.a `
text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.125rem;
  text-decoration: none;

  div {
    background: #213a8f;
    padding: 10px;
    border-radius: 5px;
    line-height: 1.5;
    box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin: 0 30px 50px;
    transition: background-color 0s ease-in-out, box-shadow 0s ease-in-out;

    ${browserSizeRule.tablet} {
      font-size: 1.5rem;
    }

    ${browserSizeRule.largeTablet} {
      max-width: 800px;
      margin: 0 auto 50px;
    }

    :hover {
      box-shadow: none;
      background: #fcbb33;
    }
`

const LineHr = styled.hr`
    display:none;

    ${browserSizeRule.tablet} {
      display: block;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      z-index: -1;
    }
`

export default () => {
   return(
       <RegisterContainer>
        <RegisterLink href='https://www.xn--b3caa1e2a7e2b0h2be.com/close.html'>
        <div>
          คงเหลือสิทธิลงทะเบียน เฟส 2
          <br />
          ตั้งแต่วันที่ 24 ต.ค. 62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.
          <br />
          (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
        </div>
        </RegisterLink>
        <LineHr/>
       </RegisterContainer>
   )
}