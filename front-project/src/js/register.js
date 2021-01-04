function register(route){
    $.ajax({
        url : "http://localhost:3000/" + route,
        type : "PUT",
        params : {
            username : $('#username').val(),
            mail : $('#mail').val(),
            password : $('#password').val()
        },
        success : function(res){
            console.log(res)
        },
        error : function(err){
            console.log(err);
        }
    })
}