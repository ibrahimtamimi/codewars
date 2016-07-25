// describe('Guess The Gifts', function() {
//   function check(wishlist, presents, expected) {
//     Test.assertSimilar(guessGifts(wishlist.slice(), presents.slice()).sort(), expected.sort(), 'Given wishlist ' + JSON.stringify(wishlist) + ' and presents ' + JSON.stringify(presents));
//   }
  
//   it('Description Example', function() {
//     check(
//       [
//         {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
//         {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"},
//         {name: "card game", size: "small", clatters: "no", weight: "light"}
//       ],
//       [
//         {size: "medium", clatters: "a bit", weight: "medium"},
//         {size: "small", clatters: "yes", weight: "light"}
//       ],
//       ['toy car', 'mini puzzle']
//     );
//   });
// });


function guessGifts(wishlist, presents) {
  // TODO
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]