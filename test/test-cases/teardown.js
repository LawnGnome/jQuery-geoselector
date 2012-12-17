QUnit.done(removeSelected);
function removeSelected(){
  $("*[name='country']").find("option[selected='selected']").removeAttr("selected");
  $("*[name='state']").find("option[selected='selected']").removeAttr("selected");
}