(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .controller('HomeController',
  ['TwitchStreamsService', 'twitchUsernameConstant', 'twitchVideoConstant', '$sce', HomeController]);

  function HomeController(service, username, getVideo, $sce) {
    var vm = this;

    vm.displayVideo = false;
    vm.videoSrc = null;

    service.get(function(channel) {
      if (!(channel.stream === null)) {
        vm.displayVideo = true;
        vm.videoSrc = $sce.trustAsResourceUrl(getVideo(username));
      }
    });
  }
})();
