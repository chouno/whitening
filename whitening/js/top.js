
/* Settings
------------------------------------------------------------------------*/
var animationTarget=[
	'.first_title',
	'.second_title',
	'.third_content',
	'.fourth_content',
	'.fifth_content',
	'.sixth_content',
	'.seventh_content',
	'.eighth_content',
	'.nineth_content',
	'.content_10',
	'.content_11',
	'.content_12',
	'.content_13',
	'.content_14',
	'.content_15',
	'.content_16',
	'.content_17',
	'.news_content',
	'.movie_content',
	'.price_content1',
	'.price_content2',
	'.con_beforeafter',
	'.movie'
];

/* Functions
------------------------------------------------------------------------*/




/* readyEvent
------------------------------------------------------------------------*/
$(function(){
	setLiquidFrame('#key_visual');
});

window.onload = function(){
	// initialize();
	setLiquidFrame('#key_visual');
	$(window).resize(function(){
		setLiquidFrame('#key_visual');
	});
	$(window).scroll(function(){
		var top =  $(window).scrollTop();
		if(top>0){
			$('#side').addClass('colored');
		}else{
			$('#side').removeClass('colored');
		}

		for (var i = 0; i < animationTarget.length; i++) {
			showAnim(animationTarget[i]);
		}
	})
}

function showAnim(target){
	var top =  $(window).scrollTop();
	if ( top + ($(window).innerHeight()*0.85) > $(target).offset().top ) {
		if(target!='.con_beforeafter'&&target!='.movie'){
			$(target).removeClass('off');
		}else{
			$(target).removeClass('transparent');
		}
	}
}


function initialize() {
  var latlng = new google.maps.LatLng(33.5663365,133.6308263);/*表示したい場所の経度、緯度*/
  var myOptions = {
    zoom: 17, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeControlOptions: { mapTypeIds: ['noText', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('lnk_shop'), myOptions);/*マップのID取得*/

  /*スタイルのカスタマイズ*/
  var styleOptions =
[
  {
    "stylers": [
      { "weight": 0.5 }
    ]
  },{
    "stylers": [
      { "lightness": 1 },
      { "gamma": 1 },
      { "saturation": 0 },
      { "hue": "#ed9334" }
    ]
  }
];

 var styledMapOptions = { name: 'WHITENING NET' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');

/*WEB企画アイコンの取得*/
var icon = new google.maps.MarkerImage('http://zeyo-sports.com/wp-content/themes/twentyseventeen/whitening/images/home/map_icon.png',/*アイコンの場所*/
  new google.maps.Size(60,60),/*アイコンのサイズ*/
  new google.maps.Point(0,0)/*アイコンの位置*/
);

/*マーカーの設置*/
var markerOptions = {
  position: latlng,/*表示場所と同じ位置に設置*/
  map: map,
	icon: {
		url: "http://zeyo-sports.com/wp-content/themes/twentyseventeen/whitening/images/home/map_icon.png" ,
		scaledSize: new google.maps.Size( 40, 40 ) ,
	} ,
  title: 'WHITENING NET'/*マーカーのtitle*/
};
var marker = new google.maps.Marker(markerOptions);

}
