const DetailModel = function(){
    const model = require('./Model');

    const get_detail_data_ = function(data, callback){
        model.run("SELECT hr.hr_name, d.department_name, p.position_name FROM hr hr \
        JOIN hr_position p \
        ON hr.hr_position = p.position_idx \
        JOIN hr_department d \
        ON hr.hr_department = d.department_idx \
        WHERE hr.hr_idx = :hr_idx", data, callback);
    }
    return {
        getDetailData: function(data, callback){
            get_detail_data_(data, callback);
        }
    }
};
module.exports = DetailModel();