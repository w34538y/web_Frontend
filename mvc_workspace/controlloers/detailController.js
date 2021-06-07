const DetailController  = function(){
    const detailViewRender = function(req,res){
        console.log("주소를 통해 넘겨받은 글 번호 :", req.params.index);
    }
    return {
        detailView : function(req,res){
            detailViewRender(req, res);
        }
    }
};

module.exports = DetailController();