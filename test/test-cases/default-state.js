test("Default selected state - Western Australia", function() {
  var defaultState = $("*[name='state']").find("option[selected='selected']");
  ok(defaultState.text() == "Western Australia", "Default selected state should be Western Australia");
});