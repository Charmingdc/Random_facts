$(document).ready(function() {
  loadFacts();
  
  $('#getFacts').click(function() {
    loadFacts();
  });
});


function loadFacts() {
  
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts',
    headers: { 'X-Api-Key': '29OaXW92zBKNeyZ+7cLgUg==fayxTTNLVZgrrh72'},
    contentType: 'application/json',
    success: function(result) {
      $('#fact').text(result[0].fact);
    },
    error: function ajaxError(jqXHR) {
      $('#fact').text(jqXHR.responseText);
    }
  });
}
