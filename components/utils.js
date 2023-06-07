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
const result_convo = new Sound('result_convo.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound result_convo.mp3', error);
    } else {
        setTimeout(() => {
            result_convo.setNumberOfLoops(-1);
            result_convo.setVolume(1.0); // Set the desired volume here
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
const naruto_intro = new Sound('naruto_intro.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound avatar_submit.wav.mp3', error);
    } else {
        setTimeout(() => {
            naruto_intro.setNumberOfLoops(-1);
            naruto_intro.setVolume(0.4);
        }, 100);
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
export function playResConvo() {

    result_convo.play((success) => {
        if (success) {
            console.log('result_convo.mp3 played successfully');
        } else {
            console.log('result_convo.mp3 failed to play');
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
export function playAvtSelection() {
    naruto_intro.play((success) => {
        if (success) {
            console.log('naruto_intro.mp3 played successfully');
        } else {
            console.log('naruto_intro.mp3 failed to play');
        }
    });
};

export function pauseBG() {
    bgSnd.stop(() => {
        console.log('bgSnd.mp3 stopped');
    });
};
export function pauseResConvo() {
    result_convo.stop(() => {
        console.log('result_convo.mp3 stopped');
    });
};
export function pauseAvtSelection() {
    naruto_intro.stop(() => {
        console.log('naruto_intro.mp3 stopped');
    });
};


export const encodeImage = (name) => {

    if (name == 'DeadPool') {
        return require('./deadpool.png');
    } else if (name == 'Mr. White') {
        return require('./white.jpg');
    } else if (name == 'Goku') {
        return require('./goku.png');
    } else if (name == 'Kakashi') {
        return require('./kakashi.png');
    } else if (name == 'Itachi') {
        return require('./itachi.png');
    } else if (name == 'Mario') {
        return require('./mario.png');
    } else if (name == 'Cpt. Price') {
        return require('./price.png');
    } else if (name == 'Mr. Chief') {
        return require('./chief.png');
    } else {
        return require('./white.jpg');
    }
}
export const encodeBadge = (badge_no) => {

    if (badge_no == '1') {
        return require('./badge1.png');
    } else if (badge_no == '2') {
        return require('./badge2.png');
    } else if (badge_no == '3') {
        return require('./badge3.png');
    } else if (badge_no == '4') {
        return require('./badge4.png');
    } else if (badge_no == '5') {
        return require('./badge5.png');
    } else if (badge_no == '6') {
        return require('./badge6.png');
    } else if (badge_no == '7') {
        return require('./badge7.png');
    } else if (badge_no == '8') {
        return require('./badge8.png');
    } else if (badge_no == '9') {
        return require('./badge9.png');
    } else if (badge_no == '10') {
        return require('./badge10.png');
    } else {
        return require('./badge1.png');
    }
}