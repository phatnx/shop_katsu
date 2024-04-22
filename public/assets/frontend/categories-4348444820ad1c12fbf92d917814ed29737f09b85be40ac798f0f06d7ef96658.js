function Category(e){var t=this,n={template:{category:$("#list-category-tempale"),comment:$("#list-comment-template"),rate:$("#list-rate-template"),edit_comment:$("#list-edit-comment-template"),list_children_comment:$("#list-comment-children-template"),load_more_comment:$("#load-more-comment-template")},api:{category:"/api/v1/category",comment:"/api/v1/comment",edit_comment:"/api/v1/edit-comment",edit_comment_children:"/api/v1/edit-comment-children",delete_comment:"/api/v1/delete-comment",delete_comment_children:"/api/v1/delete-comment-children",reply_comment:"/api/v1/reply-comment",load_more_comment:"/api/v1/load-more-comment",rate:"/api/v1/rate",token:Cookies.get("authozition"),api_token:Cookies.get("api_token")},data:{}};t.settings=$.extend({},n,e),check_login_message=function(){var e=window.location.pathname;"/en"===e.substr(e.indexOf("/en"),3)?Swal.fire({icon:"warning",title:"Please to login before Comment!"}).then(()=>{window.location="/login?locale=en"}):Swal.fire({icon:"warning",title:"Vui l\xf2ng \u0111\u0103ng nh\u1eadp tr\u01b0\u1edbc khi b\xecnh lu\u1eadn!"}).then(()=>{window.location="/login?locale=vi"})},t.clickshowcategory=function(){$(".category").on("click",function(){$("div.list-category").hide(),el=$(this).closest("div .categories"),el.find("div.list-category").show()})},t.clickCategory=function(){$(".category").on("click",function(){el=$(this),ele=$(this).closest("div .categories"),categories_id=$(el).closest("div .panel-heading").attr("id"),$.ajax({url:t.settings.api.category,headers:{Authorization:"Bearer "+t.settings.api.token},type:"get",data:{categories_id:categories_id},dataType:"json",success:function(e){if(200==e.code){$(".list-category").html("");var n=Handlebars.compile(t.settings.template.category.html());$(ele).find(".list-category").append(n({categories:e.data.categories}))}}})})},check_i18n=function(){return"/en"===window.location.pathname.substr(window.location.pathname.indexOf("/en"),3)},t.clickEventComments=function(){$("#form_comment").submit(function(e){e.preventDefault(),ele=$(this).closest("div #reviews"),comment=$(ele).find(".in-comment").val(),product_id=$(ele).find(".comments").attr("id"),check_login=$(ele).find(".login").attr("id");var n=new FormData($(this)[0]);if(n.append("token",t.settings.api.api_token),n.append("product_id",product_id),n.append("content",comment),button_load=$(ele).find(".buttonload").css("display","block"),btn_send_comment=$(ele).find("#btn_send_comment").hide(),1!=check_login)return check_login_message();$.ajax({url:"/api/v1/comment",type:"POST",data:n,async:!1,cache:!1,contentType:!1,enctype:"multipart/form-data",processData:!1,success:function(e){if(200==e.code){alert(check_i18n()?"successfully":"Thanh cong"),$("#exampleModal").modal("hide"),$("#close").trigger("click"),$(ele).find(".in-comment").val(""),$(ele).find(".buttonload").css("display","none"),$(ele).find("#btn_send_comment").show();var n=Handlebars.compile(t.settings.template.comment.html());$(ele).find(".list-comment").append(n({comment:e.data.comment,name:e.data.name,image:e.data.image,avatar:e.data.avatar})),$("html, body").animate({scrollTop:$(ele).find(".list-comment").find("li").last().offset().top-50},1e3)}else Swal.fire({icon:"error",title:check_i18n()?e.message:"L\xe0m \u01a1n vi\u1ebft n\u1ed9i dung c\u1ee7a b\u1ea1n"}),$(ele).find(".buttonload").css("display","none"),$(ele).find("#btn_send_comment").show()},error:function(){}})})},t.replyComment=function(){var e=Handlebars.compile(t.settings.template.list_replyComment.html());$(".form-comment").hide(),$(".text-reply").one("click",function(){$(".text-reply-comment").show(),$(this).parent().parent().append(e),$(this).parent().parent().find(".form-comment").find(".input-comment").keypress(function(e){"13"==(e.keyCode?e.keyCode:e.which)&&console.log(e.target.value)})})},t.clickRateProduct=function(){$(document).on("click",".fa-star",function(){var e;(rate=$(this).attr("id").split("-")[1],ele=$(this).closest("div .check"),product_id=parseInt($(ele).find(".id").attr("id")),check_login=$(ele).find(".login").attr("id"),check_rate=$(ele).find("#check_rate").val(),1==check_login)?0==check_rate?$.ajax({url:t.settings.api.rate,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"POST",data:{rate:rate,product_id:product_id,token:t.settings.api.api_token},dataType:"json",success:function(e){if(200==e.code){$(".list-rate").html("");var n=Handlebars.compile(t.settings.template.rate.html());$(ele).find(".list-rate").append(n({avg:e.data.avg}));var i=window.location.pathname;"/en"===i.substr(i.indexOf("/en"),3)?Swal.fire({icon:"success",title:"Rate successfully..."}).then(()=>{window.location.reload()}):Swal.fire({icon:"success",title:"\u0110\xe1nh gi\xe1 th\xe0nh c\xf4ng."}).then(()=>{window.location="/login?locale=vi"})}else Swal.fire({icon:"error",title:check_i18n()?"You have not purchased this product so cannot rated":"S\u1ea3n ph\u1ea9m n\xe0y kh\xf4ng th\u1ec3 \u0111\xe1nh gi\xe1 v\xec b\u1ea1n ch\u01b0a mua"})},error:function(){}}):"/en"===(e=window.location.pathname).substr(e.indexOf("/en"),3)?Swal.fire({icon:"warning",title:"You have already rated this product..."}).then(()=>{console.log("Success")}):Swal.fire({icon:"warning",title:"B\u1ea1n \u0111\xe3 \u0111\xe1nh gi\xe1 s\u1ea3n ph\u1ea9m n\xe0y."}).then(()=>{console.log("thanh cong")}):"/en"===(e=window.location.pathname).substr(e.indexOf("/en"),3)?Swal.fire({icon:"warning",title:"You must be logged in to rate!"}).then(()=>{console.log("Success")}):Swal.fire({icon:"warning",title:"B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp m\u1edbi \u0111\xe1nh gi\xe1 \u0111\u01b0\u1ee3c s\u1ea3n ph\u1ea9m n\xe0y"}).then(()=>{console.log("thanh cong")})})},t.hoverRateProduct=function(){$(".fa-star").hover(function(){$(this).prevAll().andSelf().addClass("checked")},function(){$(this).prevAll().andSelf().removeClass("checked")})},t.clickeditComment=function(){$(document).on("click",".edit-comment",function(){ele=$(this).closest(".comments"),$(".in-comment-edit").hide(),$(".list-edit-comment").show(),$(ele).find(".in-comment-edit").show(),$(ele).find(".list-edit-comment").hide(),$(ele).find(".in-comment-edit").css("height","1px"),$(ele).find(".in-comment-edit").css("height",`${$(ele).find(".in-comment-edit")[0].scrollHeight}px`)})},t.editComment=function(){$(document).on("keypress",".in-comment-edit",function(){13==event.keyCode&&(ele=$(this).closest("div .comments"),comment=$(ele).find(".in-comment-edit").val(),comment_id=$(ele).find(".edit-comment").attr("id").split("-")[1],$.ajax({url:t.settings.api.edit_comment,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"POST",data:{comment:comment,comment_id:comment_id,token:t.settings.api.api_token},dataType:"json",success:function(e){if(200==e.code){var n=Handlebars.compile(t.settings.template.edit_comment.html());$(ele).find(".list-edit-comment").html(n({comment:e.data.comment})),$(ele).find(".list-edit-comment").show(),$(ele).find(".in-comment-edit").hide(),t.clickeditComment(),t.editComment()}else Swal.fire({icon:"warning",title:e.message})},error:function(){}}))})},t.deleteComment=function(){$(document).on("click",".delete-comment",function(){1==$(".login").attr("id")&&(ele=$(this).closest(".delete_comment"),ele.css("display","none"),comment_id=$(ele).find(".edit-comment").attr("id").split("-")[1],$.ajax({url:t.settings.api.delete_comment,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"delete",data:{comment_id:comment_id,token:t.settings.api.api_token},dataType:"json",success:function(e){200==e.code?($(ele).html(""),t.deleteComment()):Swal.fire({icon:"warning",title:"Delete comment faided!"}).then(()=>{window.location="/login"})},error:function(){}}))})},t.clickReplyComment=function(){$(document).on("click",".reply_comment",function(){if(ele=$(this).closest("div #reviews"),check_login=$(ele).find(".login").attr("id"),1!=check_login)return check_login_message();el=$(this).parent().parent(),id=el.attr("id"),show_input_comment=$(this).parent().find(".full-tbl").css("display","block"),$("html, body").animate({scrollTop:$(this).parent().find(".full-tbl").offset().top},1e3)})},t.sendReplyComment=function(){$(document).on("click","#send_reply_comment",function(){if(ele=$(this).closest("div #reviews"),check_login=$(ele).find(".login").attr("id"),1!=check_login)return check_login_message();el=$(this).closest(".delete_comment"),id_comment=el.attr("id"),content=$(this).parent().parent().find("#fieldReplyComment").val(),$.ajax({url:t.settings.api.reply_comment,headers:{Authorization:"Bearer "+t.settings.api.token},type:"POST",data:{id_comment:id_comment,content:content,token:t.settings.api.api_token},dataType:"json",success:function(e){if(200==e.code){Swal.fire({icon:"success",title:"Successfully"});var n=Handlebars.compile(t.settings.template.list_children_comment.html());list_children_comment=el.find(".comments").find(".list_comment_chidren"),list_children_comment.parent().find(".full-tbl").find("#fieldReplyComment").val(null),comments=$("html, body").animate({scrollTop:list_children_comment.offset().top},1e3),$(list_children_comment).append(n({comment_children:e.data.comment,avatar:e.data.avatar,name:e.data.name}))}else Swal.fire({icon:"error",title:e.message})}})})},t.clickeditCommentChildren=function(){$(document).on("click",".edit",function(){$(this).find(".comment-children-edit").css("display","block"),$(this).find(".list-edit-comment-children").css("display","none")})},t.editCommentChildren=function(){$(document).on("keypress",".comment-children-edit",function(){13==event.keyCode&&(ele=$(this),comment_id=ele.attr("id"),comment=ele.val(),$.ajax({url:t.settings.api.edit_comment_children,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"POST",data:{comment:comment,comment_id:comment_id,token:t.settings.api.api_token},dataType:"json",success:function(e){if(200==e.code){var n=Handlebars.compile(t.settings.template.list_children_comment.html());comment_children_item=ele.parent().parents(".comment_children_item"),$(comment_children_item).html(n({comment_children:e.data.comment,avatar:e.data.avatar,name:e.data.name}))}else Swal.fire({icon:"warning",title:e.message})},error:function(){}}))})},t.deleteCommentChildren=function(){$(document).on("click",".delete_comment_children",function(){ele=$(this),ele.css("display","none"),comment_id=$(this).attr("id"),$.ajax({url:t.settings.api.delete_comment_children,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"delete",data:{comment_id:comment_id,token:t.settings.api.api_token},dataType:"json",success:function(e){200==e.code?(comment_children_item=$(ele).parents(".comment_children_item"),$(comment_children_item).html(""),t.deleteComment()):Swal.fire({icon:"error",title:e.message})},error:function(){}})})},t.clickReplyComment=function(){$(document).on("click",".reply_comment",function(){if(ele=$(this).closest("div #reviews"),check_login=$(ele).find(".login").attr("id"),1!=check_login)return check_login_message();el=$(this).parent().parent(),id=el.attr("id"),show_input_comment=$(this).parent().find(".full-tbl").css("display","block"),$("html, body").animate({scrollTop:$(this).parent().find(".full-tbl").offset().top},1e3)})},t.sendReplyComment=function(){$(document).on("click","#send_reply_comment",function(){if(ele=$(this).closest("div #reviews"),check_login=$(ele).find(".login").attr("id"),1!=check_login)return check_login_message();el=$(this).closest(".delete_comment"),id_comment=el.attr("id"),btn_send=$(this),btn_send.css("background","#ebebeb"),content=$(this).parent().parent().find("#fieldReplyComment").val(),$.ajax({url:t.settings.api.reply_comment,headers:{Authorization:"Bearer "+t.settings.api.token},type:"POST",data:{id_comment:id_comment,content:content,token:t.settings.api.api_token},dataType:"json",success:function(e){if(200==e.code){btn_send.css("background","#FE980F");var n=window.location.pathname;"/en"===n.substr(n.indexOf("/en"),3)?Swal.fire({icon:"success",title:"Successfully..."}).then(()=>{}):Swal.fire({icon:"success",title:"B\xecnh lu\u1eadn th\xe0nh c\xf4ng"}).then(()=>{});var i=Handlebars.compile(t.settings.template.list_children_comment.html());list_children_comment=el.find(".comments").find(".list_comment_chidren"),list_children_comment.parent().find(".full-tbl").find("#fieldReplyComment").val(null),comments=$("html, body").animate({scrollTop:list_children_comment.offset().top},1e3),$(list_children_comment).append(i({comment_children:e.data.comment,avatar:e.data.avatar,name:e.data.name}))}else Swal.fire({icon:"error",title:e.message}),btn_send.css("background","#FE980F")}})})},t.clickeditCommentChildren=function(){$(document).on("click",".edit",function(){$(this).find(".comment-children-edit").css("display","block"),$(this).find(".list-edit-comment-children").css("display","none"),$(this).find(".comment-children-edit").css("height","1px"),$(this).find(".comment-children-edit").css("height",`${$(this).find(".comment-children-edit")[0].scrollHeight}px`),$(this).find(".comment-children-edit").css("height","1px"),$(this).find(".comment-children-edit").css("height",`${$(this).find(".comment-children-edit")[0].scrollHeight}px`)})},t.editCommentChildren=function(){$(document).on("keypress",".comment-children-edit",function(){13==event.keyCode&&(ele=$(this),comment_id=ele.attr("id"),comment=ele.val(),$.ajax({url:t.settings.api.edit_comment_children,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"POST",data:{comment:comment,comment_id:comment_id,token:t.settings.api.api_token},dataType:"json",success:function(e){if(200==e.code){var n=Handlebars.compile(t.settings.template.list_children_comment.html());comment_children_item=ele.parent().parents(".comment_children_item"),$(comment_children_item).html(n({comment_children:e.data.comment,avatar:e.data.avatar,name:e.data.name}))}else Swal.fire({icon:"warning",title:e.message})},error:function(){}}))})},t.deleteCommentChildren=function(){$(document).on("click",".delete_comment_children",function(){ele=$(this),comment_id=$(this).attr("id"),$.ajax({url:t.settings.api.delete_comment_children,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"delete",data:{comment_id:comment_id,token:t.settings.api.api_token},dataType:"json",success:function(e){200==e.code?(comment_children_item=$(ele).parents(".comment_children_item"),$(comment_children_item).html("")):Swal.fire({icon:"error",title:e.message})},error:function(){}})})},t.loadComment=function(){var e=2;$(".load_more_comment").off().on("click",function(){$(".load_more_comment").css("display","none"),$("#load").css("display","block");var n=$(location).attr("href");$.ajax({url:t.settings.api.load_more_comment+"?page="+e+++"&&product_id="+n,headers:{Authorization:"Bearer "+t.settings.api.api_token},type:"GET",dataType:"json",success:function(e){if(200==e.code){var n=Handlebars.compile(t.settings.template.load_more_comment.html());show_btn_load_more_comment=e.data.show_btn_load,$(".list-comment").append(n({comments:e.data.data,show_btn_load:e.data.show_btn_load?"true":"false"}))}$(".load_more_comment").css("display","block"),$("#load").css("display","none"),0==show_btn_load_more_comment&&$(".load_more_comment").css("display","none")},error:function(){}})})},t.init=function(){t.clickshowcategory(),t.clickCategory(),t.clickEventComments(),t.clickRateProduct(),t.clickReplyComment(),t.sendReplyComment(),t.hoverRateProduct(),t.editComment(),t.clickeditComment(),t.deleteComment(),t.deleteCommentChildren(),t.clickeditCommentChildren(),t.editCommentChildren(),t.loadComment()}}$(document).ready(function(){category=new Category,category.init()});