function validEmail(str) {
  //your JS code here.
	let isEmail =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(str);
	 return isEmail;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
