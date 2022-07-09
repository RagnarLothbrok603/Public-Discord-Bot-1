//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by 0x5EC06745#4435 | https://discord.gg/h9tPGZxcQk
 * @INFO
 * Work for Ragnar Lothbrok | https://0x5EC06745#4435
 * @INFO
 * Please mention him / Ragnar Lothbrok, when using this Code!
 * @INFO
 */
