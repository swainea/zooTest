(function() {
  'use strict';

  var assert = chai.assert;

  var fixtureHTML = $('#fixtures').html();

  suite('lists animals', function() {

    setup(function() {
      $('#fixtures').html(fixtureHTML);
    });



      test('counts animals by their species', function(doneCallback) {

      window.zoo.countAnimalsByType(function testCallback(count) {
          var assertError;

          try{
            // assert.strictEqual( count.otter, 5, 'expect false: have the value of five for otters');
            assert.strictEqual( count.otter, 2, 'expect true: have the value of two for otters');
          } catch (err) {
            assertError = err;
          }

          doneCallback(assertError);

        });
    });

    test('type is given and animal of that type is added to page', function(doneCallback) {

      assert.strictEqual( $('.animals li').length, 0, 'results are empty to start' );

      var animalType = window.zoo.listAnimals('zebra', function testCallback() {
        var assertError;

        try{
          assert.strictEqual( typeof animalType, 'undefined', 'on success no return value');
          assert.strictEqual( $('.animals li').length, 1, 'have one of species' );
        } catch (err) {
          assertError = err;
        }

        doneCallback(assertError);

      });
    });


  });

}());
