
(function () {

  const matchTime = new Date("2026-04-24T22:00:00+03:00");
  const matchBanner = `<a href="/tr/sportsbook"><img src="https://cdn.jsdelivr.net/gh/Neo777Uzy/fitcas@master/images/240426.jpg?raw=true" alt=""></a>`;






    function isHomePage() {
        const url = window.location.pathname;
        return url === '/' || 
               url === '/tr/' || 
               url === '/tr' || 
               url === '/en/' || 
               url === '/en';
    }




  const style = document.createElement("style");
  style.textContent = `
    .match-countdown-wrapper {
      position: absolute;
      right: 12%;
      top: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 6px;
      color: #fff;
      font-family: "Rajdhani", "Roboto Condensed", system-ui, sans-serif;
      min-width: 160px;
      max-width: 300px;
      scale:1.5;
    }

    .countdown-main {
      font-size: clamp(24px, 2vw, 32px);
      font-weight: 600;
      line-height: 1.1;
      color: #ffffff;
      text-shadow: 0 0 8px rgba(0,0,0,0.8);
      text-align: center;
      letter-spacing: 0.05em;
      min-width: 100%;
      display: flex;
      justify-content: center;
    }

    .countdown-breakdown {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .countdown-col {
      flex: 1;
      text-align: center;
      padding: 2px 4px;
    }

    .countdown-value {
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 600;
      line-height: 1.1;
      color: #fff;
    }

    .countdown-label {
      font-size: 11px;
      line-height: 1.2;
      font-weight: 500;
      color: #9ecbff;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    @media (max-width: 768px) {
      .match-countdown-wrapper  {
      right: 0%;
      top: 20%;
      scale:0.7;
      }
    }
  `;
  document.head.appendChild(style);



  const wrapper = document.createElement("div");
  wrapper.className = "match-countdown-wrapper";

  wrapper.innerHTML = `
    <div class="countdown-main" id="cd_main"></div>
    <div class="countdown-breakdown">
      <div class="countdown-col">
        <div class="countdown-value" id="cd_hours">--</div>
        <div class="countdown-label">SAAT</div>
      </div>:
      <div class="countdown-col">
        <div class="countdown-value" id="cd_minutes">--</div>
        <div class="countdown-label">DAKİKA</div>
      </div>:
      <div class="countdown-col">
        <div class="countdown-value" id="cd_seconds">--</div>
        <div class="countdown-label">SANİYE</div>
      </div>
    </div>
  `;



  function updateCountdown() {



    const now = new Date();
    const diffMs = matchTime - now;



    if (diffMs > 0 && isHomePage()) {
        const parent = document.querySelector('#banners-wrapper')?.parentNode;
        if (!parent) return;

        const lastPlayedSection = document.querySelector('#last-played-games-wrapper');

        if (!document.querySelector('.uzy_header_section2')) {
            const sec3 = document.createElement('div');
            sec3.className = 'container uzy_header_section2 section';
            sec3.innerHTML = matchBanner ;
            sec3.id="uzy_sports_timer";

            if(lastPlayedSection)
            {
            	parent.insertBefore(sec3, lastPlayedSection);
            }
            else
            {
            	parent.insertBefore(sec3, document.getElementById('banners-wrapper').nextSibling);
            }
        }
}











if(document.querySelector(".match-countdown-wrapper"))
{


    if (diffMs <= 0) {
      document.getElementById("cd_main").textContent = "";
      document.getElementById("cd_hours").textContent = "00";
      document.getElementById("cd_minutes").textContent = "00";
      document.getElementById("cd_seconds").textContent = "00";
      return;
    }


    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hStr = hours.toString().padStart(2, "0");
    const mStr = minutes.toString().padStart(2, "0");
    const sStr = seconds.toString().padStart(2, "0");

    //document.getElementById("cd_main").textContent = `${hStr}:${mStr}:${sStr}`;

    document.getElementById("cd_hours").textContent = hStr;
    document.getElementById("cd_minutes").textContent = mStr;
    document.getElementById("cd_seconds").textContent = sStr;
  }
else if(document.querySelector(".uzy_header_section2 "))
{
  const bannerContainer = document.querySelector(".uzy_header_section2 ");

//  const cs = window.getComputedStyle(bannerContainer);
//  if (cs.position === "static") {
//    bannerContainer.style.position = "relative";
//  }

  bannerContainer.appendChild(wrapper);
}
}
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
