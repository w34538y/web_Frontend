const Init = function(){

    const show_delete_modal = function(){
        $('.ui.basic.modal').modal('show');
    }
    const delete_user = function(){
        // 실제 데이터에서 제거
        let hr_idx = $(".ui.grid").attr("data-number");
        console.log(hr_idx);
        // 1) ajax를 이용해서 삭제 처리를 수행하는 controller에 연결 (http 통신)
        // 2) http 통신을 통한 처리 결과
        // 3) 삭제 처리 성공일 시 main 호출 (메인 리스트 화면으로 이동 )
        // 4) 삭제 처리 실패일 시 alert()로 문제 발생 안내 
    }

    return {
        event : function(){
            $('#trash').on('click', show_delete_modal);
            $('#delete_btn').on('click', delete_user);
        },
    }
};

$(document).ready(function(){
    Init().event();
});