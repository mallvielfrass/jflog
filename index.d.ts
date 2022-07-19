declare module 'jflog/colors' {
  export const Reset = "\u001B[0m";
  export const Bright = "\u001B[1m";
  export const Dim = "\u001B[2m";
  export const Underscore = "\u001B[4m";
  export const Blink = "\u001B[5m";
  export const Reverse = "\u001B[7m";
  export const Hidden = "\u001B[8m";
  export const FgBlack = "\u001B[30m";
  export const FgRed = "\u001B[31m";
  export const FgGreen = "\u001B[32m";
  export const FgYellow = "\u001B[33m";
  export const FgBlue = "\u001B[34m";
  export const FgMagenta = "\u001B[35m";
  export const FgCyan = "\u001B[36m";
  export const FgWhite = "\u001B[37m";
  export const BgBlack = "\u001B[40m";
  export const BgRed = "\u001B[41m";
  export const BgGreen = "\u001B[42m";
  export const BgYellow = "\u001B[43m";
  export const BgBlue = "\u001B[44m";
  export const BgMagenta = "\u001B[45m";
  export const BgCyan = "\u001B[46m";
  export const BgWhite = "\u001B[47m";

}
declare module 'jflog/flogger' {
  export enum logTypes {
      global = "loggerFile_",
      auth = "authInfo_",
      io = "io_",
      trasfer = "transferFile_",
      config = "configFile_",
      panic = "panic_",
      service = "service_"
  }
  export default class Jflog {
      absolutePath: string;
      constructor(relativePathFolder: string);
      convert(obj: any): string;
      write(message: any, ...optionalParams: any[]): void;
      print(typeLog: string, message: any, ...optionalParams: any[]): void;
  }

}
declare module 'jflog/floggerExpress' {
  import Jflog from 'jflog/flogger';
  import express from 'express';
  export class ExpressServer {
      private jsflog;
      constructor(jflog: Jflog);
  }
  export class ExpressApiLogger {
      private jsflog;
      constructor(jflog: Jflog);
      private generateHeaderString;
      private parseHeaders;
      apiLog(request: express.Request, response: express.Response, next: express.NextFunction): Promise<void>;
  }
  export class ExpressHttpApiFileLogAccess {
      private jsflog;
      private seed;
      Router: express.Router;
      constructor(jflog: Jflog, seed: string);
  }

}
declare module 'jflog' {
  import main = require('jflog/index');
  export = main;
}