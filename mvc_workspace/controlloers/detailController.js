// 상세 페이지에서 사용할 컨트롤러
const DetailController = function(){
    // const Model = require('../models/Model');
    // const test_model = require('../models/TestModel');
    const detail_model = require('../models/DetailModel');
    const main_model = require('../models/MainModel');

        const detailViewRender = function(req,res){
        console.log(req.params.hr_idx);

        const getData = function(){
            return new Promise(function(resolve){
                // console.log('주소를 통해 넘겨받은 글 번호 :', req.params.index);
                // // 배열 데이터에서 req객체를 통해 받은 글 번호에 해당하는 것만 꺼내온다
                // const array = test_model.testReturnArray();
                // // let obj = {};
                // // array.forEach(function(v){
                // //     if (v.index === parseInt(req.params.index)) {
                // //         obj = v;
                // //     }
                // // });
                // const data = array.find(function(v){
                //     if (v.index === parseInt(req.params.index)) {
                //         return v;
                //     }
                // });

                // DB에서 데이터 조회하기
                detail_model.getDetailData({hr_idx : parseInt(req.params.hr_idx)}, function(err,rows){
                    if(err) {
                        console.log(err);
                        throw err;
                    } else {
                        console.log("detail: ", rows);
                        resolve(rows[0]);
                    }
                });
            });
        };

        const renderView = function(data){
            return new Promise(function(){
                res.render('detail', {data : data});
            });
        };

        getData().then(function(data){
           return renderView(data);
        });
    };  
    const deleteUser = function(req, res){
        // 삭제 기능 
        // model에 삭제 기능 SQL 구문을 가진 함수를 호출 
        // model 호출 결과
        const deleting = function(){
            detail_model.deleteUser({hr_idx : parseInt(req.params.hr_idx)}, function(err, rows){
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
    };

    const detailEditFormRender = function(req, res){
        let data = {};
        // 1) 부서리스트
        // 2) 직급리스트 
        // 3) 상세 데이터 (hr_idx에 해당하는 데이터)
        // 4) edit.ejs 페이지로 이동
        
        const getDepartmentList = function(){
            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err, rows){
                    if(err){
                        console.log(err);
                        throw err;
                    } else {
                        data.departments = rows;
                        resolve();
                    }
                });
            });
        };

        const getPositionList = function(){
            return new Promise(function(resolve){
                main_model.getPostionValue({}, function(err, rows){
                    if(err){
                        console.log(err);
                        throw err;
                    } else {
                        data.positions = rows;
                        resolve();
                    }
                });
            });
        };

        const getDetailData = function(){
            return new Promise(function(resolve){
                detail_model.getDetailData({hr_idx : parseInt(req.params.hr_idx)}, function(err, rows){
                    if(err){
                        console.log(err);
                        throw err;
                    } else {
                        data.data = rows[0];
                        resolve();
                    }
                });
            });
        };

        const view = function(){
            // edit ejs 화면으로 이동
            res.render("edit", data);
        };

        getDepartmentList().then(function(){
            return getPositionList();
        }).then(function(){
            return getDetailData();
        }).then(function(){
            return view();
        });
    }

    const updateUser = function(req, res){
        // 클라이언트로부터 넘겨 받은 수정데이터를 model에 넘겨 수정 sql을 실행시킨다.
        const updating = function(){
            detail_model.updateUser(req.body, function(err, rows){
                if(err){
                    console.log(err);
                    // 실패 시 클라이언트에 응답 보내기 (res)
                    // res.json(처리 결과 정보를 담고 있는 객체)
                    res.json({result : false, msg : 'INTERNAL_SERVER_ERROR' });
                } else {
                    console.log(rows);
                    // 성공 시 상세페이지로 다시 연결해줌
                    res.redirect("/detail/"+req.body.hr_idx);
                }
            });
        }
        updating();
    }
    
    return {
        detailView: function(req,res) {
            detailViewRender(req,res);
        },
        detailDeleteUser : function(req, res){
            deleteUser(req,res);
        },
        detailEditFormView : function(req, res){
            detailEditFormRender(req, res);
        },
        detailUpdateUser : function(req, res){
            updateUser(req, res);
        }
    }
};

module.exports = DetailController();