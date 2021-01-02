exports.logger = (req, user) => {
    console.log(`[ ${new Date().toISOString()} ]`, 
    ` [ ${req.body.operationName.toUpperCase()} ]`, 
    '[ VARIABLES:', req.body.variables, ']',
    `[ USER: (${user._id}) ${user.email.split('@')[0]}]`);
}