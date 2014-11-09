var GIREGI_DEFAULTS = {
	header: '서울=일워뉴스',
	day: '최근',
	sitename: '커뮤니티 일간워스트',
	title: '기레기 버튼',
	text: '길들인 코끼리를 순천부 장도에 방목하는데,\n 수초를 먹지 않아 날로 수척하여지고,\n 사람을 보면 눈물을 흘립니다.',
	nick: '병조판서 유정현',
	team: '온라인이슈팀',
	copyright: '정론직필 정통언론 일워뉴스 ilwar.com',
	feelings: {none: false, funny: true, happy: false, amazed: false, sad: false, upset: false, nonsense: false},
	comments: '이게 뭐지. 놀라워요. 처음 본다.'
};
var GIREGI_FEELINGS_TO_COMMENT = {
	none: ['진짜 대단하다', '정말 멋지다', '감사해요', '궁금하네요', '흥미롭네요'],
	funny: ['웃기네요', '웃기다', '정말 재밌네요', '정말 재밌다', 'ㅋㅋㅋ', '웃겨 죽겠다'],
	happy: ['참 기쁘네요', '좋아요', '좋네요', '기쁘다', '기뻐요', 'ㅎㅎ', '정말 좋아요', '참 좋아요', '참 기뻐요'],
	amazed: ['진짜 놀랍네요', 'ㄷㄷ', '놀랍다', '이런 일이', '세상에 이런 일이', '신기하네요', '놀라워요', '정말 놀랍다'],
	sad: ['슬프네요', '슬퍼요', '안구에 습기가', '눈물이 날 것 같아요', 'ㅠㅠ', '눈물 날 것 같아요', '눈물이..'],
	upset: ['짜증나네요', 'ㅡㅡ', '화나요', '화가 나네요', '정말 화나네요', '답이 없네요'],
	nonsense: ['에이 설마', '황당하네요.', '정말이요?', '설마요', '참 대박이다', '안 믿겨져요']
};
function giregi(obj) {
	"use strict";

	// Never use <Class>.prototype, since it may affect/contaminate the code using this library.
	// <Class>.prototype을 사용하면 기레기를 쓰는 다른 코드에 영향을 끼칠 수 있기 때문에 쓰지 않는 것이 좋습니다.
	var trim = (function() {
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		return function(a) {
			return a.replace(rtrim, "");
		}
	})();
	function shuffle(o) {
		for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	function pushArray(a, b) {
		for (var i = 0; i < b.length; a[a.length] = b[i++]);
		return a;
	}
	if (!Array.prototype.push)
		Array.prototype.push = function() {
			pushArray(this, arguments);
		}
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
	var ban = obj.comments.replace(/\s+|(\S)$/g, '$1 ').replace(/.\s+$/g, '').split(/\.\s+/g);
	var bf_cde = [];
	var f2c = GIREGI_FEELINGS_TO_COMMENT;

	for (var key in f2c) {
		if (feels[key])
			pushArray(bf_cde, f2c[key]);
	}
	if (!bf_cde.length)
		bf_cde = f2c.none;
	pushArray(ban, shuffle(bf_cde));
	if (ban.length > 4) ban.length = 4;

	var v_= obj.text.replace(/(<br *\/?>|\r\n?|\n)+/gi, '\n').replace(/<([^>]+)>|(<!--|-->)/g, '').replace('&nbsp;', ' ').split('\n');

	var news = [], v = [], j = 0;

	for (var i in v_) {
		if (v_[i].replace(/\s/g, '') != '')
			v.push(trim(v_[i]));
	}
	news.push(['(', obj.header, ') 기레기 기자 = 최근 한 온라인 커뮤니티에 "', obj.title, '" 라는 글이 올라와 네티즌들의 화제를 모으고 있다.\n'].join(''));

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

	news.push(['이에 네티즌들은 "', obj.title, ', ', ban[0], '", "', obj.title, ', ', ban[1], '", "', obj.title, ', ', ban[2], '", "', obj.title, ', ', ban[3], '" 등의 다양한 반응을 보였다.\n\n', word, ' ', word, ' ', word, '\n\n', obj.team, '\n\n<ⓒ', obj.copyright, ', 무단전재 배포금지>'].join(''));

	return news.join('');
}
