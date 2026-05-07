def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
        mySprite,
        50,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

projectile: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite)
info.set_life(3)
mySprite2 = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.player2.move_sprite(mySprite2)