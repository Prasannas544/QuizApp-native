import Sound from 'react-native-sound';

const clickSnd = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound click.mp3', error);
    }
});
const bgSnd = new Sound('bg_calmer.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound bg-calmer.mp3', error);
    } else {
        setTimeout(() => {
            bgSnd.setNumberOfLoops(-1);
            bgSnd.setVolume(1.0); // Set the desired volume here
        }, 100);
    }
});


const corrAnsSnd = new Sound('correct_ans.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound correct_ans.wav', error);
    } else {
        setTimeout(() => {
            corrAnsSnd.setVolume(0.2); // Set the desired volume here
        }, 100);
    }
});
corrAnsSnd.setVolume(0.1)
const wrngAnsSnd = new Sound('wrong_ans.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound wrong_ans.wav', error);
    }
});

const resultSnd = new Sound('result.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound result.wav', error);
    } else {
        setTimeout(() => {
            resultSnd.setVolume(0.9); // Set the desired volume here
        }, 100);
    }
});
const power_up = new Sound('power_up.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound result.wav', error);
    }
});
const avatar_next_button = new Sound('avatar_next_button.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound avatar_next_button.mp3', error);
    }
});
const avatar_submit = new Sound('avatar_submit.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound avatar_submit.wav.mp3', error);
    }
});
export function playClick() {
    clickSnd.play((success) => {
        if (success) {
            console.log('click.mp3 played successfully');
        } else {
            console.log('click.mp3 failed to play');
        }
    });
};
export function avatarNextClick() {
    avatar_next_button.play((success) => {
        if (success) {
            console.log('avatar_next_button.mp3 played successfully');
        } else {
            console.log('avatar_next_button.mp3 failed to play');
        }
    });
};
export function avatarSubmitClick() {
    avatar_submit.play((success) => {
        if (success) {
            console.log('avatar_submit.mp3 played successfully');
        } else {
            console.log('avatar_submit.mp3 failed to play');
        }
    });
};
export function playBG() {

    bgSnd.play((success) => {
        if (success) {
            console.log('bgSnd.mp3 played successfully');
        } else {
            console.log('bgSnd.mp3 failed to play');
        }
    });
};
export function playPowerup() {
    power_up.play((success) => {
        if (success) {
            console.log('power_up.mp3 played successfully');
        } else {
            console.log('power_up.mp3 failed to play');
        }
    });
};
export function playCorrectAns() {
    corrAnsSnd.play((success) => {
        if (success) {
            console.log('corrAnsSnd.mp3 played successfully');
        } else {
            console.log('corrAnsSnd.mp3 failed to play');
        }
    });
};
export function playWrongAns() {
    wrngAnsSnd.play((success) => {
        if (success) {
            console.log('wrngAnsSnd.mp3 played successfully');
        } else {
            console.log('wrngAnsSnd.mp3 failed to play');
        }
    });
};
export function playResult() {
    resultSnd.play((success) => {
        if (success) {
            console.log('resultSnd.mp3 played successfully');
        } else {
            console.log('resultSnd.mp3 failed to play');
        }
    });
};

export function pauseBG() {
    bgSnd.stop(() => {

        console.log('bgSnd.mp3 stopped');

    });

};


export const encodeImage = (name) => {
    switch (name) {
        case 'DeadPool': return require('./deadpool.png');
        case 'Mr. White': return require('./white.jpg');
        case 'Goku': return require("./goku.png");
        case 'Kakashi': return require("./kakashi.png");
        case 'Itachi': return require('./itachi.png');
        case 'Mario': return require('./mario.png');
        case 'Cpt. Price': return require('./price.png');
        case 'Mr. Chief': return require('./chief.png');
        default: return require('./chief.png');
    }
}