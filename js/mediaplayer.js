$(document).ready(function() {
    var playlist = [{
        title: "My Funny Valentine",
        artist: "Frank Sinatra",
        mp3: "music/myfunnyvalentine.mp3",
        oga: "music/myfunnyvalentine.mp3",
        poster: "images/franksinatra.jpg"
    }, {
        title: "Can't Help Falling In Love",
        artist: "Elvis Presley",
        mp3: "music/canthelpfallinginlove.mp3",
        oga: "music/canthelpfallinginlove.mp3",
        poster: "images/elvispresley.jpg"
    }, {
        title: "The Way You Make Me Feel",
        artist: "Michael Jackson",
        mp3: "music/thewayyoumakemefeel.mp3",
        oga: "music/thewayyoumakemefeel.mp3",
        poster: "images/michaeljackson.jpg"
    }, {
        title: "Flapper Girl",
        artist: "The Lumineers",
        mp3: "music/flappergirl.mp3",
        oga: "music/flappergirl.mp3",
        poster: "images/thelumineers.png"
    }];

    var cssSelector = {
        jPlayer: "#jquery_jplayer",
        cssSelectorAncestor: ".music-player"
    };

    var options = {
        swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
        supplied: "ogv, m4v, oga, mp3",
        volumechange: function(event) {
            $(".volume-level").slider("value", event.jPlayer.options.volume);
        },
        timeupdate: function(event) {
            $(".progress").slider("value", event.jPlayer.status.currentPercentAbsolute);
        }
    };

    var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
    var PlayerData = $(cssSelector.jPlayer).data("jPlayer");


    // Create the volume slider control
    $(".volume-level").slider({
        animate: "fast",
        max: 1,
        range: "min",
        step: 0.01,
        value: $.jPlayer.prototype.options.volume,
        slide: function(event, ui) {
            $(cssSelector.jPlayer).jPlayer("option", "muted", false);
            $(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
        }
    });

    // Create the progress slider control
    $(".progress").slider({
        animate: "fast",
        max: 100,
        range: "min",
        step: 0.1,
        value: 0,
        slide: function(event, ui) {
            var sp = PlayerData.status.seekPercent;
            if (sp > 0) {
                // Move the play-head to the value and factor in the seek percent.
                $(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
            } else {
                // Create a timeout to reset this slider to zero.
                setTimeout(function() {
                    $(".progress").slider("value", 0);
                }, 0);
            }
        }
    });


});