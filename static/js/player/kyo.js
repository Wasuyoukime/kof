// @ts-ignore
import { Player } from '/static/js/player/base.js';
// @ts-ignore
import { GIF } from '/static/js/utils/gif.js';

export class Kyo extends Player {
    constructor(root, info) {

        super(root, info);
        this.init_animations();
    }

    init_animations() {

        let outer = this;
        let offsets = [0, -22, -22, -160, 0, 0, 0];

        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            // @ts-ignore
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,
                frame_rate: 10,
                offset_y: offsets[i],
                loaded: false,
                scale: 2,
            });

            gif.onload = function () {
                // @ts-ignore
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_cnt = 10;
                }
            }
        }
    }

}