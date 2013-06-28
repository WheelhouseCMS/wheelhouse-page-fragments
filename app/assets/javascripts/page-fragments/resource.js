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
  $("#page_fragment").click(Wheelhouse.Form.updatePath);
});

})();
