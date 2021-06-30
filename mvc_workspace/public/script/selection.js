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

    // 추가하기
    const create_new_selection_data = function(){
        const page_type = $('input[name=selected_part]').val();
        const input_data = $('input[name=name').val().trim();
        console.log(page_type);
        console.log(input_data);

        if(input_data.length > 0){
            console.log("입력함");
        } else{ 
            alert("추가할 내용을 입력 해 주세요.");
        }
    }

    return {
        event : function(){
            $(".ui.button.delete").on("click", show_delete_modal);
            $("#delete_btn").on('click', delete_selection_data);
            $(".ui.button.add").on('click', create_new_selection_data);
        },
    }
};

$(document).ready(function(){
    Init().event();
});