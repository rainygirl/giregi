# 기레기 버튼 (자동 인터넷 기사 생성기)

[**데모 체험**](http://htmlpreview.github.io/?https://github.com/rainygirl/giregi/blob/master/index.html) | [**일간워스트에서 체험**](http://ilwar.com/recent)

## 기레기 버튼이란?
* 커뮤니티 게시물을 인터넷신문 기사 형식으로 쉽게 가공하는 스크립트입니다.
* 2014년 10월 8일부터 [커뮤니티사이트 일간워스트 ilwar.com](http://ilwar.com) 에 적용되어 활용되고 있습니다.

![기레기 예시 스크린 샷](https://raw.githubusercontent.com/rainygirl/giregi/master/sample.png)

## 인터넷신문 기사 형식이란?
* "최근 한 온라인 커뮤니티에서 ㅇㅇㅇ 가 화제가 되고있다. ~~~ 이제 네티즌들은 'ㅇㅇㅇ 재밌네요' 'ㅇㅇㅇ 신기해요' 등의 반응을 보이고 있다." 는 형식으로 작성되는 퍼가기 기사를 뜻합니다.

* [최근 한 온라인 커뮤니티 기사 예시](http://bit.ly/1sXalxn)
* 이에 네티즌들은... 반응은 지난 2014년 5월 30일까지 [기자고로케 gija.coroke.net](http://gija.coroke.net)에서 집계하고 있었습니다.

* 기사 출처 링크를 생략하는건 당연하고,  출처 사이트나 글쓴이 이름을 생략하는 경우도 많습니다.

## 기레기 버튼 원리
1. 문장을 줄 단위로 쪼갠 뒤 
2. '라고 했다' '라면서' 등의 조사를 붙이고, 
3. 앞 뒤에 형식적인 문장과 가짜 네티즌 반응을 붙인 뒤, 
4. 실시간검색어 노출을 위해 키워드반복 문구를 넣고
5. 맨 뒤에 '무단전재 배포금지'라고 써두면 완성됩니다.

## 필요 기술
* 원리가 간단하기 때문에 문장을 가공할 수 있는 어떤 언어로든 쉽게 제작 가능합니다.
* 이 코드는 [일간워스트](http:/ilwar.com)에서 사용된 것으로, JavaScript 로 구현되었습니다.

## 사용법

다음과 같이 호출하게 되면, \n 로 줄구분된 기레기 String이 return됩니다.

~~~~
var s = giregi({
                header: 헤드라인(String, default: '서울=일워뉴스')
                title: 제목(String, default: '기레기 버튼'),
                text: 내용(String, default: '길들인 코끼리를 순천부 장...'),
                nick: 글쓴이 이름(String, default: '병조판서 유정현'),
                day: 날짜(String, default: '최근'),
                sitename: 사이트명(String, default: '커뮤니티 일간워스트'),
                team: 팀명(String, default: '온라인이슈팀'),
                copyright: 저작권(String, default: '정론직필 정통언론 일워뉴스 ilwar.com'),
                feelings: { // 이 글에 대한 네티즌의 반응(감정), 중복 가능
                  happy: 행복함?(Boolean, default: false),
                  funny: 웃김?(Boolean, default: true),
                  amazed: 놀라움?(Boolean, default: false),
                  sad: 슬픔?(Boolean, default: false),
                  upset: 화남?(Boolean, default: false),
                  nonsense: 황당?(Boolean, default: false)
                },
                comments: 기타 네티즌들의 반응(String, default: '이게 뭐지. 놀라워요. 처음 본다.')
        });
~~~~

## Credits and references
* [rainygirl](http://rainygirl.com)
* [@rainygirl_](https://twitter.com/rainygirl_)
* [일간워스트 공지](http://ilwar.com/notice/172108)

## License
* The MIT License (included in the repository)
* 자유롭게 수정해서 더 채워주세요!
