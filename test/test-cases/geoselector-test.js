test("Create GeoSelector - Valid country drop-down", function() {
  $("#geoselector-form").geoSelector();
  ok($("*[name='country']"), "Country drop-down should not be null");
});

test("Create GeoSelector - Valid state drop-down", function() {
  $("#geoselector-form").geoSelector();
  ok($("*[name='state']"), "Country drop-down should not be null");
});