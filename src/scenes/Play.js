class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
        console.log('Play: constructor');
    }

    create() {
        console.log('Play: create');
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);
    }
}