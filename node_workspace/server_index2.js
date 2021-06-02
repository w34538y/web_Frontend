// Node.js 웹 서버를 생성하고 설정할 파일 
// 이 파일을 실행해야 서버가 생성 및 실행 된다. 
// (app.js , server.js)

// console.log("hello Node.js");

//require("불러올 패키지명")
const express = require("express");
//express를 이용한 웹 애플리케이션을 app이라는 이름으로 생성한다.
const app = express();
// 생성할 로컬 웹 서버의 포트를 정한다.
const port = 3000;

// view 템플릿 엔진 설정 
// __dirname : 현재 실행중인 폴더 위치 >> node_workspace/view
app.set('views', __dirname+'/view'); //뷰페이지 경로 지정
app.set('view engine', 'ejs'); // 사용할 뷰 템플릿 엔진을 설정에 등록한다.

app.listen(port, function(error){
    if(error){
        console.log("error occured : ", error)
    }
    console.log("connected");
});

app.get("/main", function(req,res){
    console.log("main 호출 받음");
    res.render("index"); // render("출력할 뷰 페이지 이름")
    // 1 남성 2 여성
    res.render("index", {title : '메인페이지', name: '홍길동' , phone:'010-1234-1234', gender:1});

});