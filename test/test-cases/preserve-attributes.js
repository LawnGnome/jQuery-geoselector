test("Preserve Attributes - Country drop-down list 'name' attribute", function() {
  equal($("*[name='country']").attr("name"), "country", "Country drop-down list 'name' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'name' attribute", function() {
  equal($("*[name='state']").attr("name"), "state", "State drop-down list 'name' attribute should be preserved");
});

test("Preserve Attributes - Country drop-down list 'id' attribute", function() {
  equal($("*[name='country']").attr("id"), "country", "Country drop-down list 'id' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'id' attribute", function() {
  equal($("*[name='state']").attr("id"), "state", "State drop-down list 'id' attribute should be preserved");
});

test("Preserve Attributes - Country drop-down list 'class' attribute", function() {
  equal($("*[name='country']").attr("class"), "dropdown", "Country drop-down list 'class' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'class' attribute", function() {
  equal($("*[name='state']").attr("class"), "dropdown", "State drop-down list 'class' attribute should be preserved");
});
