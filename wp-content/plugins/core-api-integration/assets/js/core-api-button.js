const CORE_API_URL = 'https://core-api.electricbook.works/'

const button = document.querySelector("button#core-api-insert-shortcode");
if (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        button.classList.toggle("active");
        type_div = button.parentNode.querySelector("div.core-api-media-shortcode-type");
        if (type_div) {
            type_div.classList.toggle("active");
        }
    }, false);
    
    
    document.addEventListener('click', function (event) {
        const active_button = document.querySelector("button#core-api-insert-shortcode.active");
        if (active_button && !active_button.contains(event.target)) {
            active_button.classList.remove("active");
            type_div = active_button.parentNode.querySelector("div.core-api-media-shortcode-type");
            if (type_div) {
                type_div.classList.remove("active");
            }
        }
    });   
}

async function checkResourcesExists(resourceType, args) {
    const params = new URLSearchParams(args);
    const url = `${CORE_API_URL}/${resourceType}?${params}`

    const response = await fetch(url);
    const json = await response.json();

    return (!resourceType in json || json[resourceType].length !== 0);
}


(async ($) => {
    $(document).ready(function () {
        var question_dialog = $('#core-api-questions-dialog');

        if (question_dialog) {
            question_dialog.dialog({
                title: 'Insert question shortcode',
                dialogClass: 'wp-dialog',
                autoOpen: false,
                draggable: false,
                width: 'auto',
                modal: true,
                resizable: false,
                closeOnEscape: true,
                position: {
                    my: "center",
                    at: "center",
                    of: window
                },
                buttons: {
                    insert: {
                        click: function (event) {
                            let sc_text = "";

                            series_val = question_dialog.find("#core-api-inputs-series").val();
                            works_val = question_dialog.find("#core-api-inputs-works").val();
                            languages_val = question_dialog.find("#core-api-inputs-languages").val();
                            units_val = question_dialog.find("#core-api-inputs-units").val();

                            sc_text = "[core-api-question";

                            if (series_val) {
                                sc_text += ` series='${series_val}'`
                            }

                            if (works_val) {
                                sc_text += ` work='${works_val}'`
                            }

                            if (languages_val) {
                                sc_text += ` language='${languages_val}'`
                            }

                            if (units_val) {
                                sc_text += ` unit='${units_val}'`
                            }

                            sc_text += "]"

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
                        click: function (event) {
                            question_dialog.dialog('close');
                        },
                        text: 'Cancel',
                        class: 'button'
                    }
                },
                create: function () {
                    $('.ui-dialog-titlebar-close').addClass('ui-button');
                },
                open: function () {
                    $('.ui-widget-overlay').bind('click', function () {
                        question_dialog.dialog('close');
                    })
                }
            });
    
            $('a.core-api-question').click(function (e) {
                e.preventDefault();
                question_dialog.dialog('open').dialog('moveToTop');
            });
        }

        var glossary_dialog = $('#core-api-glossary_terms-dialog');

        if (glossary_dialog) {
            glossary_dialog.dialog({
                title: 'Insert glossary shortcode',
                dialogClass: 'wp-dialog',
                autoOpen: false,
                draggable: false,
                width: 'auto',
                modal: true,
                resizable: false,
                closeOnEscape: true,
                position: {
                    my: "center",
                    at: "center",
                    of: window
                },
                buttons: {
                    insert: {
                        click: async function (event) {
                            let sc_text = "";

                            term_val = glossary_dialog.find("#core-api-input-glossary_term").val();

                            exists = await checkResourcesExists("glossary_terms", {"term": term_val});

                            if (!exists) {
                                alert(`No glossary term found matching '${term_val}'.`);
                                return
                            }
                            
                            sc_text = "[core-api-glossary-term";

                            if (term_val) {
                                sc_text += ` term='${term_val}'`
                            }

                            sc_text += "]"

                            if (sc_text) {
                                window.parent.send_to_editor(sc_text);
                                window.parent.tb_remove();
                            }

                            glossary_dialog.dialog('close');
                        },
                        text: 'Insert',
                        class: 'button-primary'
                    },
                    cancel: {
                        click: function (event) {
                            glossary_dialog.dialog('close');
                        },
                        text: 'Cancel',
                        class: 'button'
                    }
                },
                create: function () {
                    $('.ui-dialog-titlebar-close').addClass('ui-button');
                },
                open: function () {
                    $('.ui-widget-overlay').bind('click', function () {
                        glossary_dialog.dialog('close');
                    })
                }
            });
    
            $('a.core-api-glossary_term').click(function (e) {
                e.preventDefault();
                glossary_dialog.dialog('open').dialog('moveToTop');
            });
        }


    });
})(jQuery);
