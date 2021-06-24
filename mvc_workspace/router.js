const Router = function(app){
    // 주소와 그에 대한 연결 처리를 관리 
    // 주소에 맞는 기능을 가지고 있는 컨트롤러로 연결
    
    const MainController = require('./controlloers/MainController');
    console.log(MainController);

    app.get('/', function(req, res){
        console.log("redirect to main");
        res.redirect('/main');
    });

    app.get('/main', function(req, res){
        console.log("main direction connected");
        // ./main 주소로 요청이 들어오면 MainController의 mainView를 호출하여 요청에 대한 실질적인 처리를 controller 에서 수행시킨다.
        MainController.mainView(req, res);
    });

    app.post('/add', function(req, res){
        MainController.addUser(req, res);
    });
    
    app.post('/create/new', function(req,res){
        MainController.createNewUser(req,res);
    });

    const DetailController = require("./controlloers/DetailController");
    
    // localhost:3000/detail/글번호
    app.get("/detail/:hr_idx", function(req, res){
        DetailController.detailView(req,res);
    });
};
module.exports = Router;