# 토이프로젝트 드럼구현 
- keyboard Event
- Moust Event

<p align="center">
    <img src="https://user-images.githubusercontent.com/127499117/235364132-5a3fce83-5a7d-4f1b-b747-3735c1c9a574.gif" alt="Animation3">
</p>

> 이번 프로젝트를 통해 그 동안 정말 많이 실습해보았던 click, mouse이벤트가 아닌 keyboard 이벤트에 관해 배웠고, 키보드 이벤트 중 keypress가 폐지 되었고, 이벤트 속성 중 keyCode도 폐지가 되었다는 것을 알았다. 이렇게 자바스크립트는 소소하게 무언가를 계속 변경하고, 수정한다는 것을 깨달았다....! 

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
const init = () => {
  window.addEventListener('keydown', onKeyDown);

  $keys.forEach((key, index) => {
    const audio = getAudioDOM(index);
    key.appendChild(audio);
    key.dataset.key = drumSounds[index].key;
    key.addEventListener('transitionend', onTransitionEnd);
  });
};
```

## 1.keydown

- 정의: 모든 키(keyboard)를 눌렀을 때 발생하는 이벤트이다.

- 적용 : 이벤트가 발생했을때, 핸들링 할 수 있는 프로퍼티 속성으로 key를 이용하였다. keyCode는 이미 폐지 되어 사용을 권장하지 않는 이유도 있지만, keyCode인 숫자로 핸들링 할 경우, 내가 아닌 다른 개발자가 봤을때 어떤 키에 이벤트가 발생하였는지, 한 눈에 보기 어렵기 때문이다.

 <br/>
 
## 2. addEventListener(transitionend)
- 정의: trasition이 완료된 이 후, 발생하는 이벤트로 transition 완료를 감지한다.

- 적용 :`css
 .key{ transition: all 100ms;} .playing {transform: scale(1.1)} `각각의 click,keyboard 이벤트가 발생시 .playing 클래스를 DOM에 추가해주었고, transitionend의 프로퍼티인 propertyName을 사용해, transform이 끝나면, 추가해준 .playing 클래스를 삭제하도록 이벤트를 걸어주었다.
