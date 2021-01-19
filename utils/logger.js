exports.logger = (req, user) => {
    console.log(`[ ${new Date().toISOString()} ]`, 
    ` [ ${req.body.operationName.toUpperCase()} ]`, 
    '[ VARIABLES:', req.body.variables, ']',
    `[ USER: (${user? user._id : 'UNKNOWN'}) ${user? user.email.split('@')[0] : ''}]`);
}