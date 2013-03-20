$(function() {

Wheelhouse.Form._computePath = function() {
  var label = $('#label').val();
  var slug = $.slugify(label);
  var parentPath = $('#parent_id').find(':selected').attr('data-path');

  return (parentPath && parentPath != '/') ? [parentPath, slug].join('/') : '/' + slug;
};

Wheelhouse.Form.computePath = function() {
  var path = Wheelhouse.Form._computePath();
  
  if ($("#page_fragment").is(':checked')) {
    path = path.replace(/^\//, '#');
    path = path.replace(/\//, '-');
  } else {
    path = path.replace(/^#/, '/');
  }
 
  return path;
};

Wheelhouse.Form.recomputePath = function() {
  $('#path').val(Wheelhouse.Form.computePath());
};

Wheelhouse.Form.autofill = function(title) {
  var parent = $('#parent_id');
  var label = $('#label');
  var path = $('#path');

  // Don't add hooks if label or path is already customized
  if (title.get(0) && label.val() != title.val()) return;
  if (path.get(0) && path.val() != "" && path.val() != Wheelhouse.Form.computePath()) return;

  var customLabel = false;
  var customPath = false;

  function updatePath() {
    if (!customPath) Wheelhouse.Form.recomputePath();
  }

  label.unbind('input').input(function() {
    customLabel = true;
    updatePath()
  });
  title.unbind('input').input(function() {
    if (!customLabel) {;
      label.val($(this).val());
      updatePath();
    }
  });
  path.unbind('input').input(function() { customPath = true; });
  parent.unbind('change').change(updatePath);
};

var title = $('input[data-title=true]:first');
Wheelhouse.Form.autofill(title);

function updatePathInput() {
  if ($("#page_fragment").is(':checked')) {
    $("#path").attr('disabled', 'disabled').addClass('disabled');
  } else {
    $("#path").removeAttr('disabled').removeClass('disabled');
  }

  Wheelhouse.Form.recomputePath();
}

$("#page_fragment").click(updatePathInput);
updatePathInput();

});
