const SelectionModel = function(){
    const model = require('./Model');

    const delete_position_ = function(data, callback){
        model.run("DELETE FROM hr_position WHERE position_idx=:position_idx", data, callback);
    }
    const delete_department_ = function(data, callback){
        model.run("DELETE FROM hr_position WHERE department_idx=:department_idx", data, callback);
    }

    return {
        deletePosition: function(data,callback){
            delete_position_(data,callback);
        },
        deleteDepartment: function(data,callback){
            delete_department_(data,callback);
        },

    }
}

module.exports = SelectionModel();