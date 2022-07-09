import { Reset } from '../../src/colors';
import { Flogger } from '../../src/flogger'


test('print1', () => {
	const flog = new Flogger("./")
	flog.print("FFFFFFFFFFF", `1`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `2`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `3`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `4`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `5`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `6`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `7`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset)
	flog.print("FFFFFFFFFFF", `8`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset, function kek() { })
	flog.print("FFFFFFFFFFF", `9`, "fdfdfdf", 454554, { edd: "fdfdf" }, Reset,)
	console.log("FddddF", `9`, "fdfdfdf", 454554, { edd: "fdfdf" })
	expect(1).toBe(1);

})