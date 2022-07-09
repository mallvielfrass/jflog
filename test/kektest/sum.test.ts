import { Flogger } from '../../src/flogger'


test('print1', () => {
	const flog = new Flogger("./")
	flog.print("FFFFFFFFFFF", `FEFAEFEEF`)

	expect(1).toBe(1);
})