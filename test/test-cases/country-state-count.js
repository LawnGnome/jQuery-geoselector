test("Country/State Count - # of American states", function() {
  $("*[name='country']").find("option[code='US']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 51, "There should be 51 American states");
});

test("Country/State Count - # of Canadian provinces and territories", function() {
  $("*[name='country']").find("option[code='CA']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 13, "There should be 13 Canadian provinces and territories");
});

test("Country/State Count - # of Mexican states", function() {
  $("*[name='country']").find("option[code='MX']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 32, "There should be 32 Mexican states");
});

test("Country/State Count - # of Italian regions", function() {
  $("*[name='country']").find("option[code='IT']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 20, "There should be 20 Italian regions");
});

test("Country/State Count - # of Spanish provinces", function() {
  $("*[name='country']").find("option[code='ES']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 19, "There should be 19 Spanish provinces");
});

test("Country/State Count - # of Russian subjects", function() {
  $("*[name='country']").find("option[code='RU']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 83, "There should be 83 Russian subjects");
});

test("Country/State Count - # of Chinese provinces", function() {
  $("*[name='country']").find("option[code='CN']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 31, "There should be 31 Chinese provinces");
});

test("Country/State Count - # of Indian states and territories", function() {
  $("*[name='country']").find("option[code='IN']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 35, "There should be 35 Indian states and territories");
});

test("Country/State Count - # of Australian states and territories", function() {
  $("*[name='country']").find("option[code='AU']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 8, "There should be 8 Australian states and territories");
});

test("Country/State Count - # of Malaysian states", function() {
  $("*[name='country']").find("option[code='MY']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 16, "There should be 16 Malaysian states");
});

test("Country/State Count - # of Bruneian states", function() {
  $("*[name='country']").find("option[code='BN']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 4, "There should be 4 Bruneian districts");
});

test("Country/State Count - # of Singaporean districts", function() {
  $("*[name='country']").find("option[code='SG']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 5, "There should be 5 Singaporean districts");
});

test("Country/State Count - # of regions in Antarctica", function() {
  $("*[name='country']").find("option[code='AQ']").attr("selected", "selected");
  $("*[name='country']").trigger("change");
  ok($("*[name='state'] option").length == 0, "There should be no region in Antarctica");
});