(function ($) {
	$.fn.geoSelector = function (options) {
		var settings = $.extend({
			countrySelector: "*[name='country']",
			stateSelector: "*[name='state']",
			data: "divisions.json",
			defaultCountry: "Australia",
			defaultState: "Western Australia",
		}, options);

		var countries = $(settings.countrySelector, this);
		var states = $(settings.stateSelector, this);

		if (countries.length != 1) {
			throw "Unexpected number of country selectors";
		}

		if (states.length != 1) {
			throw "Unexpected number of state selectors";
		}

		$.getJSON(settings.data, function (data) {
			var country = $("<select />").attr("name", countries.attr("name"));
			var state = $("<select />").attr("name", states.attr("name"));

			$.each(data.countries, function (code, name) {
				var option = $("<option />").text(name).attr("code", code).appendTo(country);

				if (settings.defaultCountry == name) {
					option.attr("selected", "selected");
				}
			});

			var updateStates = function (code, def) {
				state.empty();
				if (data.divisions[code] && data.divisions[code].length) {
					$.each(data.divisions[code], function (i, name) {
						var option = $("<option />").text(name).appendTo(state);

						if (def == name) {
							option.attr("selected", "selected");
						}
					});
				} else {
					$("<option />").text(" ").appendTo(state);
				}
			};

			countries.replaceWith(country);
			states.replaceWith(state);
			updateStates($("option:selected", country).attr("code"), settings.defaultState);

			country.change(function () {
				updateStates($("option:selected", this).attr("code"));
				return true;
			});
		});
	};
})(jQuery);
