test("Country/State Count - # of American states", function() {
  var selectedCountryCode = "US";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 51, "There should be 51 American states");
});

test("Country/State Count - # of Canadian provinces and territories", function() {
  var selectedCountryCode = "CA";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 13, "There should be 13 Canadian provinces and territories");
});

test("Country/State Count - # of Mexican states", function() {
  var selectedCountryCode = "MX";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 32, "There should be 32 Mexican states");
});

test("Country/State Count - # of Italian regions", function() {
  var selectedCountryCode = "IT";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 20, "There should be 20 Italian regions");
});

test("Country/State Count - # of Spanish provinces", function() {
  var selectedCountryCode = "ES";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 19, "There should be 19 Spanish provinces");
});

test("Country/State Count - # of Russian subjects", function() {
  var selectedCountryCode = "RU";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 83, "There should be 83 Russian subjects");
});

test("Country/State Count - # of Chinese provinces", function() {
  var selectedCountryCode = "CN";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 31, "There should be 31 Chinese provinces");
});

test("Country/State Count - # of Indian states and territories", function() {
  var selectedCountryCode = "IN";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 35, "There should be 35 Indian states and territories");
});

test("Country/State Count - # of Australian states and territories", function() {
  var selectedCountryCode = "AU";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 8, "There should be 8 Australian states and territories");
});

test("Country/State Count - # of Malaysian states", function() {
  var selectedCountryCode = "MY";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 16, "There should be 16 Malaysian states");
});

test("Country/State Count - # of Bruneian states", function() {
  var selectedCountryCode = "BN";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 4, "There should be 4 Bruneian districts");
});

test("Country/State Count - # of Singaporean districts", function() {
  var selectedCountryCode = "SG";
  var selectedOptionObj = buildSelectedOption(selectedCountryCode);
  $("*[name='country']").append(selectedOptionObj);
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 5, "There should be 5 Singaporean districts");
});

function buildSelectedOption(code){
  return jQuery("option").attr("code", code).attr("selected");;
}