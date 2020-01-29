var firebaseConfig = {
    apiKey: "AIzaSyBwXNQOgGwhJF0mo_atlJ4NUcklz-WfDZw",
    authDomain: "heartlivecdu.firebaseapp.com",
    databaseURL: "https://heartlivecdu.firebaseio.com",
    projectId: "heartlivecdu",
    storageBucket: "heartlivecdu.appspot.com",
    messagingSenderId: "514004141140",
    appId: "1:514004141140:web:8dc668808000ce5cd2d9c1"
  };//prod

firebase.initializeApp(firebaseConfig);
var usersRef = firebase.database().ref().child("profile");
var dbRef = firebase.database();
var dataSet = [];
var key = [];
var idd = '';

var table = $('#usersList').DataTable({
    dom: 'Blfrtip',
    dom: '<"float-left"B><"float-right"f>rt<"row"<"col-sm-4"l><"col-sm-4"i><"col-sm-4"p>>',
    buttons: [
        'copy',
        'csv',
        'excel'
    ],
    // 
    columnDefs: [{
           targets: 0,
           render: function(data, type, full, meta){
              if(type === 'display'){
                 data = data + '<div class="links">' +
                     /*'<a href="#" onclick="get_user(this)" data-toggle="modal" data-target="#btn_edit" data-key="'+key+'">Edit</a>' +*/
                     '<a href="#" onclick="get_user(this)" data-toggle="modal" data-target="#btn_edit" class="btn btn-success" data-key="'+key+'">Update</a> ' +
                     '<a href="#" onclick="view_user(this)" data-toggle="modal" data-target="#btn_view" class="btn btn-warning" data-key="'+key+'">View</a>' +
                     '</div>';                     
              }
               
              return data;
           }
        }],

    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
    "order": [[ 0, "desc" ]],
    select: true
});
var i = 0;
var fulname = '';
usersRef.on("child_added", snap => {
	//key[i] = snap.key;
	//var keys = snap.key;
	key = snap.key;
    var u_ban = snap.child("banned").val();
    var u_blo = snap.child("blocked").val();
    var u_email = snap.child("email").val();
    var u_coins = snap.child("coins").val();
    var u_fname = snap.child("firstname").val();
    var u_lname = snap.child("lastname").val();
    var u_id = snap.child("userid").val();
    var u_level = snap.child("userlevel").val();
    var u_name = snap.child("username").val();
    fulname = u_lname +','+u_fname;
    dataSet = [key, u_ban, u_blo, u_coins, u_email, fulname, u_id, u_name, u_level];

    table.rows.add([dataSet]).draw();
    //i++;
    //console.log(dataSet);
});
usersRef.on("value", function(snapshot) {
	/*console.log("count : " + snapshot.numChildren() + " profile");*/
	document.getElementById("TotalUser").innerHTML = snapshot.numChildren();
});
//var ky = 'eUN7D9MGA1hqrC4fyNDdHgn87Tu1';

/*dbRef.ref('profile/' + key).on('child_added', function(data) {
  var pr = data.val().email;
  console.log(pr);
});*/

