console.log('hello!');
function signUp() {
  if (document.getElementById('customer_name').value === '') {
    alert('Please Enter Name');
    return true;
  }

  if (document.getElementById('phone_number').value === '') {
    alert('Please Enter Phone Number');
    return true;
  }

  if (document.getElementById('email_address').value === '') {
    alert('Please Enter Email Address');
    return true;
  }

  if (document.getElementById('gender').value === '') {
    alert('Please Select Gender');
    return true;
  }

  if (document.getElementById('user_name').value === '') {
    alert('Please Enter User Name');
    return true;
  }

  if (document.getElementById('password').value === '') {
    alert('Please Enter Password');
    return true;
  }

  alert('Successfully Signed in!!!');
}
