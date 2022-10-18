/* eslint-disable no-console */
import { isDevMode } from '@angular/core';

interface LoggerParams {
  type?: 'log' | 'trace' | 'warn' | 'info' | 'debug' | 'error';
  inputs?: boolean;
  outputs?: boolean;
  timeStamp?: boolean;
}

// If you want every other console log to also be timestamped look here:
// https://stackoverflow.com/a/36887315/15439733
function formatConsoleDate(date: Date) {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `[${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }.${`00${milliseconds}`.slice(-3)}]`;
}

// Default values when just @Log() is used
const defaultParams: Required<LoggerParams> = {
  type: 'log',
  inputs: true,
  outputs: true,
  timeStamp: true,
};

/**
 * @Log() appended on top of method to console.log() input, output of the method attached to.
 * @param params optional type of LoggerParams which can be passed to @Log()
 * If none is given, defaultParams are used.
 * @example
 *
 *  @Log()
 * babyStepsFn(name: string, age: number) {
 *   return `${name} ${age}`;
 * }
 *
 * @Log({type: 'log'})
 * noticeTheNameFn(pramName: any) {
 *   return pramName;
 * }

 * @Log({type: 'log', inputs: true})
 * onlyInputsFn(students: any[]) {
 *   return students;
 * }

 * @Log({type: 'log', outputs: true})
 * onlyOutputsFn(grade: number, y: number) {
 *   return grade + y;
 * }
 *
 * @Log({type: 'log'})
 * complexObjFn(obj: Object) {
 *   return obj;
 * }
 *
 * @Log()
 * typeNoOutputBecauseNoReturnFn(name: string) {
 *   return;
 * }
 *
 * @Log({printInProd: true})
 * willPrintInProdFn(arr: any[]) {
 *   return arr;
 * }

 * @Log({printInProd: true})
 *  whatHappensWhenFnIsParamFn(func1: any) {
 *    return func1;
 * }
 *
 * @Log({type: 'warn'})
 * typeWarnFn(itsNull: any) {
 *   return itsNull;
 * }
 *
 * @Log({timeStamp: false})
 * typeNoStampFn(nestedArr: number[][]) {
 *   return nestedArr;
 * }
 */
export function Log(
  params?: LoggerParams,
): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
  const options: Required<LoggerParams> = {
    type: params?.type || defaultParams.type,
    inputs: params?.inputs === undefined ? defaultParams.inputs : params.inputs,
    outputs: params?.outputs === undefined ? defaultParams.outputs : params.outputs,
    timeStamp: params?.timeStamp === undefined ? defaultParams.timeStamp : params.timeStamp,
  };

  return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
    // Overwrite console logging in production with printInProd = true
    // https://angular.io/api/core/isDevMode
    if (!isDevMode()) {
      return;
    }

    // Original method
    const original = descriptor.value;

    // Know that this is not the original variable name
    // ParamNames are as they appear when passed to the method
    const paramNames = descriptor.value
      .toString()
      .replace(/\s/g, '')
      .match(/\((.*?)\)/)[1]
      .split(',');

    descriptor.value = (...args: Array<any>) => {
      // Inputvalues
      const paramValues: Array<any> = args.map((v) => v);

      // Make the object to be printed
      let nameAndValue: any = {};
      if (paramValues.length === paramNames.length) {
        for (let i = 0; i < paramNames.length; i++) {
          nameAndValue = {
            ...nameAndValue,
            ...{ [paramNames[i]]: paramValues[i] },
          };
        }
      }

      const result = original.apply(this, args);

      let timeStamp = '';
      if (options.timeStamp) {
        timeStamp = formatConsoleDate(new Date());
      }

      // Only Inputs
      if (params?.inputs && !params?.outputs) {
        console[options.type](timeStamp, `${original.name} -> IN: `, nameAndValue);
      }

      // Only Outputs
      else if (!params?.inputs && params?.outputs) {
        console[options.type](timeStamp, `${original.name} -> OUT: `, result);
      }

      // Input and Output
      else {
        console[options.type](
          timeStamp,
          `${original.name} -> IN: `,
          nameAndValue,
          ' OUT: ',
          result,
        );
      }

      return result;
    };
  };
}
