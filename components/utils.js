import Sound from 'react-native-sound';

const clickSnd = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound click.mp3', error);
    }
});
const bgSnd = new Sound('bg_calmer.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound bg-calmer.mp3', error);
    }
});
const corrAnsSnd = new Sound('correct_ans.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound correct_ans.wav', error);
    }
});
const wrngAnsSnd = new Sound('wrong_ans.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound wrong_ans.wav', error);
    }
});
const resultSnd = new Sound('result.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound result.wav', error);
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
export function playBG() {
    bgSnd.play((success) => {
        if (success) {
            console.log('bgSnd.mp3 played successfully');
        } else {
            console.log('bgSnd.mp3 failed to play');
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
    bgSnd.stop();
};


