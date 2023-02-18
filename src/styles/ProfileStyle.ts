import styled from '@emotion/styled';
import { Box } from '@mui/material';

const ProfileContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  
  .MuiTypography-root {
    font-family: 'Manrope', sans-serif;
  }
  .MuiBox-root {
    box-sizing: border-box;
  }
`;

const TopContainer = styled(Box)`
  height: 93px;
  padding: 9px 53px;
  border-bottom: 0.7px solid #dce2ea;
  img {
    width: 84px;
    height: 84px;
  }
`;

const BodyContainer = styled(Box)`
  padding: 17px 43px 37px 60px;
  height: 95vh;
  @media (max-width: 900px) {
    padding: 17px 24px 37px 24px;
  }
`;

const CompanyInfoBox = styled(Box)`
  border: 1px solid #dde1e3;
  border-radius: 8px;
  padding: 59px 115px 0;
  height: 100%;
  .MuiAvatar-root {
    border: 1px solid #fcb6c0;
    background: #fee7ea;
    width: 62px;
    height: 62px;
    color: #1cc578;
    font-weight: 500;
    font-size: 24px;
  }
  .MuiTypography-h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 37px;
    letter-spacing: -0.2px;
    color: #1a1a1a;
  }
  .MuiTypography-body2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #858585;
  }
  @media (max-width: 900px) {
    padding: 59px 24px 0;
  }
`;

const NotificationBox = styled(Box)`
  background: #f7f7f7;
  border-radius: 12px;
  height: 100%;
  padding: 81px 24px 0;
  .MuiTypography-h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 37px;
    color: #1a1a1a;
    letter-spacing: -0.2px;
  }
  .MuiTypography-body1 {
    color: #595959;
    letter-spacing: 0.3px;
    ont-weight: 400;
    font-size: 16px;
    line-height: 25px;
  }
`;

const ComingSoonBox = styled(Box)`
  width: fit-content;
  padding: 6px 16px;
  background: #feebee;
  border-radius: 30px;
  .MuiTypography-root {
    color: #e60a2b;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

const NotificationListBox = styled(Box)`
  background: #ffffff;
  border: 0.8px solid #ebebeb;
  border-radius: 10px;
  padding: 20px 24px;
  margin-top: 56px;
  .MuiBox-root {
    width: 100%;
    .MuiBox-root {
      width: 100%;
      .MuiBox-root {
        background: #f5f5f5;
        border-radius: 4px;
        max-width: 194px;
        width: 90%;
        &:last-of-type {
            width: 70%;
            max-width: 132px;
        }
      }
    }
  }
`;

const IconBox = styled(Box)`
  background: #f4f5f5;
  border-radius: 6px;
  padding: 4px 11px;
  max-width: 45px;
  .MuiTypography-root {
    ont-weight: 600;
    font-size: 24px;
    line-height: 37px;
  }
`;

export {
  ProfileContainer,
  TopContainer,
  BodyContainer,
  CompanyInfoBox,
  NotificationBox,
  ComingSoonBox,
  NotificationListBox,
  IconBox,
};
