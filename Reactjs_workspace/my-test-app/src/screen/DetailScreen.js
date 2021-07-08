import styled from 'styled-components';
import ListItem from '../component/ListItem';

const Container = styled.div`
    padding: 20px;
    background: #c8f7be;
    font-size: 40px;
    font-weight: bold;
`;


function DetailScreen() {
    return(
        <Container>DetailScreen
            <ListItem title={"DetailScreen에서 ListItem 컴포넌트 사용 중"}></ListItem>
            <ListItem title={"제목 출력 테스트"}></ListItem>
            <ListItem title={"ㅎㅇ"}></ListItem>
            <ListItem></ListItem>
        </Container>
        
    );
}

export default DetailScreen;