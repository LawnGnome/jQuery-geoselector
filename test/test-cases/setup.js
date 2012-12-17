QUnit.testStart(setUp);
function setUp(){
  $("#geoselector-form").geoSelector({data:"../divisions.json"});
}