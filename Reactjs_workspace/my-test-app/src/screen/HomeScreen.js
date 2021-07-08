// React라는 이름으로 불러온 react 모듈에는 JSX 문법 지원 등 우리가 사용하고자 하는 리액트의 다양한 속성들이 들어있음 
import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ListItem from '../component/ListItem';
import CardItem from '../component/CardItem';

const Container = styled.div`
    padding : 20px;
    background : #ebebeb;
    font-size: 40px;
    font-weight: bold;
`;

const DetailButton = styled.a`
    display: inline-block;
    padding: 10px;
    font-size: 20px;
`;

const LinkButton = styled(Link)`
    font-size: 20px;
    color: orange;
`;

function HomeScreen(){
    return (
        <Container>
            HomeScreen
            {/* <DetailButton href="/detail">상세페이지로 이동</DetailButton> */}
            <LinkButton to="detail">상세페이지로 이동</LinkButton>
            <ListItem title={"홈스크린에서 불러오는 중"}></ListItem>
            <CardItem title={"제목출력테스트"} data={"내용출력테스트"} showList={true}></CardItem>
        </Container>
    );
};

export default HomeScreen;