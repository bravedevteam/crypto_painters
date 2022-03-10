$(function(){
  // 메인 리스트
  $(".listType a").click(function(e){
    e.preventDefault();
    var type = $(this).attr("data-type");

    $(this).addClass("on").siblings().removeClass("on");

    if(type == "thumb"){
      $(this).parents(".boxList").find(".list").addClass("is--thumb");
    }else if(type == "list"){
      $(this).parents(".boxList").find(".list").removeClass("is--thumb");
    }
  });

  // 탭
  $(".tabArea a").click(function(e){
    e.preventDefault();
    var target = $(this).attr("data-tab");
    $(this).addClass("active").siblings().removeClass("active");
    $("#"+target).addClass("active").siblings(".tabCont").removeClass("active");

    if($(this).parent().hasClass("is--action")){
      var idx = $(this).index();
      $(this).parent().attr("class", "tabArea is--action");
      $(this).parent().addClass("pos"+idx);
    }
  });

  // 헤더 액션
  $(window).on("scroll", function(){
    var _top = $(this).scrollTop();
    if(0 < _top){
      $("#header").addClass("fixed");
      if($("#container").hasClass("main")){
        $("#header h1").removeClass("is--white");
      }
    }else{
      $("#header").removeClass("fixed");
      if($("#container").hasClass("main")){
        $("#header h1").addClass("is--white");
      }
    }
  });
});