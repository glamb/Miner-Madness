import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import PreloadState from './states/Preloader'

class Game extends Phaser.Game {

  constructor () {
    super(800, 600, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Preloader', PreloadState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()