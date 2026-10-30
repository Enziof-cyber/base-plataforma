namespace SpriteKind {
    export const tecnologiaA1 = SpriteKind.create()
    export const tecnologiaB1 = SpriteKind.create()
    export const tecnologiaC1 = SpriteKind.create()
    export const tecnologiaA2 = SpriteKind.create()
    export const TecnologiaB2 = SpriteKind.create()
    export const tecnologiaC2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    limpiar_etapa()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (personajeprincipal.isHittingTile(CollisionDirection.Bottom) || (personajeprincipal.isHittingTile(CollisionDirection.Left) || personajeprincipal.isHittingTile(CollisionDirection.Right))) {
        personajeprincipal.vy = -127
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tecnologiaB1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice el objeto tecnologico 3")
    pause(1000)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice personaje")
    pause(5000)
    story.clearAllText()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    limpiar_etapa()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tecnologiaC1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice el objeto tecnologico 5")
    pause(1000)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice personaje")
    pause(5000)
    story.clearAllText()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personajeprincipal,
    [img`
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . 3 f 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . 3 3 3 . 3 . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . 3 . 3 3 . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . 3 . . . . . 3 . . . . . . . . 
        . 3 3 3 3 3 3 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . 3 3 3 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . 3 f 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . 3 3 3 . 3 . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . 3 . 3 3 . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . 3 . 3 3 . . . . . . . 
        . . . . 3 3 . . 3 3 3 3 . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . 3 3 . . . . . . . . . . . . 
        `,img`
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . 3 f 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . 3 3 3 . 3 . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . 3 . 3 3 . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . 3 . 3 3 . . . . . . . 
        . . . . 3 3 . . 3 . . . . . . . 
        . . . 3 3 . . . 3 . . . . . . . 
        . . 3 3 . . . 3 3 . . . . . . . 
        `],
    500,
    true
    )
    dirder = false
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personajeprincipal,
    [img`
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . 3 3 f 3 . . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . 3 3 3 . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . 3 . 
        . . . . . . . . 3 3 3 3 3 3 3 . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . 3 3 3 3 . . . . . . . . 
        . . . . 3 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . 3 3 f 3 . . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . 3 3 3 . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 3 . . . . . . 
        . . . . . . . 3 3 . 3 . . . . . 
        . . . . 3 3 3 3 . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . . . . . . . . . . 3 3 . . 
        `,img`
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . 3 3 f 3 . . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . 3 3 3 . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 3 . . . . . . 
        . . . . . . . 3 3 . 3 . . . . . 
        . . . . . . . 3 . . 3 3 . . . . 
        . . . . . . . 3 . . . 3 3 . . . 
        . . . . . . . 3 3 . . . 3 3 . . 
        `],
    500,
    true
    )
    dirder = true
})
function limpiar_etapa () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    etapa += 1
    crearetapas()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tecnologiaA1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice el objeto tecnologico 1")
    pause(1000)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice personaje")
    pause(5000)
    story.clearAllText()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.gameOver(false)
})
function crearetapas () {
    if (etapa == 1) {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level1`)
        effects.clouds.startScreenEffect()
        tiles.placeOnTile(personajeprincipal, tiles.getTileLocation(1, 10))
        tiles.placeOnTile(tecno1, tiles.getTileLocation(22, 12))
        tiles.placeOnTile(tecno2, tiles.getTileLocation(46, 11))
    }
    if (etapa == 2) {
        sprites.destroy(tecno1)
        sprites.destroy(tecno2)
        scene.setBackgroundColor(8)
        tiles.setCurrentTilemap(tilemap`level2`)
        effects.starField.startScreenEffect()
        tiles.placeOnTile(personajeprincipal, tiles.getTileLocation(2, 45))
        tiles.placeOnTile(tecno3, tiles.getTileLocation(2, 30))
        tiles.placeOnTile(tecno4, tiles.getTileLocation(15, 11))
    }
    if (etapa == 3) {
        sprites.destroy(tecno3)
        sprites.destroy(tecno4)
        scene.setBackgroundColor(4)
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(personajeprincipal, tiles.getTileLocation(1, 10))
        tiles.placeOnTile(tecno5, tiles.getTileLocation(22, 10))
        tiles.placeOnTile(tecno6, tiles.getTileLocation(41, 8))
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tecnologiaC2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice el objeto tecnologico 6")
    pause(1000)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice personaje")
    pause(5000)
    story.clearAllText()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tecnologiaA2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice el objeto tecnologico 2")
    pause(1000)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice personaje")
    pause(5000)
    story.clearAllText()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TecnologiaB2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice el objeto tecnologico 4")
    pause(1000)
    story.spriteSayText(sprite, "escrcibir aqui lo que dice personaje")
    pause(5000)
    story.clearAllText()
})
let dirder = false
let tecno6: Sprite = null
let tecno5: Sprite = null
let tecno4: Sprite = null
let tecno3: Sprite = null
let tecno2: Sprite = null
let tecno1: Sprite = null
let personajeprincipal: Sprite = null
let etapa = 0
info.setScore(0)
info.startCountdown(100)
etapa = 1
personajeprincipal = sprites.create(img`
    . . . . . . . 2 2 1 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 8 f 8 f 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 . . . 2 2 2 . 
    . . . . . . . 8 . . . 2 2 2 2 . 
    e . . . e . . 8 . . 5 2 2 2 2 . 
    e . . e e . . 8 . . 5 2 2 2 2 . 
    e e . e . 8 8 8 8 8 5 5 5 5 . . 
    . f e f . . . 8 . . . . . . . . 
    . e 2 e . . . 8 . . . . . . . . 
    e e e e e . 8 8 8 . . . . . . . 
    e e e e e 8 . . . 8 . . . . . . 
    . e . e . 8 . . . 8 . . . . . . 
    `, SpriteKind.Player)
tecno1 = sprites.create(img`
    . . . . . . f f . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . d d d d d d . . . . . . . 
    . . . d f f f f d . . . . . . . 
    . . . d f 1 1 f d . . . . . . . 
    . . . d f 1 1 f d . . . . . . . 
    . . . d f f f f d . . . . . . . 
    . . . d f f f f d . . . . . . . 
    . . . d f 5 5 f d . . . . . . . 
    . . . d f f f f d . . . . . . . 
    . . . d f 4 4 f d . . . . . . . 
    . . . d f f f f d . . . . . . . 
    . . . d d d d d d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.tecnologiaA1)
tecno2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.tecnologiaA2)
tecno3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 . . . . . . . 7 . . . . 
    . . . 7 . . . . . . . 7 . . . . 
    . . . 7 . . . . . . . 7 . . . . 
    . . . 7 . . . . . . . 7 . . . . 
    . . . 7 . . . . . . . 7 . . . . 
    . . . 7 . . . . . . . 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.tecnologiaB1)
tecno4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.TecnologiaB2)
tecno5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 . . . . . . . 
    . . 8 . . . . . 8 . . . . . . . 
    . . 8 . . . . . 8 . . . . . . . 
    . . 8 . . . . . 8 . . . . . . . 
    . . 8 . . . . . 8 . . . . . . . 
    . . 8 8 8 8 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.tecnologiaC1)
tecno6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.tecnologiaC2)
personajeprincipal.ay = 300
scene.cameraFollowSprite(personajeprincipal)
controller.moveSprite(personajeprincipal, 100, 0)
crearetapas()
