import test from "node:test";
import assert from "node:assert";

import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";
import {DOM} from "@ghasemkiani/dom";
import {iwdom} from "@ghasemkiani/dom";

test("DOM is accessible", async t => {
	assert.ok(DOM);
});

test("iwdom is accessible", async t => {
	assert.ok(iwdom);
});

test("calling DOM.get does not throw any errors", async t => {
	let window = DOM.get();
});

test("using iwdom", async t => {
	class Test extends cutil.mixin(Obj, iwdom) {}
	let x = new Test();
	assert.ok("window" in x);
	assert.ok("document" in x);
});
