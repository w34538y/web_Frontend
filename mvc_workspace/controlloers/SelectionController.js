// 선택사항 수정에서 사용할 컨트롤러 
const SelectionController = function (){
    // 호출에 맞는 기능을 관리하는 함수
    // 모델을 연결하는 파트

    const main_model = require('../models/MainModel');
    const selec_model = require('../models/SelectionModel');

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
    
    const deleteposition = function(req, res){
        const deleting = function(){
            console.log(req);
            selec_model.deletePosition({position_idx : parseInt(req.params.hr_select_idx)}, function(err, rows){
                if(err){
                    console.log(err);
                    // 실패 시 클라이언트에 응답 보내기 (res)
                    // res.json(처리 결과 정보를 담고 있는 객체)
                    res.json({result : false, msg : 'INTERNAL_SERVER_ERROR' });
                } else {
                    console.log(rows);
                    // 성공 시 클러이언트에 응답 보내기 (res)
                    res.json({ result : true });
                }
            });
        };
        deleting();
    }

    const deletedepartment = function(req, res){
        const deleting = function(){
            selec_model.deleteDepartment({department_idx : parseInt(req.params.hr_select_idx)}, function(err, rows){
                if(err){
                    console.log(err);
                    // 실패 시 클라이언트에 응답 보내기 (res)
                    // res.json(처리 결과 정보를 담고 있는 객체)
                    res.json({result : false, msg : 'INTERNAL_SERVER_ERROR' });
                } else {
                    console.log(rows);
                    // 성공 시 클러이언트에 응답 보내기 (res)
                    res.json({ result : true });
                }
            });
        };
        deleting();
    }

    return {
        departmentEditFormView: function(req, res){
            departmentEditFormRender(req, res);
        },
        positionEditFormView: function(req, res){
            positionEditFormRender(req, res);
        },
        deletePosition: function(req, res){
            deleteposition(req, res);
        },
        deleteDepartment : function(req, res){
            deletedepartment(req, res)
        }
    }

};

module.exports = SelectionController();