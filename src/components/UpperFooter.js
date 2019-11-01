import React from 'react'
import styled from '@emotion/styled'
import Logo from '../assets/footer/footer.png'
import {browserSizeRule} from '../utils/style'

const UpperFooterContainer = styled.div`
    background: #fafafa;
    padding: 44px 30px;

    .no-wrap {
        white-space: nowrap;
    }

    .container {
        padding: 0 30px;
        display: grid;
        grid-template-columns: 1fr;

        h1 {
          font-weight: normal;
          font-size: 1rem;
          color: #e6332a;
          margin-top: 24px;
          margin-bottom: 0;
        }
        p {
          margin: 0;
          font-size: 0.875rem;
        }
      }

      ${browserSizeRule.largePhone} {
        padding: 30px;

        h1 {
          font-size: 1rem;
        }

        .container {
          padding: 0;
          grid-template-columns: repeat(3, 1fr);
          
          > .logo {
            grid-column: 1 / span 3;

            img {
              width: 108px;
            }
          }

          div {
            padding: 0 15px;
          }
        }
      }

      ${browserSizeRule.tablet} {
        .container {
          grid-template-columns: repeat(4, 1fr);
          max-width: 720px;
          margin: 0 auto;

          .logo {
            grid-column: auto;
            padding: 0 15px;

            img {
              width: 108px;
            }
          }
        }
      }

      ${browserSizeRule.largeTablet} {
        .container {
          max-width: 960px;
        }
      }
      ${browserSizeRule.laptop} {
        .container {
          max-width: 1140px;
        }
      }
`

export default () => {
    return(
        <UpperFooterContainer>
          <div className='container'>
            <div className='logo'>
            <img src={Logo} alt='logo' />
            </div>
            <div>
            <h1>ข้อมูลลงทะเบียนประชาชน</h1>
            <p>
                การรับสิทธิ การใช้งานแอปพลิเคชั่น{' '}
                <span className='no-wrap'>“เป๋าตัง”</span> และ{' '}
                <span className='no-wrap'>“ถุงเงิน”</span>
            </p>
            <p>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144</p>
            </div>
            <div>
            <h1>ข้อมูลลงทะเบียนผู้ประกอบการ</h1>
            <p>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</p>
            <p>ติดต่อ โทร.0 2270 6400 กด 7</p>
            </div>
            <div>
            <h1>ข้อมูลเที่ยวชิมช้อปใช้</h1>
            <p>ติดต่อ ททท.</p>
            <p>โทร 1672</p>
            </div>
        </div>
        </UpperFooterContainer>
    )
}