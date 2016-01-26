$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

var inputtedFirstName = $("input#new-first-name").val();
var inputtedLastName = $("input#new-last-name").val();
var newContact = new Contact(inputtedFirstName, inputtedLastName);

function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

  Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {

    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
});
