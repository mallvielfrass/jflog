import { Reset } from '../src/colors';
import { Jflog } from '../src/flogger'


test('print1', () => {
	const flog = new Jflog("./")
	flog.print("FFFFFFFFFFF", `1`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)

	expect(1).toBe(1);

})