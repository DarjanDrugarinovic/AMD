import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <span>© 2026 Advanced Micro Devices, Inc.</span>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  background-color: #333;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;
