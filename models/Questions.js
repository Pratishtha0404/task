import mongoose from "mongoose"

const QuestionSchema = mongoose.Schema({
    questionTitle:{type:String, required:"Question must have a title"},
    questionBody:{type:String, required:"Question must have a title"},
    questionTags:{type:String, required:"Question must have a title"},
    questionCodeSnippetVideoURL:{type:String, required:"Question must have a title"},
    noOfAnswers:{type: [String], default: []},
    userPosted:{type:String, required: "Question must have  an author"},
    userId:{type: String},
    askedOn:{type:Date,default: Date.now},
    answer:[{
        answerBody:String,
        userAnswered: String,
        userId:String,
        answeredOn: { type : Date , default : Date.now},
    }]
})


export default mongoose.model("Question", QuestionSchema)