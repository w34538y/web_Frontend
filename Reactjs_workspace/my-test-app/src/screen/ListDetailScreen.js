import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    display:block;
    text-align: center;
    margin: 100px auto;
    padding: 20px 0;
    width: 1000px; 
    background: orange;
`;
const Title = styled.div`
    padding-bottom:8px;
`;

const Download = styled.a`
    display:inline-block;
    width: 200px;
`;

const ImageView = styled.img`
    display:inline-block;
    margin-right:12px;
    border-radius:4px;
`;
const MainText = styled.div`
    margin-top:4px;
    font-size:16px;
`;

function ListDetailScreen(props){
    console.log(props.location.state); // 영화데이터 객체정보
    if(props.location.state){
        return (
            <Container>
                 {/* 상세 페이지 정보 넣기 */}
                <Title>{props.location.state.title_long}</Title>
                <ImageView src={props.location.state.medium_cover_image}></ImageView>
                <MainText>영화 다운로드 바로가기</MainText>
                <Download href={props.location.state.torrents[0].url}>Download Torrent</Download>
            </Container>
        );
    } else {
        return(
            <Container>잘못된 접근입니다.</Container>
        );
            
    }
}
export default ListDetailScreen;