var peer;

function connectStart() {

	//custom server
	peer = new Peer($('#connect_alias').val(), {
		host: "sapphire-peerjs.herokuapp.com",
		secure: true,
		port: 443,
	});

	// Connect to PeerJS, have server assign an ID instead of providing one
	// Showing off some of the configs available with PeerJS :).

	// peer = new Peer($('#connect_alias').val(), {
	// 	// Set highest debug level (log everything!).
	// 	debug: 3,

	// 	config: {
	// 		'iceServers': [
	// 			{ url: 'stun:stun.l.google.com:19302' },
	// 			{ url: 'stun:stun1.l.google.com:19302' },
	// 			{ url: 'stun:stun2.l.google.com:19302' },
	// 			{ url: 'stun:stun3.l.google.com:19302' },
	// 			{ url: 'stun:stun4.l.google.com:19302' }
	// 		]
	// 	}, // Sample servers, please use appropriate ones 

	// 	// Set a logging function:
	// 	logFunction: function () {
	// 		var copy = Array.prototype.slice.call(arguments).join(' ');
	// 		$('#msgbox').append('<div style="direction:ltr;">' + copy + '</div>');
	// 	}
	// });

	// Show this peer's ID.
	peer.on('open', function (id) {
		$('#pid').text(id);
		$('#proom').text(' : ' + $('#connect_room option:selected').text() + ' studio');
		$('#connect_box').hide();
		$('#wacom_detect').hide();
	});

	// Await connections from others
	peer.on('connection', connect);

}

var connectedPeers = {};

var peerlist = new Array();
var connlist = new Array();
var invitionlist = new Array();