YANGFILES := yang/ietf-l2-topology@2018-06-29.yang yang/ietf-l3-unicast-topology@2018-02-26.yang yang/ietf-network-topology@2018-02-26.yang yang/ietf-network@2018-02-26.yang
JTOX := topol23.jtox
JSONSCHEMA := topol23.jsonschema
TARGETJSON := target.json target2.json target3.json
TARGETXML := $(TARGETJSON:%.json=%.xml)
CHECKER := nwmodel-checker.rb
CHECKERSRC := $(CHECKER) $(wildcard topo_checker/*.rb)

all: $(TARGETXML)

$(TARGETXML): $(TARGETJSON) $(JTOX) $(CHECKERSRC)

%.xml: %.json
	echo "# convert json 2 xml" $<
	jsonlint-cli -s $(JSONSCHEMA) $<
	ruby $(CHECKER) $<
	json2xml $(JTOX) $< | xmllint --output $@ --format -

$(JTOX): $(YANGFILES)
	pyang -f jtox -o $(JTOX) $(YANGFILES)

jsonschema: $(YANGFILES)
	pyang -f json_schema -o $(JSONSCHEMA) yang/ietf-network@2018-02-26.yang yang/ietf-network@2018-02-26.yang yang/ietf-l3-unicast-topology@2018-02-26.yang yang/ietf-l2-topology@2018-06-29.yang
