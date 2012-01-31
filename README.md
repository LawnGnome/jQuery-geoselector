# jQuery-geoselector (pre-0.1.0)

This is a jQuery plugin that provides a country and state selector based on the
[GeoNames](http://www.geonames.org/) database. (GeoNames is sensational. If you
haven't already played with it, do so.)

## Requirements

* [jQuery](http://jquery.com/). This works back at least as far as jQuery
  1.2.3, although in practice I don't really care about versions pre-1.6.
  Sorry. Pull requests if I break pre-1.6 compatibility will be looked upon
  favourably.

* If you want to update the data from GeoNames, you'll also need
  [PHP](http://php.net/) 5.2 or later.

## Basic usage

Create a couple of elements to be replaced within your HTML. (This ensures some
level of compatibility for non-JavaScript clients.) I use inputs, personally.
That is, something like this:

    <label>Country: <input name="country"></label>
    <label>State: <input name="state"></label>

Then load jQuery and the plugin, and call the plugin on the container for those
inputs. (Say, a form.)

    $(function () { $("form").geoSelector(); });

Once the JSON has been downloaded (it'll default to the same directory as the
HTML file), voilà! You will now have cascading select elements. They will send
the actual names selected when the form is submitted, not the GeoNames codes.
(I find this more useful. Your mileage may vary.)

## Options

The `geoSelector` method supports a handful of options, all of which are
optional. You can provide an options object as the first argument to
`geoSelector` like so:

    $("form").geoSelector({ data: "/js/divisions.json" });

The options available are:

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Default<th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>countrySelector</td>
			<td><code>*[name='country']</code></td>
			<td>
				The selector used to find the country element to replace. This
				should match only one element.
			</td>
		</tr>
		<tr>
			<td>stateSelector</td>
			<td><code>*[name='state']</code></td>
			<td>
				The selector used to find the state element to replace. This
				should match only one element.
			</td>
		</tr>
		<tr>
			<td>data</td>
			<td><code>divisions.json</code></td>
			<td>
				The path to the GeoNames JSON file. This needs to be relative
				to the HTML page, not the JavaScript file, since it's loaded
				via AJAX.
			</td>
		</tr>
		<tr>
			<td>defaultCountry</td>
			<td><code>Australia</code></td>
			<td>The default country to select.</td>
		</tr>
		<tr>
			<td>defaultState</td>
			<td><code>Western Australia</code></td>
			<td>The default state to select.</td>
		</tr>
	</tbody>
</table>

## Updating the GeoNames data

To update the data from GeoNames:

    php data/update.php > divisions.json

It's that easy!

## Licences

The jQuery plugin is released under the MIT Licence, along with the update
script and any other files included that aren't sourced from GeoNames.

The data contained within divisions.json is sourced from GeoNames and is
released under the Creative Commons Attribution 3.0 License. All copyright
remains with GeoNames for this data.

## Contributing

I welcome pull requests, issues, documentation, tests, and pretty much any
other help, given the complete lack of free time I have for this sort of thing.
You can contact me [via e-mail](mailto:aharvey@php.net) or 
[on Twitter](https://twitter.com/LGnome) if you really want to.
