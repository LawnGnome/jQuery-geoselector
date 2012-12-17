test("Create GeoSelector country drop-down", function() {
  $("#geoselector-form").geoSelector();
  ok($("#country"), "Country drop-down should not be null");
});