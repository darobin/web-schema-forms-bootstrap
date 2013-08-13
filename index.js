
function btn ($form) {
    $form.find("button[type=submit]").addClass("btn btn-default");
}

function checkbox ($form, $) {
    $form.find("div[data-wsf-type=boolean]")
         .addClass("checkbox")
         .each(function () {
             var $chk = $(this)
             ,   $label = $chk.find("label")
             ,   $ctrl = $chk.find("input, textarea, select")
             ;
             $label.text(" " + $label.text())
                   .prepend($ctrl)
                   .removeAttr("for")
                   .attr("data-wsf-type", "boolean")
                   ;
         })
         ;
}

exports.basic = function (context, cb) {
    var $form = context.$form;
    $form.find("div[data-wsf-type]")
         .not("[data-wsf-type=boolean]")
         .addClass("form-group")
         .find("input, textarea, select")
            .addClass("form-control")
         ;
    checkbox($form, context.$);
    btn($form);
    cb(null, context);
};

exports.inline = function (context, cb) {
    var $form = context.$form
    ,   $ = context.$
    ;
    $form.addClass("form-inline");
    checkbox($form, $);
    $form.find("div[data-wsf-type]")
         .not("[data-wsf-type=actions]")
         .not("[data-wsf-type=boolean]")
         .find("input, textarea, select")
            .addClass("form-control")
         .end()
         .each(function () {
             var $div = $(this)
             ,   $ctrl = $div.find("input, textarea, select").first()
             ,   text = $div.find("label").text()
             ;
             if (!$ctrl.attr("placeholder") && !$ctrl.is("select")) $ctrl.attr("placeholder", text);
             $ctrl.attr("data-wsf-type", $div.attr("data-wsf-type"));
             $div.replaceWith($ctrl);
         })
         ;
    $form.find("div[data-wsf-type=actions]")
         .each(function () {
             var $div = $(this);
             $div.replaceWith($div.find("button"));
         })
         ;
    btn($form);
    cb(null, context);
};

exports.horizontal = function (context, cb) {
    var $form = context.$form
    ,   $ = context.$
    ;
    $form.addClass("form-horizontal");
    checkbox($form, $);
    $form.find("div[data-wsf-type]")
         .not("[data-wsf-type=actions]")
         .not("[data-wsf-type=boolean]")
         .addClass("form-group")
         .find("input, textarea, select")
            .addClass("form-control")
         .end()
         .each(function () {
             var $div = $(this);
             $div.find("label").addClass("col-lg-2 control-label");
             $div.find("input, select, textarea").wrapAll("<div class='col-lg-10'></div>");
         })
         ;
    $form.find(".checkbox").wrapAll("<div class='form-group'></div>").wrapAll("<div class='col-offset-2 col-lg-10'></div>");
    $form.find("div[data-wsf-type=actions] button").wrapAll("<div class='col-offset-2 col-lg-10'></div>");
    $form.find("div[data-wsf-type=actions]").addClass("form-group");
    btn($form);
    cb(null, context);
};
