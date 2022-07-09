/* eslint-disable @typescript-eslint/no-var-requires */
//src/avatars/
import fs from 'fs'
import path from 'path'
import format from 'date-format'
import 'dotenv/config'
import { FgGreen, Reset } from './colors'
//require('dotenv').config()

export enum logTypes {
	global = 'loggerFile_',
	auth = 'authInfo_',
	io = 'io_',
	trasfer = 'transferFile_',
	config = 'configFile_',
	panic = 'panic_',
	service = 'service_'
}
export class Flogger {
	file: string
	absolutePath: string
	regx: RegExp

	constructor(relativePathFolder: string) {
		console.log({ main: require.main.path });

		// const absolutePath = pathFolder// `${process.env.MOUNT_PATH_VOLUME}/logs`

		// flog.write(format('yyyy-MM-dd', new Date()))
		this.absolutePath = path.isAbsolute(relativePathFolder) ? relativePathFolder : path.join(require.main.path, relativePathFolder)
		console.log({ absolutePath: this.absolutePath })
		if (!fs.existsSync(this.absolutePath)) {
			fs.mkdirSync(this.absolutePath)
		}


		this.file = this.absolutePath + '/default' //+ '/' + prefix
		// flog.write("path:", path)
		// flog.write("file:", this.file)
		//  this.regx = new RegExp(`\x1b\\[[0-9]{1,2}m`, 'g')
		this.regx = new RegExp('\\\\[xu][0]{0,2}1b\\[[0-9]{1,2}m', 'g')
	}
	clearRegexp(f: string): string {

		const newstr = f.replaceAll(this.regx, '')

		return newstr
	}
	unpack(optionalParams: any[]): any[] {
		const res: Array<any> = []
		for (let i = 0; i < optionalParams.length; i++) {
			optionalParams[i] ? res.push(JSON.stringify(optionalParams[i]).replaceAll(this.regx, '')) : res.push(JSON.stringify(optionalParams[i]))
			// res.push(JSON.stringify(optionalParams[i]).replaceAll(this.regx, ''))
		}
		return res
	}
	async write(message: any, ...optionalParams: any[]) {

		const time: string = format('yyyy-MM-dd hh:mm:ss.SSS', new Date())
		const date = format(time.split(' ')[0])
		// flog.write("date:", date)
		// flog.write("time:", time)

		const msgData = JSON.stringify(message) + ' ' + this.unpack(optionalParams)
		const msg = `${FgGreen + '[' + time + ']' + Reset} ` + (typeof message === 'string' ? message : JSON.stringify(message)) + ' ' + this.unpack(optionalParams)
		const cmsg = this.clearRegexp(`[${time}] ` + msgData + '\n')
		console.log(msg)

		fs.appendFile(this.file + date + '.log', cmsg, function (err) {
			if (err) {
				console.log('Write Err:', err)
			}
			// flog.write("File created!");
		})

	}
	async print(typeLog: string, message: any, ...optionalParams: any[]) {

		const time: string = format('yyyy-MM-dd hh:mm:ss.SSS', new Date())
		const date = format(time.split(' ')[0])
		// flog.write("date:", date)
		// flog.write("time:", time)

		const msgData = JSON.stringify(message) + ' ' + this.unpack(optionalParams)
		const msg = `${FgGreen + '[' + time + ']' + Reset} ` + (typeof message === 'string' ? message : JSON.stringify(message)) + ' ' + this.unpack(optionalParams)
		const cmsg = this.clearRegexp(`[${time}] ` + msgData + '\n')
		console.log(msg)
		//	const path = `${process.env.MOUNT_PATH_VOLUME}/logs`
		fs.appendFile(this.absolutePath + '/' + typeLog + '_' + date + '.log', cmsg, function (err) {
			if (err) {
				console.log('Write Err:', err)
			}
			// flog.write("File created!");
		})

	}
}
