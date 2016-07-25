// describe('examples', function() {
//   it('should format correctly', function() {
//     Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

function humanReadable(seconds) {
  var MM = Math.floor(seconds/60);
  seconds = seconds - (MM * 60);
  var HH = Math.floor(MM/60);
  MM = MM -(HH * 60);
 if (MM < 10){
 	MM ='0'+MM;
 }
 if (seconds < 10){
 	seconds ='0'+seconds;
 }
 if (HH < 10){
 	HH ='0'+HH;
 }
 return HH+':'+MM+':'+seconds
}