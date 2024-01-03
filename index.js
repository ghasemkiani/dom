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

export {DOM};
