import {proxy} from 'valtio'

const state = proxy({
    // whatever we define here, can be used in entire application
    intro: true,
    color: "#efbd48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;