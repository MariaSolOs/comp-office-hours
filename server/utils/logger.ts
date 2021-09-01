import type { Request } from 'express';

const logger = (req: Request, email: string) => {
    console.log(`[ ${new Date().toISOString()} ]`, 
    `[ ${req.body.operationName?.toUpperCase()} ]`, 
    '[ VARIABLES:', req.body.variables, ']',
    `[ USER: ${email || 'UNKNOWN'} ]`);
}

export default logger;