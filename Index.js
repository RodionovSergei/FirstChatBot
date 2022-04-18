const TelegramApi = require('node-telegram-bot-api')
const token = '5179872743:AAG0D105B74EDtHKdVxWFPe60L6pdnOeuw0'


const bot = new TelegramApi(token, {polling: true})


// Функция старт
const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Запустить общение'},
        {command: '/info', description: 'Новое'},
    ])
    
    bot.on('message', async msg =>{
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start'){
            if(msg.from.first_name !== 'Жбанов'){
                return bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Чат бот "Друзья 2000х поможет организвать встречу тех с кем ты смотрел, как Зинкин ест майонез с пола. `)
            }       
            else {
                return bot.sendMessage(chatId, `${msg.from.first_name}, тут нет места политике, поэтому ты можешь организовать встречу, где мы обсудим все политические темы! `)
            }
        } 
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!')
        
    })
}

start ();

