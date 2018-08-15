function changeContent(type,title) {
	if(title=='Admin'){
		$('.navbar-brand').text('Admin - ABCIE');
	}else{
		$('.navbar-brand').text('DAPP - ABCIE');
	}
	if(type=='first'){
		$('.first').show();
		$('.second').hide();
		$('.third').hide();
		$('.five').hide();
		$('.six').hide();
		$('.sevan').hide();
	}else if(type=='second'){
		$('.first').hide();
		$('.second').show();
		$('.third').hide();
		$('.fourth').hide();
		$('.five').hide();
		$('.six').hide();
		$('.sevan').hide();
	}else if(type=='third'){
		$('.first').hide();
		$('.second').hide();
		$('.third').show();
		$('.fourth').hide();
		$('.five').hide();
		$('.six').hide();
		$('.sevan').hide();
	}else if(type=='fourth'){
		$('.first').hide();
		$('.second').hide();
		$('.third').hide();
		$('.fourth').show();
		$('.five').hide();
		$('.six').hide();
		$('.sevan').hide();
	}else if(type=='five'){
		$('.first').hide();
		$('.second').hide();
		$('.third').hide();
		$('.fourth').hide();
		$('.five').show();
		$('.six').hide();
		$('.sevan').hide();
	}else if(type=='six'){
		$('.first').hide();
		$('.second').hide();
		$('.third').hide();
		$('.fourth').hide();
		$('.five').hide();
		$('.six').show();
		$('.sevan').hide();
	}else if(type=='sevan'){
		$('.first').hide();
		$('.second').hide();
		$('.third').hide();
		$('.fourth').hide();
		$('.five').hide();
		$('.six').hide();
		$('.sevan').show();
	}
}
function createChannel(e){
	//console.log($('#form-one').serialize());
	alert($('#form-channel').serialize());
	//alert($('[name="channel_name"]').val()+'\n' + $('[name="config_name"]').val());
}
function invitePeers(){
	alert($('#form-invitepeers').serialize());
}
function installChaincode(){
	alert($('#form-chaincode').serialize());
}
function initaiateFunc(){
	alert($('#form-instantiate').serialize());
}
function createBOE(){
	alert($('#form-createBOE').serialize());
}
function updateBOE(){
	alert($('#form-updateBOE').serialize());
}
function finish(){
	alert($('#form-viewBOE').serialize());
}