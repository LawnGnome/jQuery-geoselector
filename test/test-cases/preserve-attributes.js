test("Preserve Attributes - Country drop-down list 'name' attribute", function() {
  ok($("*[name='country']"), "Country drop-down list 'name' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'name' attribute", function() {
  ok($("*[name='state']"), "State drop-down list 'name' attribute should be preserved");
});