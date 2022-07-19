import Jflog from './flogger'
import express from 'express'
import useragent from 'express-useragent'
import { getClientIp } from '@supercharge/request-ip'
export class ExpressServer {
	private jsflog: Jflog
	constructor(jflog: Jflog) {
		this.jsflog = jflog
	}


}
export class ExpressApiLogger {
	private jsflog: Jflog
	//private seed: string
	constructor(jflog: Jflog) {
		this.jsflog = jflog
		//	this.seed = seedToken
	}
	private generateHeaderString(userAgentsRaw: string): string {
		const heads = ''
		try {
			const userAgents = useragent.parse(userAgentsRaw)
			//	console.log({ userAgents })
			const browser = userAgents.browser
			const version = userAgents.version
			const os = userAgents.os
			const platform = userAgents.platform

			const source = userAgents.source
			return `${browser} ${version} ${os} ${platform} ${source}`
		} catch (error) {
			this.jsflog.print('error', error.stack)
		}
		return heads
	}
	private parseHeaders(request: express.Request): string {
		if (!request.headers) {
			return ''
		}
		const userAgentsRawExist = Object.prototype.hasOwnProperty.call(request.headers, 'user-agent')
		if (!userAgentsRawExist) {
			return ''
		}
		//return userAgentsRaw
		const rw = this.generateHeaderString(request.headers['user-agent'])

		//sconsole.log({ rw })
		return rw
	}
	async apiLog(request: express.Request, response: express.Response, next: express.NextFunction) {
		//sconst userAgentHeaders = request.headers['user-agent']
		const msgHeaders = this.parseHeaders(request)

		const ip = getClientIp(request)
		//	console.log("kek")
		//	console.log({ msgHeaders })
		// console.log({ agent: request.useragent })
		//const origIp = request.headers ? (request.headers['x-forwarded-for'] || request.connection?.remoteAddress || "") : request.connection.remoteAddress || ""
		//	console.log(ip);
		const url = request.url
		const method = request.method
		// const browser = userAgents.browser
		// const version = userAgents.version
		// const os = userAgents.os
		// const platform = userAgents.platform

		// const source = userAgents.source
		this.jsflog.print('api', `${method} ${url} ${ip} ${msgHeaders}`)
		return next()

	}


}

export class ExpressHttpApiFileLogAccess {
	private jsflog: Jflog
	private seed: string
	Router: express.Router
	constructor(jflog: Jflog, seed: string) {
		this.jsflog = jflog
		this.seed = seed
		this.Router = express.Router()
		this.Router.use('/', async function (request, response) {
			response.json({ method: 'api' })
		})
	}


}