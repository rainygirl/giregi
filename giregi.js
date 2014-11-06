var GIREGI_DEFAULTS = {
	day: '최근',
	sitename: '커뮤니티 일간워스트',
	title: '기레기 버튼',
	text: '길들인 코끼리를 순천부 장도에 방목하는데,\n 수초를 먹지 않아 날로 수척하여지고,\n 사람을 보면 눈물을 흘립니다.',
	nick: '병조판서 유정현',
	feelings: {funny: true, happy: false, amazed: false, sad: false, upset: false, nonsense: true},
	comments: ''
};
var GIREGI_FEEL_TO_COMMENT = {
	funny: ['웃기네요', '웃기다', '정말 재밌네요', '정말 재밌다', 'ㅋㅋㅋ'],
	happy: ['참 기쁘네요', '좋아요', '좋네요' '기쁘다', '기뻐요', 'ㅎㅎ'],
	amazed: ['진짜 놀랍네요', 'ㄷㄷ', '놀랍다'],
	sad: ['슬프네요', '슬퍼요', '안구에 습기가', '눈물이 날 것 같아요', 'ㅠㅠ'],
	upset: ['짜증나네요', 'ㅡㅡ', '화나요', '화가 나네요'],
	nonsense: ['에이 설마', '정말이요?', '설마요', '참 대박이다', '안 믿겨져요']
};
function giregi(obj) {
	"use strict";

	(function() {
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		String.prototype.trim = function() {
			return this.replace(rtrim, "");
		}
	})();
	Array.prototype.shuffle = function() {
		for (var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
		return o;
	};
	Array.prototype.pushArray = function() {
		for (var n = 0; n < arguments.length; n++) {
			var i, a = arguments[n];
			if (a instanceof Array)
				for (i = 0; i < a.length; this.push(a[i++]));
			else
				this.push(a);
		}
	};
	if (!obj) {
		obj = GIREGI_DEFAULTS;
	} else {
		for (var key in GIREGI_DEFAULTS) {
			if (!obj[key])
				obj[key] = GIREGI_DEFAULTS[key];
		}
	}

	var tail = ['그와 함께 "', '" 라면서,', ' "', '"라고 했다.\n', '또 "', '"라면서, ', '"', '" 라고도 했다.\n', '" 는 등의 장문의 글을 남겼다.\n'];
	var feels = obj.feelings;
	var ban = obj.comments.replace(/\s+|(\S)$/g, '$1 ').split(/\. +/g);
	var bf_cde = [];
	var f2c = GIREGI_FEEL_TO_COMMENT;

	for (var key in f2c) {
		if (feels[key]) bf_cde.pushArray(
	var ban = ['진짜 대단하다', '정말 멋지다', '감사해요', '궁금하네요'];

	var v_= obj.text.replace(/(<br *\/?>|\r\n?|\n)*/gi, '\n').replace(/<([^>]+)>|(<!--|-->)/g, '').replace('&nbsp;', ' ').split('\n');

	var news = [], v = [], j = 0;

	for (var i in v_) {
		if (v[i].replace(/\s/g, '') != '')
			v.push(v[i].trim());
	}
	news.push(['(서울=일워뉴스) 기레기 기자 = 최근 한 온라인 커뮤니티에 "', obj.title, '" 라는 글이 올라와 네티즌들의 화제를 모으고 있다.\n'].join(''));

	if (v.join('').replace(/\n|\s/g, '').length == 0)
		news.push([obj.sitename, '의 닉네임 "', obj.nick, '" 라는 이용자가 ', obj.day, ' 올린 글은 화제의 그림을 담고 있으며, '].join(''));
	else
		news.push([obj.sitename, '의 닉네임 "', obj.nick, '" 라는 이용자가 ', obj.day, ' 올린 글에 따르면, "'].join(''));

	for (var i in v) {
		if (j > 0 && tail[j % 8] != '') news.push(tail[j % 8]);
		news.push(v[i].replace(/,|\./g, ''));
		if (i == v.length - 1)
			news.push(tail[3]);
		else if (j == 18) {
			news.push(tail[8]);
			break;
		} else
			news.push(tail[j % 8 + 1]);
		j += 2;
	}

	obj.title = [obj.title.substring(0, 15), (obj.title.length > 15 ? '...' : '')].join('');

	var word = obj.title.split(' ')[0].substring(0, 15);

	news.push(['이에 네티즌들은 "', obj.title, ', ', ban[0], '", "', obj.title, ', ', ban[1], '", "', obj.title, ', ', ban[2], '", "', obj.title, ', ', ban[3], '" 등의 반응을 보였다.\n\n', word, ' ', word, ' ', word, '\n\n온라인이슈팀\n\n<ⓒ정론직필 정통언론 일워뉴스 ilwar.com, 무단전재 배포금지>'].join(''));

	return news.join('');
}
