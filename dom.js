import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";

class DOM extends Obj {
	static {
		cutil.extend(this, {
			get window() {
				return this.get();
			},
		});
	}
	static get() {
		return cutil.global().window;
	}
}

const iwdom = {
	DOM,
	_window: null,
	_document: null,
	get window() {
		if (cutil.na(this._window)) {
			this._window = this.getWindow();
		}
		return this._window;
	},
	set window(window) {
		this._window = window;
	},
	get document() {
		if (cutil.na(this._document)) {
			this._document = this.getDocument();
		}
		return this._document;
	},
	set document(document) {
		this._document = document;
	},
	getWindow() {
		return this.DOM.get();
	},
	getDocument() {
		return this.window.document;
	},
};

export {DOM, iwdom};
