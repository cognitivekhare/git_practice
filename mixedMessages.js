const messages = {
    Motivational: ['Each tiny effort builds on the next, so that brick by brick magnificent things can be created','They always say times changes things, but you actually have to change them yourself','Well done is better than well said'],
    Inspirational: ['If you don’t see yourself as a winner, then you cannot perform as a winner','Never be bullied into silence. Never allow yourself to be made a victim. Accept no one’s definition of your life; define yourself.','I think your whole life shows in your face and you should be proud of that.'],
    Love: ['True love is like ghost. Which everyone talks about, and few have seen','Sometimes the heart sees what is invisible to the eye','Love is an irresistible desire to be irresistibly desired']
};
function printMixedMessage(){
        const mixedMessages = [];
        for (const message in messages) {
            mixedMessages.push(messages[message][getRandomInt(messages[message].length)]+" ");
        }
        return mixedMessages;
    };
 function  getRandomInt(messageLength){
       return Math.floor(Math.random()*messageLength);
    };

console.log(printMixedMessage());
