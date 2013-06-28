(function() {

function convertPathToDomId(path) {
  return path.replace(/^\//, '#').replace(/\//g, '-');
}

var _computePath = Wheelhouse.Form.computePath;
Wheelhouse.Form.computePath = function() {
  var path = _computePath();
  var $checkbox = $("#page_fragment");

  if ($checkbox.is(':checked')) {
    path = convertPathToDomId(path);
  }

  return path;
};

$(function() {
  var $fragment = $("#page_fragment");
  var $path = $("#path");
  
  function updatePathFieldStatus() {
    if ($fragment.is(':checked')) {
      $path.attr('disabled', 'disabled').addClass('disabled');
    } else {
      $path.removeAttr('disabled').removeClass('disabled');
    }
  }

  $fragment.click(function() {
    updatePathFieldStatus();
    Wheelhouse.Form.updatePath();
  });
  
  updatePathFieldStatus();
});

})();
