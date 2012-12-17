test("Country/State Count - # of states within the United States", function() {
  var selectedCountryCode = "US";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 51, "# of states in the US should be 51");
});

function buildSelectedOption(code){
  return jQuery("option").attr("code", "US").attr("selected");;
}