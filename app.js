

class Player {
    arr = [
        { path: './music/song1.mp3', artist: 'First Artist', song: 'song1' },
        { path: './music/song2.mp3', artist: 'Second Artist', song: 'song2' },
        { path: './music/song3.mp3', artist: 'Third Artist', song: 'song3' }];


    bindAction() {
        const play = document.querySelector('.play');
        const previous = document.querySelector('.previous');
        const next = document.querySelector('.next');
        const audio = document.querySelector('audio');
        const like = document.querySelector('.like')
        let song_name = document.querySelector('h1');
        let artist_name = document.querySelector('h2');
        let flag = false;
        let current_index_song = 0;
        let like_bool = false;

        

        play.addEventListener('click', () => {
            if (!flag) {
                audio.play();
                flag = true;
                play.style = 'background-image: url(./assets/pauseBtn.svg)'
            } else {
                audio.pause();
                flag = false
                play.style = 'background-image: url(./assets/playBtn.svg)'
            }
        })

        previous.addEventListener('click', () => {
            if (current_index_song == 0) return;
            current_index_song--;
            audio.src = this.arr[current_index_song].path;
            audio.play();
            flag = true;
            play.style = 'background-image: url(./assets/pauseBtn.svg)';
            artist_name.innerHTML = this.arr[current_index_song].artist
            song_name.innerHTML = this.arr[current_index_song].song
        })

        next.addEventListener('click', () => {
            if (current_index_song == this.arr.length - 1) return;
            current_index_song++;
            audio.src = this.arr[current_index_song].path;
            audio.play();
            flag = true
            play.style = 'background-image: url(./assets/pauseBtn.svg)'
            artist_name.innerHTML = this.arr[current_index_song].artist
            song_name.innerHTML = this.arr[current_index_song].song
        })

like.addEventListener('click',()=>{
    if (!like_bool) {
        like_bool = true;
        like.style = 'background-image: url(./assets/Icon.svg)'

    } else {
        like_bool = false;
        like.style = 'background-image: url(./assets/FavBtn.svg)'

    }
})

    }


}



const player = new Player();
player.bindAction()



