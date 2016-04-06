(function(ns) {
    'use strict';

    function getAnimals(getAnimalsCallback) {
        // Pretend this is an Ajax call!!
        setTimeout(function fakeAjax() {
            getAnimalsCallback([   // this is foo!
                { species: 'zebra', name: 'Jim' },
                { species: 'orangutan', name: 'Bill' },
                { species: 'otter', name: 'Hector' },
                { species: 'otter', name: 'Amy' },
                { species: 'bear', name: 'Sofia' },
                { species: 'tiger', name: 'Lucille' },
                { species: 'tiger', name: 'Octavius' }
            ]);
        }, 250);
    }

    /**
     * Takes in an animal species (optionally) and adds animals from an
     * ajax call to a list on the page. If a `type` is given, only
     * animals of that species will be added to the page. If no `type`
     * is provided, ALL animals will be added to the list.
     *
     * The production HTML looks like this:
     *    <section>
     *      <ul class='animals'></ul>
     *    </section>
     *
     * @param  {String}   type     The animal species to restrict our list to
     * @param  {Function} callback Executed after animals are added to our list in the HTML
     * @return {undefined}
     */
    ns.listAnimals = function listAnimals(type, listAnimalsCallback) {

      function foo(animals) {

          animals.forEach(function iterateOnAnimals(animal) {

              if ( type && animal.species === type) {
                console.log( animal.species );
                  $('.animals ul').append('<li>' + animal.name + '</li>');
                console.log( animal.name );
              } else if (!type){
                  $('.animals ul' ).append('<li>' + animal.name + '</li>');
                console.log(animal.name);
              }

          });
          listAnimalsCallback(animals);
      }

        getAnimals(     foo     );
    };

    /**
     * Retrieves all animals and counts animals by their species. The callback
     * will be executed with an object that contains each animal species and
     * how many of each animal exist for that species. For example:
     * {
     *   'gorilla': 5,
     *   'lion': 2
     * }
     *
     * @param  {Function} callback Will be executed with the count of animals
     * @return {undefined}
     */
    ns.countAnimalsByType = function countAnimalsByType(callback) {
        getAnimals(function doAnimalCount(animals) {
            var count = {};
            console.log(count);

            animals.forEach(function countEachAnimal(animal) {
                if (!count [animal.species]) {
                    count [animal.species] = 1;
                    console.log(animal.species);
                } else {
                    count[animal.species]++;
                }
            });

            callback(count);
            console.log(count);
        });
    };


    window.zoo = ns;
})(window.zoo || {});
