QUnit.done(removeSelected);
function removeSelected(){
  $("*[name='country']").find("option[selected='selected']").removeAttr("selected");
  $("*[name='state']").find("option[selected='selected']").removeAttr("selected");
  
  $("*[name='country']").find("option[code='AU']").attr("selected", "selected").trigger("change");
  $("*[name='state']").find("option[code='Western Australia']").attr("selected", "selected");
}