// Makes the navigation link matching the current url active.
$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).closest("li").addClass("active");
        }
    });
});
