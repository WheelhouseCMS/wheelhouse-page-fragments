(function() {
  
var _computePath = Wheelhouse.Form.computePath;
Wheelhouse.Form.computePath = function() {
  var path = _computePath();

  if ($("#page_fragment").is(':checked')) {
    path = path.replace(/^\//, '#');
    path = path.replace(/\//, '-');
  }

  return path;
};

$(function() {
  function updatePathInput() {
    if ($("#page_fragment").is(':checked')) {
      $("#path").attr('disabled', 'disabled').addClass('disabled');
    } else {
      $("#path").removeAttr('disabled').removeClass('disabled');
    }

    Wheelhouse.Form.updatePath();
  }

  $("#page_fragment").click(updatePathInput);
  updatePathInput();
});

})();
