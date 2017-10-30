var mongoose= require('mongoose');
var emailSchema= new mongoose.Schema(
    {
        uniqueId: {
            type: Number,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }
);

mongoose.model('GoMail', emailSchema, 'emailRecord');