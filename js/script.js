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

        $(document).ready(function() {
            $('.work1Logo').hover(function() {
              console.log('hovering')
              $("#work1Text").show();
            });
          });
        });
        console.log('it works')