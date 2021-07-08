import styled from 'styled-components';
import ListItem from './ListItem';

const CardWrapper = styled.div`
    width: 300px;
    height: 300px;
    padding: 10px;
    box-sizing: border-box;
    background-color: orange;
    font-size: 20px;
`;

const CardTitle = styled.div`
   color: white;
`;

const CardData = styled.div`
    margin-top: 10px;
    font-size: 20px;
`;


// 조건부 렌더링 : 조건문을 활용해서 렌더링 변화 규칙을 적용 
// JSX에서 조건문 사용 
// 인라인 적용시 삼항식, 연산자 활용
// return 바깥에서 사용시 if else 사용 가능

function CardItem({title, data, showList}){
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardData>{data}</CardData>
            <ListItem title={title}></ListItem>
            {/* showList가 true일때만 ListItem을 보여준다 */}
            {
                showList && (
                    <ListItem title={"CardItem에서 사용중"}></ListItem>
                )
            }
            <ListItem>{data}</ListItem>
        </CardWrapper>
    );
}

export default CardItem;