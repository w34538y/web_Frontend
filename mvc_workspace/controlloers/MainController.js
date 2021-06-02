const MainController = function(){

    const test_model = require('../models/TestModel');

    // 호출에 맞는 기능을 관리하는 함수 ()
    // 모델을 연결하는 파트 
    const mainViewRender = function(req, res){
        // 모델 연결 

        console.log("received list data from model : ", test_model.testReturnArray())
        console.log("various function process");
        const data = test_model.testReturnArray();
        res.render('home', {list : data});
    };

    return {
        mainView : function(req, res){
            mainViewRender(req,res);
        }, 
    }
}

module.exports = MainController();