import styled from 'styled-components';

const Container = styled.div`
  padding:20px 0;
  width:350px;
`;

const TextBox = styled.textarea`
  padding:10px;
  width:100%;
  height:400px;
  line-height:20px;
  resize:none;
  border:1px solid grey;
`;

const LimitCount = styled.div`
  text-align:right;
  font-size:12px;
  color:grey;
`;

function ContentTextarea({onChange, currentLenght, limit}){
  
  return (
    <Container>
      <TextBox
          maxLength={limit} 
          onChange={(e) => {
          // console.log(e.target.value);
          //onChange(여기를 통해서 event 객체에서 꺼낸 value 값을 인자로 넘겨준다.)
          onChange(e.target.value);
        }
      }/>
      <LimitCount>{currentLenght}/{limit}</LimitCount>
    </Container>
  )
}

export default ContentTextarea;