var videos = [
    { id: 'hqNz4wcLMy8', title: 'Video 1' },
    { id: 'K2v8yvR5INg', title: 'Video 2' },
    // Otros videos...
];

var player;

function onYouTubeIframeAPIReady() {
    for (var i = 0; i < videos.length; i++) {
        initializePlayer(videos[i], i);
    }
}

function initializePlayer(video, index) {
    var playerContainer = document.createElement('div');
    playerContainer.className = 'video';
    playerContainer.id = 'youtube-player-' + index;
    document.querySelector('main').appendChild(playerContainer);

    player = new YT.Player(playerContainer.id, {
        height: '315',
        width: '560',
        videoId: video.id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    // Puedes realizar acciones cuando el reproductor está listo
}

function onPlayerStateChange(event) {
    // Puedes realizar acciones cuando cambia el estado del reproductor
}

// Puedes crear una función para cambiar el video cuando lo necesites
function changeVideo(index) {
    player.loadVideoById(videos[index].id);
}

// Ejemplo de cómo cambiar el video (puedes llamar a esta función cuando sea necesario)
// changeVideo(1); // Cambiará al segundo video de la lista
