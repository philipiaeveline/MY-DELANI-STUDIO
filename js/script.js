$(document).ready(function() {
$(".eve").click(function() {
    $(".eve").hide(2000)
    $(".eve1").show(2000);
});

$(".eve1").click(function() {
    $(".eve1").hide(2000)
    $(".eve").show(2000);
});
});

$(document).ready(function() {
    $(".hope").click(function() {
        $(".hope").hide(2000)
        $(".hope1").show(2000);
    });
    $(".hope1").click(function() {
        $(".hope1").hide(2000)
        $(".hope").show(2000);
    });
});

$(document).ready(function() {
    $(".cat").click(function() {
          $(".cat").hide(2000)
            $(".cat1").show(2000);
        });
        $(".cat1").click(function() {
            $(".cat1").hide(2000)
            $(".cat").show(2000);
        });
        });

        function main() {
            alert("Hello  Eveline we have received your message. Thank you for reaching out to us.");
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