angular
  .module('motivationalQuotes', [])
  .controller('QuotesCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.quote = null;

    /*
     * Quotes
     */
    var quotes = [
      [
        '"What do they got in there? King Kong?"',
        '#DE291C',
        '#FCF6EB'
      ],
      [
        '"So you two dig up, dig up dinosaurs?"',
        '#2E282A',
        '#FDE8E9'
      ],
      [
        '"God help us, we\'re in the hands of engineers" ',
        '#CD5334',
        '#F6F4F3'
      ],
      [
        '"God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs" ',
        '#48A9A6',
        '#F7F0F0'
      ],
      [
        '"What you call discovery I call rape of the natural world" ',
        '#3F7CAC',
        '#FBFBFF'
      ],
      [
        '"Remind me to thank John for a lovely weekend" ',
        '#101419',
        '#FFF'
      ],
      [
        '"Must Go faster"',
        '#3D2527',
        '#FFEED6'
      ]
    ];

    /*
     * Get random quote
     */
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    /*
     * Set quote
     */
    $scope.quote = randomQuote[0];

    /*
     * Apply styling and center vertically and horizontally
     */
    $(window).resize(function() {

      $timeout(function() {

        $('body').css('background-color', randomQuote[1]);

        $('#quote').css({
          'position'   : 'absolute',
          'left'       : '50%',
          'top'        : '50%',
          'margin-left': -($('#quote').outerWidth() / 2),
          'margin-top' : -($('#quote').outerHeight() / 2),
          'color'      : randomQuote[2]
        }).fadeIn('fast');
      });
    });

    $(window).resize();
  }]);