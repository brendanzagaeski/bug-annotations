var getBugFilterElements = function () { return $("input.filter,select.filter"); };

var needToReadQueryParams = true;
var queryParams = {};
var readQueryParams = function (event) {

    if (!needToReadQueryParams) {
        needToReadQueryParams = true;
        return;
    }

    if (window.location.hash === "") {
        return;
    }

    var queryUrlParts = window.location.hash.slice (1).split ("&");
    if (!queryUrlParts) {
        return;
    }

    getBugFilterElements ().filter ("input").val ("");
    getBugFilterElements ().filter ("select").prop ("selectedIndex", 0);

    $(queryUrlParts).each (function (index) {
        var parts = this.split ("=");
        var name = decodeURIComponent (parts [0]) + "-filter";
        var value = decodeURIComponent (parts [1]);
        queryParams [name] = value;
        $("#" + name).each (function (index) {
            if ($(this).is ("input")) {
                $(this).val (value);
            }
            else {
                $(this).prop ("selectedIndex", $(this).children ("[value='" + value +"']").index ());
            }
        });
    });

    filterRows ();
};

$(window).load (readQueryParams);
$(window).hashchange (readQueryParams);

var updateQueryParams = function () {
    queryString = $("input,select")
        .map (inputSelectGetUrlComponent)
        .toArray ()
        .join ("&");
    if (queryString.length > 1) {
        if (window.location.hash === "#" + queryString) {
            return;
        }
        needToReadQueryParams = false;
        window.location.hash = queryString;
    }
    else {
        needToReadQueryParams = false;
        window.location.hash = "_";
    }

    filterRows ();
};

var inputSelectGetUrlComponent = function (index) {
    var valueRaw = inputSelectQueryValue (this);
    if (!valueRaw) {
        return;
    }
    var value = encodeURIComponent (valueRaw);
    var name = encodeURIComponent (this.id.replace (/-filter$/, ""));
    return name + "=" + value;
};

var inputSelectQueryValue = function (element) {
    if ($(element).is ("input")) {
        var value = $(element).val ();
        if (value != "") {
            return value;
        }
    }
    else {
        var value = $(element).prop ("selectedIndex");
        if (value != 0) {
            return $(element).children (":nth-child(" + (value + 1) +")").attr ("value");
        }
    }
};

$("input").keypress (function (event) {
    if (event.which == 13) {
        updateQueryParams ();
    }
});

$("button.clear").click(function (e) {
    $(this).closest ("td").children ("input").val ("");
    $(this).closest ("td").children ("select").prop ("selectedIndex", 0);
    updateQueryParams ();
});

$("button.apply").click(function () {
    updateQueryParams ();
});

$("select").change (function () {
    updateQueryParams ();
});

var filterRows = function () {

    $("tr.filters p.error").remove ();
    $("input.filter.error").removeClass ("error");

    $("table.buglist").find ("tr").not ("table table tr").slice (2).each (function (index) {
        var row = this;
        var hide = false;

        $(row).children ("td").each (function (index) {
            var cell = this;
            var filterElement = ($($("tr.filters").children ("td") [index]).children ().filter ("input, select")) [0];
            if ($(filterElement).is ("input")) {
                if (filterElement.value === "") {
                    return;
                }

                var checkOthers = true;

                $(splitRegexesWithGrouping (filterElement.value)).each (function (index) {
                    try {
                        var re = new RegExp (this, "i");
                    }
                    catch (ex) {
                        $(filterElement).addClass ("error");
                        $("<p class=\"error\">Invalid regex: " + ex.message + "</p>").insertAfter ($(filterElement));
                        throw ex;
                    }

                    if (!re.test ($.trim($(cell).text ()))) {
                        hide = true;
                        checkOthers = false;
                        return false;
                    }
                });

                return checkOthers;
            }
            else {
                if (filterElement.value === "all") {
                    return;
                }
                var released = $(cell).text ().indexOf ("X") > -1;
                if (filterElement.value === "fixed" && !released) {
                    hide = true;
                    return false;
                }
                if (filterElement.value === "open" && released) {
                    hide = true;
                    return false;
                }
            }
        });
        if (hide) { $(row).hide (); }
        else { $(row).show (); }
    })
};

var splitRegexesWithGrouping = function (re) {

    var escapeOn = false;
    var pairedDelimiters = [
        { start: "\"", end: "\"", on: false },
        { start: "'", end: "'", on: false },
        { start: "“", end: "”", on: false},
        { start: "‘", end: "’", on: false},
    ];
    var lastDelimiter = null;
    var regexes = [];
    var current = "";
    var skip = false;

    re.split ("").forEach (function (character, index) {
        if (escapeOn) {
            escapeOn = false;
            current += character;
            return;
        }

        if (character === "\\") {
            escapeOn = true;
            return;
        }

        skip = false;

        pairedDelimiters.forEach (function (pair) {
            if (character === (pair.on ? pair.end : pair.start)
                && !pairedDelimiters.some (function (otherPair) {
                    return (otherPair !== pair && otherPair.on)
                })) {

                pair.on = !pair.on;

                skip = true;
            }
        });

        if (skip) { return }

        if (character === " "
            && !pairedDelimiters.some (function (pair) {
                return (pair.on)
            })) {
                if (current !== "") {
                    var result = current;
                    regexes.push (result);
                    current = "";
                }
            return;
        }
        current += character;
    });

    if (current !== "") {
        regexes.push (current);
    }

    return regexes;
};
