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

test("Preserve Attributes - Country drop-down list 'size' attribute", function() {
  equal($("*[name='country']").attr("size"), "1", "Country drop-down list 'size' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'size' attribute", function() {
  equal($("*[name='state']").attr("size"), "1", "State drop-down list 'size' attribute should be preserved");
});

test("Preserve Attributes - Country drop-down list 'form' attribute", function() {
  equal($("*[name='country']").attr("form"), "geoselector-form", "Country drop-down list 'form' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'form' attribute", function() {
  equal($("*[name='state']").attr("form"), "geoselector-form", "State drop-down list 'form' attribute should be preserved");
});

test("Preserve Attributes - Country drop-down list 'disabled' attribute", function() {
  equal($("*[name='country']").attr("disabled"), "disabled", "Country drop-down list 'disabled' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'disabled' attribute", function() {
  equal($("*[name='state']").attr("disabled"), "disabled", "State drop-down list 'disabled' attribute should be preserved");
});

test("Preserve Attributes - Country drop-down list 'autofocus' attribute", function() {
  equal($("*[name='country']").attr("autofocus"), "autofocus", "Country drop-down list 'autofocus' attribute should be preserved");
});

test("Preserve Attributes - State drop-down list 'autofocus' attribute", function() {
  equal($("*[name='state']").attr("autofocus"), "autofocus", "State drop-down list 'autofocus' attribute should be preserved");
});
