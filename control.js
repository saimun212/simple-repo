
function myFunction(fullName, age, dateOfBirth = 1991) {
  console.log(
    'Hello ' + fullName + ' I am ' + age + ' My Date of Bith ' + dateOfBirth
  );
}
myFunction('Ali', 30, 1995);
myFunction('Rahim', 35, true);

function isSubscribed(isSubscribed) {
  console.log('isSubscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);