const button = document.querySelector("button#core-api-insert-shortcode");

button.addEventListener("click", function (event) {
    event.preventDefault();
    button.classList.toggle("active");
    type_div = button.parentNode.querySelector("div.core-api-media-shortcode-type");
    if (type_div) {
        type_div.classList.toggle("active");
    }
}, false);


document.addEventListener('click', function(event) {
    const active_button = document.querySelector("button#core-api-insert-shortcode.active");
    if (active_button && !active_button.contains(event.target)) {
        active_button.classList.remove("active");
        type_div = active_button.parentNode.querySelector("div.core-api-media-shortcode-type");
        if (type_div) {
            type_div.classList.remove("active");
        }
    }
});


(function($) {
    $(document).ready(function() {
        var question_dialog = $('#core-api-question-dialog');

        question_dialog.dialog({
            title: 'Insert question shortcode',
            dialogClass: 'wp-dialog',
            autoOpen: false,
            draggable: false,
            width: 'auto',
            modal: true,
            resizable: false,
            closeOnEscape : true,
            position: {
                my: "center",
                at: "center",
                of: window
            },
            buttons: {
                insert: {
                    click: function(event) {
                        let sc_text = "";

                        id_val = question_dialog.find("#id").val()

                        if (id_val) {
                            sc_text = `[core-api-question id='${id_val}']`;
                        } else {
                            work_val = question_dialog.find("#work").val()
                            language_val = question_dialog.find("#language").val()
                            unit_val = question_dialog.find("#unit").val()
                            number_val = question_dialog.find("#number").val()

                            sc_text = "[core-api-question";

                            if (work_val) {
                                sc_text += ` work='${work_val}'`
                            }

                            if (language_val) {
                                sc_text += ` language='${language_val}'`
                            }

                            if (unit_val) {
                                sc_text += ` unit='${unit_val}'`
                            }

                            if (number_val) {
                                sc_text += ` number='${number_val}'`
                            }

                            sc_text += "]"

                        }

                        if (sc_text) {
                            window.parent.send_to_editor(sc_text);
                            window.parent.tb_remove();
                        }
                        question_dialog.dialog('close');
                    },
                    text: 'Insert',
                    class: 'button-primary'
                },
                cancel: {
                    click: function(event) {
                        question_dialog.dialog('close');
                    },
                    text: 'Cancel',
                    class: 'button'
                }
            },
            create: function(){
                $('.ui-dialog-titlebar-close').addClass('ui-button');
            },
            open: function(){
                $('.ui-widget-overlay').bind('click',function(){
                    question_dialog.dialog('close');
                })
            }
        });

        $('a.core-api-question').click(function(e) {
            e.preventDefault();
            question_dialog.dialog('open').dialog('moveToTop');
        });

    });
})(jQuery);
