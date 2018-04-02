$(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyACyYiDwVOVeHO08Pl_5FrfiPA08VAPdcc",
		authDomain: "ronald-s-firebase-project.firebaseapp.com",
		databaseURL: "https://ronald-s-firebase-project.firebaseio.com",
		projectId: "ronald-s-firebase-project",
		storageBucket: "ronald-s-firebase-project.appspot.com",
		messagingSenderId: "574653385438"
	};
	firebase.initializeApp(config);

	//Email/Pwd註冊
	var account = document.getElementById("account");
	var pwd = document.getElementById("pwd");
	var registerSmtBtn = document.getElementById("registerSmtBtn");
	registerSmtBtn.addEventListener("click", function () {
		console.log(account.value);
		firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMsg = error.message;
			console.log(errorMsg);
		});
	}, false);

	//登入
	var accountL = document.getElementById("accountL");
	var pwdL = document.getElementById("pwdL");
	var loginSmtBtn = document.getElementById("loginSmtBtn");
	loginSmtBtn.addEventListener("click", function () {
		console.log(accountL.value);
		firebase.auth().signInWithEmailAndPassword(accountL.value, pwdL.value).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
		})
	}, false);

	//登出
	var signoutSmtBtn = document.getElementById("signoutSmtBtn");
	signoutSmtBtn.addEventListener("click", function () {
		firebase.auth().signOut().then(function () {
			console.log("User sign out!");
		}, function (error) {
			console.log("User sign out error!");
		})
	}, false);

	//Email驗證
	var verifyBtn = document.getElementById("verifyBtn");
	verifyBtn.addEventListener("click", function () {
		var user = firebase.auth().currentUser;
		user.sendEmailVerification().then(function () {
			console.log("驗證信寄出");
		}, function (error) {
			console.error("驗證信錯誤");
		});
	}, false);

	//更改密碼
	var chgPwd = document.getElementById("chgPwd");
	var chgPwdBtn = document.getElementById("chgPwdBtn");
	chgPwdBtn.addEventListener("click", function () {
		firebase.auth().sendPasswordResetEmail(chgPwd.value).then(function () {
			// Email sent.
			console.log("更改密碼Email已發送");
			chgPwd.value = "";
		}, function (error) {
			// An error happened.
			console.error("更改密碼", error);
		});
	}, false);

	//查看目前登入狀況
	var user;
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			user = user;
			console.log("User is logined", user)
		} else {
			user = null;
			console.log("User is not logined yet.");
		}
	});

});
