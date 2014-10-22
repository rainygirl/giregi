function giregi(obj) {
	"use strict";

	function shuffle(o) {
		for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	(function() {
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		String.prototype.trim = function() {
			return this.replace(rtrim, "");
		}
	})();

	if (obj.day == undefined) obj.day = '최근';
	if (obj.sitename == undefined) obj.sitename = '커뮤니티 일간워스트';
	if (obj.title == undefined) obj.title = '기레기 버튼';
	if (obj.text == undefined) obj.text = '길들인 코끼리를 순천부 장도에 방목하는데,\n 수초를 먹지 않아 날로 수척하여지고,\n 사람을 보면 눈물을 흘립니다.';
	if (obj.nick == undefined) obj.nick = '병조판서 유정현';

	var tail = ['그와 함께 "', '" 라면서,', ' "', '"라고 했다.\n', '또 "', '"라면서, ', '"', '" 라고도 했다.\n', '" 는 등의 장문의 글을 남겼다.\n'];
	var ban = shuffle(['진짜 대단하다', '정말 멋지다', '감사해요', '궁금하네요']);

	var v_ = obj.text.replace(/<br( *\/)?>/gi, '\n').replace(/<([^>]+)>|(<!--|-->)/g, '').replace('&nbsp;', ' ').split('\n');

	var news = [], v = [], j = 0;

	for (var i in v_) {
		if (v_[i].replace(/\s/g, '') != '')
			v.push(v_[i].trim());
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
