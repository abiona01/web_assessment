import styled from '@emotion/styled';
import { Box } from '@mui/material';

const LoginContainer = styled(Box)`
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

const LoginleftContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;
const LoginRightContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #fef0f2;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .MuiBox-root {
    width: fit-content;
    padding: 32px 40px;
    background: #ffffff;
    box-shadow: 0px 4px 25px rgba(102, 102, 102, 0.2);
    border-radius: 12px;
    .MuiTypography-h6 {
      font-weight: 600;
      font-size: 24px;
      line-height: 37px;
      letter-spacing: -0.2px;
      color: #1a1a1a;
    }
    .MuiTypography-body1 {
      color: #858585;
    }
    .MuiButton-root {
      background: #1cc578;
      border-radius: 40px;
      height: 65px;
      font-weight: 500;
      font-size: 16px;
      text-transform: none;
    }
  }

  @media (max-width: 600px) {
    & > .MuiBox-root {
      height: 100vh;
      display: flex;
      width: 100%;
      padding: 10rem 16px 0;
      flex-direction: column;
      align-items: center;
      .MuiTypography-h6 {
        font-size: 21px;
      }
      .MuiTypography-body1 {
        font-size: 12px;
      }
      .MuiButton-root {
        height: 50px;
      }
    }
  }
  @media (min-width: 900px) {
    height: 100%;
    & > .MuiBox-root {
      width: fit-content;

      padding: 24px 36px;
    }
  }
  @media (min-width: 1200px) {
& > .MuiBox-root {
    padding: 40px 64px;
}
  }
`;

const LogoBox = styled(Box)`
  height: auto;
  padding-top: 44px;
  padding-left: 24px;
  margin-bottom: 1rem;
  img {
    width: 84px;
    height: 84px;
  }
  @media (min-width: 1440px) {
    padding-left: 65px;
  }
`;
const HeadingTextBox = styled(Box)`
  padding-left: 24px;
  padding-right: 24px;
  .MuiTypography-root {
    font-family: 'Manrope', sans-serif;
  }
  .MuiTypography-h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.5px;
    color: #1a1a1a;
  }
  .MuiTypography-body1 {
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.3px;
    color: #595959;
  }
  @media (min-width: 1200px) {
    padding-right: 58px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const LeftBodyBox = styled(Box)`
  padding-left: 24px;
  padding-right: 16px;
  & > .MuiBox-root {
    width: fit-content;
    padding: 8px 16px 8px 8px;
    .MuiSvgIcon-root {
      color: #f9c320;
    }
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
  }
`;

const TextFieldBox = styled(Box)`
  width: 502px;
  .MuiFormControl-root {
    width: 100%;
    height: 77px;
    background: #f0f0f0;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiInputBase-root {
      width: 98%;
      height: 90%;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      .MuiInputBase-input {
        &: -internal-autofill-selected {
          background-color: #ffffff !important;
        }
        color: #1a1a1a;
        &::placeholder {
          color: #1a1a1a;
        }
      }
      .MuiOutlinedInput-notchedOutline {
        border-color: #1a1a1a;
      }
    }
  }
  .MuiTypography-root {
    color: #1a1a1a;
  }
  @media (max-width: 600px) {
    width: 100%;
    .MuiFormControl-root {
      height: 54px;
    }
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
`;

export {
  LoginContainer,
  LoginleftContainer,
  LoginRightContainer,
  LogoBox,
  HeadingTextBox,
  LeftBodyBox,
  TextFieldBox,
};
