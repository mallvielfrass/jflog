import { Flogger } from '../src/flogger'


test('print', () => {
	const flog = new Flogger("./")
	flog.print("333", 3434)

	expect(1).toBe(1);
})