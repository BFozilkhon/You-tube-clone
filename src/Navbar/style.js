import styled from "styled-components";
import { ReactComponent as search } from "../assets/icon/search.svg";


export const Container = styled.div`
background: #212121;
`;

export const Wrapper = styled.div`
height: 70px;
display: flex;
align-items: center;
justify-content: center;
border-top: ${({ramka})=> ramka && '2px solid rgba(255, 255, 255, 0.2)'};
border-bottom: ${({ramka})=> ramka && '2px solid rgba(255, 255, 255, 0.2)'};
`;


export const Flexing = styled.div`
display: flex;
align-items: center;
`;

export const Input = styled.input`
  outline: none;
  background: #000000;
  border-radius: 2px 0px 0px 2px; 
  padding: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 500px;
`;


export const Btn = styled.div`
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
`;


export const Icon = styled(search)`
width: 20px;
height: 20px;
`;


// 2qism
// background: rgba(255, 255, 255, 0.2);
// color: #FFFFFF;

export const Button = styled.div`
background:rgba(255, 255, 255, 0.2);
border: 1px solid #FFFFFF;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
color: #000000;
width: 120px;
height: 33px;
margin:0px 10px ;
transition: all 1s;
`;