<?php
if (!($countries = file('http://download.geonames.org/export/dump/countryInfo.txt'))) {
	fprintf(STDERR, "Unable to get countries\n");
	die(1);
}

if (!($divisions = file('http://download.geonames.org/export/dump/admin1CodesASCII.txt'))) {
	fprintf(STDERR, "Unable to get divisions\n");
	die(2);
}

$data = array('countries' => array(), 'divisions' => array());

foreach ($countries as $line => $country) {
	if ($country[0] == '#') {
		continue;
	}

	$fields = explode("\t", rtrim($country));
	if (count($fields) < 15) {
		fprintf(STDERR, "Malformed country on line %d: expected at least 15 fields, got %d\n", $line + 1, count($fields));
		continue;
	}

	$data['countries'][$fields[0]] = $fields[4];
}

asort($data['countries']);

foreach ($divisions as $line => $division) {
	$fields = explode("\t", rtrim($division));
	if (count($fields) == 4) {
		list($code, $name, $ascii, $geoid) = $fields;
		$data['divisions'][substr($code, 0, 2)][] = $name;
	} else {
		fprintf(STDERR, "Malformed division on line %d: expected 4 fields, got %d\n", $line + 1, count($fields));
	}
}

foreach ($data['divisions'] as $code => $divisions) {
	sort($data['divisions'][$code]);
}

echo json_encode($data);
