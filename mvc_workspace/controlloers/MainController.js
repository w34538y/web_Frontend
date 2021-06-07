const MainController = function(){

    const test_model = require('../models/TestModel');

    // 호출에 맞는 기능을 관리하는 함수 ()
    // 모델을 연결하는 파트 
    const mainViewRender = function(req, res){
        // 모델 연결 

        console.log("received list data from model : ", test_model.testReturnArray())
        console.log("various function process");
        const data = test_model.testReturnArray();
        console.log("home.ejs page rendering")
        res.render('home', {list : data});
    };

    const addUserProcess = function(req, res){
        // post 방식으로 전송한 데이터는 req 객체 안의 body 객체 안에 담겨있다. 
        console.log("view를 통해서 사용자가 입력한 데이터", req.body.name);
        console.log("view를 통해서 사용자가 입력한 데이터", req.body.department);
        console.log("view를 통해서 사용자가 입력한 데이터", req.body.position);
        res.redirect('/main');
    }
    return {
        mainView : function(req, res){
            mainViewRender(req,res);
        }, 
        addUser : function(req, res){
            addUserProcess(req, res);
        }
    }
}

module.exports = MainController();