//update user data
function update_user(){
	var e = document.getElementById('e_banned_id');
	var e_banned_id = e.options[e.selectedIndex].value;
	var a = document.getElementById('e_block_id');
	var e_block_id = a.options[a.selectedIndex].value;
	var e_key = document.getElementById('e_key').value;
	var e_broadcastphoto = document.getElementById("e_broadcastphoto").value;
	var e_coins = document.getElementById("e_coins").value;
	var e_email = document.getElementById("e_email").value;
	var e_fname = document.getElementById("e_fname").value;
	var e_gems = document.getElementById("e_gems").value;
	var e_lname = document.getElementById("e_lname").value;
	var e_photourl = document.getElementById("e_photourl").value;
	var e_user_level = document.getElementById("e_user_level").value;
	var e_uname = document.getElementById("e_uname").value;
	var e_user_type = document.getElementById("e_user_type").value;

	var data = {
		banned: e_banned_id,
		blocked: e_block_id,
		broadcastphoto: e_broadcastphoto,
		coins: e_coins,
		email: e_email,
		firstname: e_fname,
		gems: e_gems,
		lastname: e_lname,
		photourl: e_photourl,
		userlevel: e_user_level,
		username: e_uname,
		usertype: e_user_type
	}

	//var updates = {};
	//updates['profile/' + u_key] = data;
	dbRef.ref('profile/' + e_key).update(data);

	alert('The user is updated successfully!');

	location.reload();
  }

  //add user data
  function add_user(){
	// var u_username = document.getElementById('user_name').value;
	var u_firstname = document.getElementById('first_name').value;
	var u_lastname = document.getElementById('last_name').value;
	var u_email = document.getElementById('user_email').value;	

	var e = document.getElementById('bnnd_id');
	var ban = e.options[e.selectedIndex].value;
	var a = document.getElementById('blck_id');
	var blo = a.options[a.selectedIndex].value;

	//var uid = firebase.database().ref().child('users_test').push().key;
    var u_push_key = firebase.database().ref().child('profile').push().key;
    //var u_id = Math.floor(100000 + Math.random() * 900000);

    var api_url = 'http://150.109.78.29/cms_h2h_dev/api/get_uid.php';
    $.ajax({
        url: api_url + "?ukey=" + u_push_key,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            //console.log('uid : ' + result['user_id'] + ' uname : ' + result['user_name']);
            // set/update document

            var data = {
		   	banned: ban,
			blocked: blo,
			broadcastphoto: "https://firebasestorage.googleapis.com/v0/b/heartlivecdu-dev.appspot.com/o/broadcastpic%2Fbroadcastpic.jpg?alt=media&token=8857cab6-4aee-449c-af21-4cd7ec3e0cde",
			coins: 0,
			email: u_email,
			fcmtoken: "",
			firstname: u_firstname,
			follower: 0,
			following: 0,
			gems: 0,
			lastlogin: 0,
			lastname: u_lastname,
			photourl: "https://firebasestorage.googleapis.com/v0/b/heartlivecdu-dev.appspot.com/o/broadcastpic%2Fbroadcastpic.jpg?alt=media&token=8857cab6-4aee-449c-af21-4cd7ec3e0cde",
			userid: result['user_id'],
			userkey: u_push_key,
			userlevel: 0,
			username: result['user_name'],
			usertype: ""
		   }
		   
		   var updates = {};
		   updates['profile/' + u_push_key] = data;
		   //dbRef.ref('profile/' + u_key).update(data);
		   firebase.database().ref().update(updates);
		   
		   alert('The user is created successfully!');
		   location.reload();
		   //end addfirebase
        }
    });
  }
  function add_user2(){
	var u_username = document.getElementById('user_name').value;
	var u_firstname = document.getElementById('first_name').value;
	var u_lastname = document.getElementById('last_name').value;
	var u_email = document.getElementById('user_email').value;	

	var e = document.getElementById('bnnd_id');
	var ban = e.options[e.selectedIndex].value;
	var a = document.getElementById('blck_id');
	var blo = a.options[a.selectedIndex].value;

	//var uid = firebase.database().ref().child('users_test').push().key;
    var u_push_key = firebase.database().ref().child('profile').push().key;
    var u_id = Math.floor(100000 + Math.random() * 900000);

    var api_url = 'http://150.109.78.29/cms_h2h_dev/api/get_uid.php';
    $.ajax({
        url: api_url + "?ukey=" + u_push_key,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log('uid : ' + result['user_id'] + ' uname : ' + result['user_name']);
            //alert(result);
        }
    });
  }
//get user data
  function get_user(dkey){
  	var user_key = dkey.getAttribute('data-key');
	
	dbRef.ref('profile/'+user_key).once("value").then(function(snapshot){
		document.getElementById("e_email").value = snapshot.val().email;
		document.getElementById("e_uname").value = snapshot.val().username;
		document.getElementById("e_fname").value = snapshot.val().firstname;
		document.getElementById("e_lname").value = snapshot.val().lastname;
		document.getElementById("e_coins").value = snapshot.val().coins;
		document.getElementById("e_gems").value = snapshot.val().gems;
		document.getElementById("e_broadcastphoto").value = snapshot.val().broadcastphoto;
		document.getElementById("e_photourl").value = snapshot.val().photourl;

		document.getElementById("e_banned_id").value = snapshot.val().banned;
		document.getElementById("e_block_id").value = snapshot.val().blocked;
		document.getElementById("e_user_type").value = snapshot.val().usertype;
		document.getElementById("e_user_level").value = snapshot.val().userlevel;
	});

  	document.getElementById("e_key").value = user_key;
  }

//view user data
function view_user(vkey){
	var user_key = vkey.getAttribute('data-key');

	dbRef.ref('profile/'+user_key).once("value").then(function(snapshot){
		document.getElementById("v_email").value = snapshot.val().email;
		document.getElementById("v_uname").value = snapshot.val().username;
		document.getElementById("v_fname").value = snapshot.val().firstname;
		document.getElementById("v_lname").value = snapshot.val().lastname;
		document.getElementById("v_coins").value = snapshot.val().coins;
		document.getElementById("v_gems").value = snapshot.val().gems;
		document.getElementById("v_broadcastphoto").value = snapshot.val().broadcastphoto;
		document.getElementById("v_photourl").value = snapshot.val().photourl;

		document.getElementById("v_banned_id").value = snapshot.val().banned;
		document.getElementById("v_block_id").value = snapshot.val().blocked;
		document.getElementById("v_user_type").value = snapshot.val().usertype;
		document.getElementById("v_user_level").value = snapshot.val().userlevel;
	});

	document.getElementById("v_key").value = user_key;
}