$(document).ready(function() {
$(".eve").click(function() {
    $(".eve").hide()
    $(".eve1").show();
});

$(".eve1").click(function() {
    $(".eve1").hide()
    $(".eve").show();
});
});

$(document).ready(function() {
    $(".hope").click(function() {
        $(".hope").hide()
        $(".hope1").show();
    });
    $(".hope1").click(function() {
        $(".hope1").hide()
        $(".hope").show();
    });
});

$(document).ready(function() {
    $(".cat").click(function() {
          $(".cat").hide()
            $(".cat1").show();
        });
        $(".cat1").click(function() {
            $(".cat1").hide()
            $(".cat").show();
        });
        });

        function main() {
            var name = document.getElementById("name").value;
            if(name){
                alert("Hello,"+name + " We have received your message .thank you for reaching out to us.**");
            }
        }
        
        

$("#img1").hover(function(){
    $(".log1").toggle();
})
$("#img2").hover(function(){
    $(".log2").toggle();
})
$("#img3").hover(function(){
    $(".log3").toggle();
})
$("#img4").hover(function(){
    $(".log4").toggle();
})
$("#img5").hover(function(){
    $(".log5").toggle();
})
$("#img6").hover(function(){
    $(".log6").toggle();
})
$("#img7").hover(function(){
    $(".log7").toggle();
})
$("#img8").hover(function(){
    $(".log8").toggle();
})