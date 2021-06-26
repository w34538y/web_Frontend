// 상세페이지에서 사용할 모델 페이지 

const DetailModel = function(){
    // 메인이 되는 대표 모델을 불러온다
    const model = require('./Model');

    // 상세 페이지에서 사용할 정보를 데이터베이스로부터 불러온다.
    const get_detail_data_ = function(data, callback){
        model.run("SELECT hr.*, p.*, d.* FROM hr hr \
        JOIN hr_position p \
        ON hr.hr_position = p.position_idx \
        JOIN hr_department d \
        ON hr.hr_department = d.department_idx \
        WHERE hr.hr_idx=:hr_idx",data,callback)
    }

    // 상세 페이제에서 사용자 정보를 삭제한다. 데이터베이스에서 완전히 지워준다
    const delete_user_ = function(data, callback){
        model.run("DELETE FROM hr WHERE hr_idx=:hr_idx", data, callback);
    };
    
    return {
        getDetailData: function(data, callback){
            get_detail_data_(data, callback);
        },
        deleteUser: function(data, callback){
            delete_user_(data, callback);
        }
    }
};
module.exports = DetailModel();