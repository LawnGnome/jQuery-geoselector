test("Default selected country - Australia", function() {
  var defaultCountry = $("*[name='country']").find("option[selected='selected']");
  ok(defaultCountry.attr("code") == "AU", "Default selected country should be Australia");
});