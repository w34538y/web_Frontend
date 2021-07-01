const Router = function(app){
    // 주소와 그에 대한 연결 처리를 관리 
    // 주소에 맞는 기능을 가지고 있는 컨트롤러로 연결
    
    const MainController = require('./controlloers/MainController'); // 메인 컨트롤러 연결
    const DetailController = require("./controlloers/DetailController"); // 디테일 컨트롤러 연결
    const SelectionController = require("./controlloers/SelectionController"); // 선택 항목 관리
    console.log(MainController);

    // 기본 도메인 접속시 메인 페이지 리다이렉트 시켜줌
    app.get('/', function(req, res){
        console.log("redirect to main");
        res.redirect('/main');
    });

    // MainController 연결 시작 부분

    // main 페이지 get 요청
    app.get('/main', function(req, res){
        console.log("main direction connected");
        // ./main 주소로 요청이 들어오면 MainController의 mainView를 호출하여 요청에 대한 실질적인 처리를 controller 에서 수행시킨다.
        MainController.mainView(req, res);
    });

    // 인사 관리 인원 추가 가상 
    app.post('/add', function(req, res){
        MainController.addUser(req, res);
    });

    // 인사 관리 인원 추가
    app.post('/create/new', function(req,res){
        MainController.createNewUser(req,res);
    });
    // MainController 연결 끝 부분

    
    // DetailController 연결 부분
    // localhost:3000/detail/글번호 주소로 상세 페이지 연결
    app.get("/detail/:hr_idx", function(req, res){
        DetailController.detailView(req,res);
    });

    // 사용자 삭제 라우터 연결
    app.delete("/detail/delete/:hr_idx", function(req, res){
        DetailController.detailDeleteUser(req, res);
    });
    
    // 상세페이지에서 사용자 정보 수정을 위해 수정 페이지 연결시
    app.get('/detail/edit/form/:hr_idx', function(req, res){
        DetailController.detailEditFormView(req, res);
    });

    // 상세페이지에서 사용자 정보 수정하고 Post 할 시 작동 하는 라우터
    app.post('/detail/update/:hr_idx', function(req,res){
        DetailController.detailUpdateUser(req,res);
    });
    
    // SelectionController 연결 부분
    // 선택 항목 관리
    // 부서 관리 페이지 
    app.get('/department/edit/form', function(req, res){
        SelectionController.departmentEditFormView(req, res);
    });

    // 직급 관리 페이지
    app.get('/position/edit/form', function(req, res){
        SelectionController.positionEditFormView(req, res);
    });

    app.delete('/selection/delete/:page_type', function(req,res){
        SelectionController.deleteSelectionData(req,res);
    });

    app.post('/selection/add/:page_type', function(req,res){
        SelectionController.createNewSelectionData(req,res);
    });

};
//라우터 모듈화
module.exports = Router;