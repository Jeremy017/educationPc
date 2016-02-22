function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function footerCodeShow(){	
	$(".weixin").mouseover(function(){
		$(".qcode").addClass("show");
	});

	$(".weixin").mouseout(function(){
		$(".qcode").removeClass("show");
	});
}

var basicTemp = '<a class="detail" data-id="{id}" data-type="1">' +
						'<div class="basicBox basicBox{ii}">' +
							'<div class="font"></div>' +
						'</div>' +
					'</a>';

var commonTemp = '<a class="detail" data-id="{id}" data-type="2">' +
					'<div class="commonBox commonBox{ii}">' +
						'<div class="font"></div>' +
					'</div>' +
				'</a>';