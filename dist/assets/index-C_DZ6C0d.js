(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=()=>`<section class="main">
    <div class="container">
      <div class="row justify-content-md-between">
        <!--Посты-->
        <div class="col-md-8 col-lg-9 col-sm-12 main-block records">
          <div class="record">
            <img
              class="record-block-img"
              src="/public/abstractArt.jpg"
              alt="картинка"
            />
            <div class="row record-block-user">
              <img class="col-auto" src="/public/comment.svg" alt="комментарий" />
              <p class="col-auto user-comment">
                <span class="user-name">Jason Anderson</span> commented:
              </p>
            </div>
            <div class="record-block-item">
              <p class="record-block-text">
                Don’t sit and wait. Get out there, feel life. Touch the sun,
                and immerse in the sea. Keep love in your heart. A life
                without it is like a sunless garden when the flowers are dead.
                Because summer is passion, memories, light breeze, the sun
                that appears on the skin and caresses the face.
              </p> 
              <p class="record-block-text-name">– Jason, <em>10:30 am</em></p>
            </div>
            <div class="">
              <div class="row">
                  <div class="row col-auto">
                    <img
                      class="col-auto icon-comment"
                      src="/public/eye.svg"
                      alt="комментарий"
                    />
                    <p class="col-auto number-comment">432</p>
                  </div>
                  <div class="row col-auto">
                    <img
                      class="col-auto icon-comment"
                      src="/public/comment.svg"
                      alt="комментарий"
                    />
                    <p class="col-auto number-comment">47</p>
                  </div>
                </div>
              </div>
            </div>
            <!--Аккордеон записи1-->
            <div class="accordion accordion-flush" id="accordionRecord1">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseRecord1"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div class="row accordion-record">
                      <p class="col-auto">Sunset Sunset Sunset</p>
                      <div class="col-auto g-3 g-md-0 accordion-record-time">
                        <img src="/public/clock.svg" alt="время" />
                        <p>53 minutes ago</p>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapseRecord1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionRecord1"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    aspernatur facilis maxime nisi officia saepe.
                  </div>
                </div>
              </div>
            </div>
            <!--Конец Аккордеон записи1-->
            <!--Аккордеон записи2-->
            <div class="accordion accordion-flush" id="accordionRecord2">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseRecord2"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div class="row accordion-record">
                      <p class="col-auto">Morning of Siberia</p>
                      <div class="col-auto g-3 g-sm-0 accordion-record-time">
                        <img src="/public/clock.svg" alt="время" />
                        <p>56 minutes ago</p>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapseRecord2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionRecord2"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    aspernatur facilis maxime nisi officia saepe.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Конец Аккордеон записи2-->
          <!--Профиль-->
          <div
            class="row col-md-4 col-lg-3 col-sm-12 order-first order-md-last g-0 main-block profile"
          >
            <div class="row col-12 side-bar">
              <div class="profile-block col-12">
                <img class="profile-photo" src="/public/Hanna.jpg" alt="фото" />
                <div class="profile-id">
                  <p class="profile-id-name">Hanna Dorman</p>
                  <p class="profile-id-prof">UX/UI designer</p>
                </div>
                <div class="row social">
                  <img class="col g-0" src="/public/tg.svg" alt="тг" />
                  <img class="col g-0" src="/public/hh.svg" alt="hh" />
                  <img class="col g-0" src="/public/twitter.svg" alt="твиттер" />
                </div>
              </div>
              <!--Аккордеон профиля1-->
              <div class="navigation-block col-12 g-0">
                <div class="accordion accordion-flush" id="accordionNavigation">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button accordion-button-sideBar"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Navigation
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionNavigation"
                    >
                      <div class="accordion-body p-0 side-bar-profile">
                        <div class="accordion-body-profile">
                          <div class="accordion-body-profile-block">
                            <button type="button" class="btn profile-button">
                              <img
                                class="profile-button-img"
                                src="/public/profile.svg"
                                alt="профиль"
                              />
                              My profile
                            </button>
                            
                            <div class="row justify-content-between align-items-center profile-button w-100">
                              <button type="button" class="btn col-auto">
                                <img
                                  class="profile-button-img"
                                  src="/public/coins.svg"
                                  alt="баланс"
                                />
                                Balance
                              </button>                           
                              <p class="col-auto balance p-0">$ 1,430</p>
                            </div>
                            
                            <div class="row justify-content-between align-items-center profile-button w-100">
                              <button type="button" class="btn col-auto">
                                <img
                                  class="profile-button-img"
                                  src="/public/connections.svg"
                                  alt="связи"
                                />
                                Connections
                              </button>
                              <p class="col-auto connections">29</p>
                            </div>
                            <button type="button" class="btn profile-button">
                              <img
                                class="profile-button-img"
                                src="/public/friends.svg"
                                alt="друзья"
                              />
                              Friends
                            </button>
                          </div>
                        </div>
                        <div class="accordion-body-profile-block w-100">
                        
                          <div class="row justify-content-between align-items-center profile-button w-100">
                            <button type="button" class="btn col-auto">
                              <img
                                class="profile-button-img"
                                src="/public/calendar.svg"
                                alt="календарь"
                              />
                              Events
                            </button>
                            <p class="col-auto events">45</p>
                          </div>

                          <button type="button" class="btn profile-button">
                            <img
                              class="profile-button-img"
                              src="/public/gear.svg"
                              alt="настройки"
                            />
                            Account settings
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Конец аккордеона профиля1-->
              <!--Аккордеон профиля2-->
              <div class="navigation-block col-12 g-0">
                <div
                  class="accordion accordion-flush"
                  id="accordionNavigation2"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button accordion-button-sideBar"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-accordionNavigation2"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <label for="message"> Share your thoughts </label>
                      </button>
                    </h2>
                    <div
                      id="flush-accordionNavigation2"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionNavigation2"
                    >
                      <div class="accordion-body p-0 side-bar-profile">
                        <form class="accordion-body-profile profileTextarea">
                          <textarea
                            class="form-control"
                            id="message"
                            name="message"
                            placeholder="Enter your message..."
                            rows="3"
                          ></textarea>
                          <button id="messageButton" class="col-12 btn btn-primary" type="reset">
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Конец аккордеон профиля1-->
          </div>
        </div>
      </div> 
    </section>
`;class u extends HTMLElement{constructor(){super(),this.innerHTML='<div id="map" class="yMap loaded"></div>',navigator.geolocation.getCurrentPosition(i=>{i.coords});let s=document.createElement("script");s.innerHTML=`initMap().finally(() => {
      window.setTimeout(() => {
        document.getElementById('preloader').classList.add('loaded');
        document.getElementById("map").classList.remove("loaded");
      }, 1000); //сделала таймаут, чтобы loader был виден, без него загрузка очень быстрая
     });
      async function initMap() {
      await ymaps3.ready;
      const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls} = ymaps3;
      const {YMapGeolocationControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      
      const map = new YMap(document.getElementById("map"), {
        location: {
        center: [37.588144, 55.733842],
        zoom: 10,
      },

      });
      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());


      map.addChild(
       new YMapControls({position: 'left'})
       .addChild(new YMapGeolocationControl({}))
      );

      map.addChild(
       new YMapControls({position: 'right'})
       .addChild(new YMapZoomControl({}))
      );
    }
    `,document.body.appendChild(s)}}customElements.define("map-component",u);const m=()=>`
 <section class="main">
  <div class="container wrapper">
   <h1>Basic map</h1>
 
   <div id="preloader" class="preloader">
    <div class="loader"></div>
   </div>

   <map-component></map-component>
  </div>
 </section>
`;class v extends HTMLElement{constructor(){super(),this.innerHTML='<h1 id="timer"></h1>';let s=document.getElementById("timer");const i=Number(sessionStorage.getItem("timeStart"));function c(){let t=new Date().getTime();const o=new Date(t-i);let l=o.getUTCSeconds()<10?`0${o.getUTCSeconds()}`:o.getUTCSeconds(),r=o.getUTCMinutes()<10?`0${o.getUTCMinutes()}`:o.getUTCMinutes(),d=o.getUTCHours()<10?`0${o.getUTCHours()}`:o.getUTCHours();s.textContent=`${d}:${r}:${l}`}c(),(()=>{setInterval(c,1e3)})()}}customElements.define("timer-counter",v);const g=()=>`<section class="main">
<div class="container wrapper">
<h1>Timer</h1>
<timer-counter></timer-counter>
</div>
</section>
  `;sessionStorage.setItem("timeStart",new Date().getTime().toString());document.getElementById("menuIsOpen").onclick=function(){document.getElementById("headerBottomMenu").classList.toggle("is-open")};const b={"/":{title:"Profile",render:p},"/map":{title:"Map",render:m},"/timer":{title:"Timer",render:g}};function n(){let a=b[location.pathname];document.title=a.title,a?(document.title=a.title,app.innerHTML=a.render()):(history.replaceState("","","/"),n());const s=document.getElementById("TimerNav"),i=document.getElementById("MapNav"),c=document.getElementById("ActivityNav");switch(location.pathname){case"/timer":s.classList.add("a-focus"),i.classList.remove("a-focus"),c.classList.remove("a-focus");break;case"/map":i.classList.add("a-focus"),c.classList.remove("a-focus"),s.classList.remove("a-focus");break;case"/":c.classList.add("a-focus"),s.classList.remove("a-focus"),i.classList.remove("a-focus");break}}window.addEventListener("click",a=>{a.target.matches("[data-link]")&&(a.preventDefault(),history.pushState("","",a.target.href),n())});window.addEventListener("popstate",n);window.addEventListener("DOMContentLoaded",n);
