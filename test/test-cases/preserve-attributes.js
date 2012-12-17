test("Preserve Attributes - Country drop-down list 'name' attribute", function() {
  equal($("*[name='country']").attr("name"), "country", "Country drop-down list 'name' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'name' attribute", function() {
  equal($("*[name='state']").attr("name"), "state", "State drop-down list 'name' attribute should be preserved");
});
