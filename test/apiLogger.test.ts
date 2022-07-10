import { Reset } from '../src/colors';
import { Jflog } from '../src/flogger'
import { ExpressApiLogger } from '../src/floggerExpress'
import { NextFunction, Request, Response } from 'express';
test('api log', () => {
	const flog = new Jflog("./")

	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let nextFunction: NextFunction = jest.fn();
	mockRequest = {
		headers: {
			'x-forwarded-for': "127.0.0.1",
			"user-agent": "Mozilla/ 5.0(X11; Linux x86_64; rv: 101.0) Gecko / 20100101 Firefox / 101.0",
			'content-type': 'application/json',
			'Accept': '*/*',
			'Content-Length': '43'
		}

	}
	const middleLog = new ExpressApiLogger(flog)
	middleLog.apiLog(mockRequest as Request, mockResponse as Response, nextFunction)

	expect(nextFunction).toBeCalledTimes(1);

})
