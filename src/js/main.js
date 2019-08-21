(function ($) {
    $(document).ready(function () {


        $('.datepicker').datepicker({
            minDate: 0,
            showOn: "button",
            numberOfMonths: 1,
            showOtherMonths: true,
            dateFormat: "dd_mm_yy",
            onSelect: function (date) {
                $('#to').datepicker('option', 'minDate', date)
            },
            beforeShow: function (input, inst) {
                var rect = input.getBoundingClientRect();
                setTimeout(function () {
                    inst.dpDiv.css({top: rect.top + 35, left: rect.left + 0});
                }, 0);
            },

        });

        $(".date-from").append("<button class='close'></button>");
        $(".date-to").append("<button class='close'></button>");

        $('.close').click(function () {
            $(this).parent('div').children('input').val('');

        })
    });
})(jQuery);