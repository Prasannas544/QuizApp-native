import Sound from 'react-native-sound';

const sound = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('Failed to load the sound', error);
    }
});
export function playSound() {
    sound.play((success) => {
        if (success) {
            console.log('Sound played successfully');
        } else {
            console.log('Sound failed to play');
        }
    });
};
