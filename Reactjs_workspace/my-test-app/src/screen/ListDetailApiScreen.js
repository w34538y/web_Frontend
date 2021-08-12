import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


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
    font-size: 20px;
    font-weight: bold;
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


//list로 부터 글번호를 넘겨받아서 받은 글 번호를 이용해 영화 상세조회 API를 호출한다.
//API를 통해서 변환받은 response를 화면에 출력한다.
function ListDetailApiScreen(props){
    console.log("영화번호", props.location.movie_id);
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        const getMovie = async () => {
            //영화 상세 데이터 조회
            // https://yts.mx/api/v2/movie_details.json
            // parameter --> movie_id = 영화번호
            const response = await axios.get("https://yts.mx/api/v2/movie_details.json?movie_id="+props.location.movie_id);
            console.log(response.data.data.movie);
            console.log(typeof response.data.data.movie.genres)

            for (let key of response.data.data.movie.genres) {
                console.log(key);
            }
            // response.data.data.movie.genres.map((v) => {
            //     console.log(v);
            // });
            setMovieData(response.data.data.movie);
        };
        getMovie();
    },[]);
    return(
        <Container>
             {/* 상세 페이지 정보 넣기 */}
            <Title>{movieData.title_long}</Title>
            <ImageView src={movieData.medium_cover_image}></ImageView>
            <MainText>런타임 : {movieData.runtime}분</MainText>
            <MainText>평점 : {movieData.rating} / 10</MainText>
            <MainText>장르 : {movieData.genres}</MainText>
            <MainText>시놉시스 : {movieData.description_intro}</MainText>
        </Container>

    )
}

export default ListDetailApiScreen;