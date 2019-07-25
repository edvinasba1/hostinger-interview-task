import { Request, Response, NextFunction } from 'express'

import { logger } from '../common/logger';

export function loggerMiddleware (req:Request, res:Response, next:NextFunction) {
    let {
        url,
        headers,
        connection
    } = req;
    let {
        statusCode
    } = res;

    let ip = headers['x-forwarded-for'] || connection.remoteAddress;

    let successResponse = statusCode === 200;

    let badResponse = statusCode === 400;

    let message = `Ip address - ${ip} has requested url - ${url}. Response status - ${statusCode}.`;

    switch (true) {
        case (successResponse):
            logger.info(message);
            break;
        case (badResponse):
            logger.warn(message)
        default:
            break;
    }

    next();
}