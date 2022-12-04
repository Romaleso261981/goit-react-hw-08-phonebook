import styled from 'styled-components';

export const ContactItem = styled.li`
  border: 1px solid black;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid rgb(77, 75, 75);
  border-radius: 3px;
  box-shadow: 0px 0px 15px 1px rgba(143, 144, 139, 0.6);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const SpanName = styled.span`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  font-weight: 500;
  margin-left: 50px;
`;

export const SpanNumber = styled.span`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  font-weight: 500;
  margin-left: auto;
  margin-right: 30px;
`;

export const ContactBtn = styled.button`
  margin-right: 20px;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
`;
