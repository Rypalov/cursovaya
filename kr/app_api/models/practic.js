let mongoose = require( 'mongoose' );

let practicSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ruk: {type: String, required: true, default: "Неизвестный Бренд"},
    student: {type: String, required: true},
    group: {type: String, required: true},
    spec: {type: String, required: true},
    mark: {type: Number, required: true},
    userId: {type: Number, required: false}
});

// компиляция модели
mongoose.model('practic', practicSchema );
