// 선택사항 수정에서 사용할 컨트롤러 
const SelectionController = function (){
    // 호출에 맞는 기능을 관리하는 함수
    // 모델을 연결하는 파트

    const main_model = require('../models/MainModel');

    // 부서 관리 버튼을 누를시 실행되는 함수
    const departmentEditFormRender = function(req, res){
        let data = {};
        // 부서 리스트 
        const getDepartmentList = function(){
            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err, rows){
                    if(err){
                        console.log(err);
                        throw err;
                    } else {
                        data.list = rows;
                        resolve();
                    }
                });
            });
        };

        // 부서 관리 페이지로 이동
        const view = function(){
            data.page_type = "department";
            res.render('selection', data);
        };

        getDepartmentList().then(function(){
            return view();
        });

    };

    // 직급관리 버튼을 누를 시 실행되는 함수
    const positionEditFormRender = function(req, res){
        let data = {};
        // 직급 리스트
        const getPositionList = function(){
            return new Promise(function(resolve){
                main_model.getPostionValue({}, function(err, rows){
                    if(err){
                        console.log(err);
                        throw err;
                    } else {
                        data.list = rows;
                        resolve();
                    }
                });
            });
        };
        // 직급 관리 페이지로 이동
        const view = function(){
            data.page_type = "position";
            res.render('selection', data);
        };

        getPositionList().then(function(){
            return view();
        });
    };

    return {
        departmentEditFormView: function(req, res){
            departmentEditFormRender(req, res);
        },
        positionEditFormView: function(req, res){
            positionEditFormRender(req, res);
        }
    }

};

module.exports = SelectionController();