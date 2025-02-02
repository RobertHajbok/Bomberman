var Bomberman = Bomberman || {};

Bomberman.Lives = function (game_state, name, position, properties) {
    "use strict";
    var lives_text_position, lives_text_style, lives_text_properties;
    Bomberman.Prefab.call(this, game_state, name, position, properties);
    
    this.player = properties.player;
    
    this.fixedToCamera = true;
    
    this.anchor.setTo(0.5);
    this.scale.setTo(0.6);
    
    // create a text prefab to show the number of lives
    lives_text_position = new Phaser.Point(this.position.x, this.position.y + 2);
    lives_text_style = { font: "10px Arial", fill: "#fff" };
    lives_text_properties = { group: "hud", text: this.number_of_lives, style: lives_text_style };
    this.lives_text = new Bomberman.TextPrefab(this.game_state, "lives_text", lives_text_position, lives_text_properties);
    this.lives_text.anchor.setTo(0.5);
};

Bomberman.Lives.prototype = Object.create(Bomberman.Prefab.prototype);
Bomberman.Lives.prototype.constructor = Bomberman.Lives;

Bomberman.Lives.prototype.update = function () {
    "use strict";
    // update to show current number of lives
    this.lives_text.text = this.game_state.prefabs[this.player].number_of_lives;
};