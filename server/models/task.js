const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (() => {
    const TaskSchema = new mongoose.Schema({
        _id : Schema.Types.ObjectId,
        title: {
            type: String, 
            required: [true, 'Title required'], 
            minlength: [2, 'Title must be greater than 2 characters']
        },
        description: {
            type: String
        },
        completed: {
            type: Boolean, default: false
        }
    }, {timestamps: true});
    
    mongoose.model('Task', TaskSchema);
})();