import Phaser from 'phaser'
import Loading from './scenes/loadingScene'
import LobbyGame from './scenes/LobbyScene'
import TechnologyGame from './scenes/FpsGame'
import WinScene from './scenes/WinScene'
import LoseScene from './scenes/LoseScene'
import Tutorial from './scenes/TutorialScene'
import Level from './scenes/Menulevels'
import GameLevel2 from './scenes/Level2'
import GameLevel3 from './scenes/Level3'
import GameLevel4 from './scenes/Level4'
import GameLevel5 from './scenes/Level5'
import BossLevel from './scenes/BossLevel'
const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 450,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: [Loading,LobbyGame,Level,Tutorial,TechnologyGame,GameLevel2,GameLevel3,GameLevel4,GameLevel5,BossLevel,LoseScene,WinScene]
}

export default new Phaser.Game(config)
