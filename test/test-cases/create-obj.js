$("#geoselector-form").geoSelector();
test("Create GeoSelector - Valid country drop-down list", function() {
  ok($("*[name='country']"), "Country drop-down list should not be null");
});

test("Create GeoSelector - Valid state drop-down list", function() {
  ok($("*[name='state']"), "Country drop-down list should not be null");
});

test("Create GeoSelector - Country drop-down list type", function() {
  ok($("*[name='country']")[0].type.toLowerCase() == "select-one", "Country drop-down list type should be 'select-one'");
});

test("Create GeoSelector - State drop-down list type", function() {
  ok($("*[name='state']")[0].type.toLowerCase() == "select-one", "State drop-down list type should be 'select-one'");
});