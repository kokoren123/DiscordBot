const command = require('../command')
const StaffRoleSchema = require('../schemas/Staff-Role-Schema')

module.exports = (client) => {
    command(client, ['setstaffrole', 'set-staff-role'], (message) => {
        const { guild } = message

    StaffRoleSchema.findOneAndUpdate(
        {
             _id: guild.id
            }, 
            {
                $set: { role: id }
            }, {
                upsert: true
            })
    })
}