new fullpage('#myPage', {
  menu: '#menu',
  autoScrolling: true,
  navigation: true,
  scrollBar: true,
  anchors: [
    'home',
    'education',
    'licenses',
    'experience',
    'volunteer',
    'contact',
    'home',
  ],
  licenseKey: 'GPLv3',
});

document.getElementById('goDown').addEventListener('click', function () {
  fullpage_api.moveSectionDown();
});
