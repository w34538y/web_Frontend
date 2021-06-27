// 메인페이지에서 사용할 모델
const MainModel = function(){
    // 메인이 되는 대표 모델을 불러온다
    const model = require('./Model');

    // 부서 값을 sql 모델에 넘겨서 가져옴 
    const get_department_value_ = function(data, callback){
        model.run("SELECT * FROM hr_department", data, callback);
    }

    // 직급 값을 sql 모델에 넘겨서 가져옴 
    const get_position_value_ = function(data, callback){
        model.run("SELECT * FROM hr_position", data, callback);
    }

    // 데이터베이스에 저장된 리스트를 가져온다
    const get_list_ = function(data,callback){
        // Model을 통해 sql구문을 전달하고 DB에 명령을 내린다
        model.run("SELECT hr.*, p.*, d.* FROM hr hr \
        JOIN hr_position p \
        ON hr.hr_position = p.position_idx \
        JOIN hr_department d \
        ON hr.hr_department = d.department_idx", data, callback);
    };

    // 새로운 사용자 정보를 생성하여 sql로 넘김
    const create_new_user_ = function(data,callback) {
        model.run("INSERT hr (hr_name, hr_department, hr_position, hr_memo) \
        VALUES (:hr_name, :hr_department, :hr_position, :hr_memo)", data, callback);
    }

    return {
        // MainController에서 호출하는 부분들
        // 위에 정의된 함수들을 실행해준다. 
        getDepartmentValue: function(data,callback){
            get_department_value_(data,callback);
        },
        getPostionValue: function(data,callback){
            get_position_value_(data,callback)
        },
        getList: function(data, callback){
            get_list_(data, callback);
        },
        createNewUser: function(data,callback){
            create_new_user_(data,callback);
        }
    }
};

module.exports = MainModel();