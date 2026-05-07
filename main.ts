controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 2 5 2 8 8 8 8 8 8 8 8 8 9 . . 
        2 4 4 4 8 8 8 8 8 8 8 8 8 9 9 . 
        4 2 5 4 8 8 8 8 8 8 8 8 8 9 9 9 
        2 5 4 2 8 8 8 8 8 8 8 8 8 9 9 . 
        5 5 2 5 8 8 8 8 8 8 8 8 8 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 f f f f f 8 f f f f f 8 8 . 
    8 8 f f f f f 8 f f f f f 8 8 . 
    8 8 f f f f f 8 f f f f f 8 8 . 
    8 8 f f f f f 8 f f f f f 8 8 . 
    8 8 f f f f f 8 f f f f f 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 f f f f f 8 8 8 8 8 . 
    8 8 8 8 8 f f f f f 8 8 8 8 8 . 
    8 8 8 8 8 f f f f f 8 8 8 8 . . 
    8 8 8 8 8 f f f f f 8 8 8 . . . 
    . 8 8 8 8 f f f f f 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setLife(4)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 f 7 7 7 7 f 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 f 7 7 7 7 7 7 7 7 7 f . . 
    . 7 7 f f 7 7 7 7 7 7 7 f f . . 
    . 7 7 7 f f 7 7 7 7 7 7 f 7 . . 
    . 7 7 7 7 f f f f 7 f f f 7 . . 
    . 7 7 7 7 7 7 7 f f f 7 7 7 . . 
    . . . . 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . 7 7 7 7 7 7 7 7 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setVelocity(50, 50)
mySprite2.setBounceOnWall(true)
