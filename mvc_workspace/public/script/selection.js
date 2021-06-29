const Init = function(){

    const show_delete_modal = function(){
        const selected_data = $(this).parent().parent().attr('data-number');
        $('input[name=selected_data]').val(selected_data);
        $('.ui.modal').modal('show');
    };
    const delete_selection_data = function(){
        // 삭제
        // 삭제 하고싶은 번호 (idx)
        // ajax를 이용해서 삭제 처리 controller 호출 
        // 호출 결과 (응답 내용)
        // 성공일때 location.reload(); --> 새로고침
        // 실패일 때 alert("문제가 발생 ...");
        const selected_data = $('input[name=selected_data]').val();
        const selected_part = $('input[name=selected_part]').val();
        console.log(selected_data);
        console.log(selected_part);
        
        $.ajax({
            url: '/delete/'+selected_part+'/form/'+selected_data,
            method : 'DELETE',
            dataType : 'json',
            success : function(data){
                // http 통신 (삭제 요청) 결과 처리
                console.log("삭제 요청에 대한 응답 결과 : ", data);
                if(data.result){
                    location.reload();
                } else {
                    alert("문제 발생");
                }
            },
            error : function(){
                console.log('에러 발생', err);
                alert("문제가 발생하였습니다. 잠시후에 다시 시도해주세요");
            }
        });
    };


    return {
        event : function(){
            $(".ui.button.delete").on("click", show_delete_modal);
            $("#delete_btn").on('click', delete_selection_data);
        },
    }
};

$(document).ready(function(){
    Init().event();
});