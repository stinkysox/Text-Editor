import styled from 'styled-components'

export const AppBgContainer = styled.div`
  height: 100vh;
  padding: 10px;
  background-color: #25262c;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  padding: 16px;
  background-color: #1b1c22;
  width: 80%;
  height: 80vh;
  display: flex;
  align-items: center;
`

export const FirstContainer = styled.div`
  padding: 10px;
  text-align: center;
  width: 50%;
`

export const SecondContainer = styled.div`
  text-align: center;
  width: 50%;
  height: 100%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #334155;
  padding: 10px;
`

export const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 90%;
  box-sizing: border-box;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'none')};
  border: 1px solid #334155;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.5;
  background-color: #25262c;
  color: #f8fafc;
`
