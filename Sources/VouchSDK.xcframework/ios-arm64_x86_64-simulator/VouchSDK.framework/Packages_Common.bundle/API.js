'use strict';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const logo = "data:image/svg+xml,%3csvg%20width='101'%20height='22'%20viewBox='0%200%20101%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.61218%2021.6922L0%200.5H5.67663L11.2774%2014.1236L16.8782%200.5H22.5241L12.6032%2021.6922H9.61218ZM27.3368%2020.894C28.6259%2021.4261%2030.0072%2021.6922%2031.4805%2021.6922C32.9275%2021.6922%2034.2824%2021.4261%2035.5453%2020.894C36.8345%2020.3353%2037.9658%2019.577%2038.9392%2018.6191C39.939%2017.6613%2040.7019%2016.5438%2041.2281%2015.2667C41.7806%2013.963%2042.0569%2012.5794%2042.0569%2011.1161C42.0569%209.62609%2041.7806%208.24254%2041.2281%206.96542C40.7019%205.6883%2039.939%204.57082%2038.9392%203.61298C37.9658%202.62853%2036.8345%201.87024%2035.5453%201.33811C34.2824%200.77937%2032.9275%200.5%2031.4805%200.5C30.0072%200.5%2028.6259%200.77937%2027.3368%201.33811C26.0739%201.87024%2024.9558%202.62853%2023.9823%203.61298C23.0089%204.57082%2022.2459%205.6883%2021.6934%206.96542C21.1409%208.24254%2020.8647%209.62609%2020.8647%2011.1161C20.8647%2012.5794%2021.1409%2013.963%2021.6934%2015.2667C22.2459%2016.5438%2023.0089%2017.6613%2023.9823%2018.6191C24.9558%2019.577%2026.0739%2020.3353%2027.3368%2020.894ZM34.3219%2016.4241C33.48%2016.903%2032.5329%2017.1425%2031.4805%2017.1425C30.4544%2017.1425%2029.5073%2016.903%2028.6391%2016.4241C27.7709%2015.9186%2027.0737%2015.2135%2026.5475%2014.3089C26.0476%2013.4042%2025.7977%2012.34%2025.7977%2011.1161C25.7977%209.86555%2026.0476%208.78798%2026.5475%207.88335C27.0737%206.97872%2027.7709%206.28695%2028.6391%205.80803C29.5073%205.3025%2030.4544%205.04974%2031.4805%205.04974C32.5329%205.04974%2033.48%205.3025%2034.3219%205.80803C35.1901%206.28695%2035.8742%206.97872%2036.374%207.88335C36.8739%208.78798%2037.1239%209.86555%2037.1239%2011.1161C37.1239%2012.34%2036.8739%2013.4042%2036.374%2014.3089C35.8742%2015.2135%2035.1901%2015.9186%2034.3219%2016.4241ZM69.8997%2020.8541C71.1898%2021.4128%2072.6009%2021.6922%2074.133%2021.6922C75.6651%2021.6922%2076.9149%2021.4794%2077.8825%2021.0537C78.877%2020.6013%2079.6296%2020.149%2080.1403%2019.6967V15.3066C79.4414%2015.8121%2078.6485%2016.2512%2077.7616%2016.6236C76.8746%2016.9695%2075.786%2017.1425%2074.4958%2017.1425C73.3401%2017.1425%2072.3053%2016.8764%2071.3914%2016.3443C70.5044%2015.8121%2069.8056%2015.0938%2069.2949%2014.1891C68.7842%2013.2845%2068.5289%2012.2735%2068.5289%2011.156C68.5289%2010.0119%2068.7842%208.98753%2069.2949%208.0829C69.8325%207.17828%2070.5582%206.45989%2071.4721%205.92776C72.3859%205.39563%2073.3938%205.12956%2074.4958%205.12956C75.786%205.12956%2076.8746%205.31581%2077.7616%205.6883C78.6485%206.03419%2079.4414%206.4599%2080.1403%206.96542V2.57532C79.6296%202.14961%2078.877%201.6973%2077.8825%201.21838C76.9149%200.73946%2075.6651%200.5%2074.133%200.5C72.6009%200.5%2071.1898%200.792673%2069.8997%201.37802C68.6095%201.93676%2067.4807%202.72166%2066.513%203.73271C65.5454%204.71716%2064.7928%205.84794%2064.2553%207.12506C63.7446%208.40218%2063.4892%209.74582%2063.4892%2011.156C63.4892%2012.5661%2063.7446%2013.9098%2064.2553%2015.1869C64.7928%2016.4374%2065.5454%2017.5549%2066.513%2018.5393C67.4807%2019.5238%2068.6095%2020.2954%2069.8997%2020.8541ZM81.6528%200.5V21.6922H86.537V14.1236H96.0784V21.6922H100.963V0.5H96.0784V9.58238H86.537V0.5H81.6528ZM52.7769%2021.7013C50.9832%2021.7013%2049.3828%2021.5053%2047.9755%2020.7878C46.5958%2020.0704%2045.492%2019.0494%2044.6642%2017.7249C43.864%2016.3728%2043.5241%2014.7723%2043.5241%2012.9235L43.5244%200.5H48.4308V12.1785C48.4308%2013.8065%2048.8447%2015.0483%2049.6725%2015.9037C50.5003%2016.7315%2051.5351%2017.1454%2052.7769%2017.1454C54.0186%2017.1454%2055.0396%2016.7315%2055.8398%2015.9037C56.6676%2015.0483%2057.0815%2013.8065%2057.0815%2012.1785V0.5H62.1887V12.9235C62.1887%2014.7723%2061.6759%2016.3728%2060.8481%2017.7249C60.0479%2019.0494%2058.9441%2020.0704%2057.5368%2020.7878C56.1295%2021.5053%2054.5429%2021.7013%2052.7769%2021.7013Z'%20fill='%231BAF80'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.963%200.5H96.0884L100.963%2011.2465V0.5ZM80.1356%202.57102V3.89407L80.1408%203.88729V6.96543L80.1356%206.96169C79.438%206.4578%2078.6469%206.03334%2077.7621%205.68831C77.0538%205.39084%2076.2169%205.21215%2075.2515%205.15224V0.546803C76.2852%200.637841%2077.1624%200.861702%2077.883%201.21838C78.8742%201.69569%2079.625%202.14657%2080.1356%202.57102ZM80.1356%2015.3104V19.7013C79.625%2020.1521%2078.8742%2020.6029%2077.883%2021.0537C77.1624%2021.3707%2076.2852%2021.5697%2075.2515%2021.6506V17.1214C76.2169%2017.0658%2077.0538%2016.8999%2077.7621%2016.6236C78.6469%2016.2521%2079.438%2015.8143%2080.1356%2015.3104ZM62.1889%2010.2137V12.9356C62.1867%2014.7793%2061.6743%2016.3757%2060.8483%2017.7249C60.6535%2018.0473%2060.4408%2018.3516%2060.21%2018.6381C60.1771%2018.6054%2060.1443%2018.5725%2060.1117%2018.5393C59.1441%2017.5549%2058.3915%2016.4374%2057.854%2015.1869C57.3433%2013.9098%2057.0879%2012.5661%2057.0879%2011.156C57.0879%209.74582%2057.3433%208.40218%2057.854%207.12506C58.3915%205.84794%2059.1441%204.71716%2060.1117%203.73271C60.7368%203.07956%2061.4292%202.52079%2062.1889%202.0564V10.2137ZM37.1232%202.15129C37.7798%202.56519%2038.3853%203.05242%2038.9396%203.61297C39.9394%204.57081%2040.7023%205.68829%2041.2285%206.96541C41.781%208.24253%2042.0573%209.62608%2042.0573%2011.1161C42.0573%2012.5794%2041.781%2013.963%2041.2285%2015.2667C40.7023%2016.5438%2039.9394%2017.6613%2038.9396%2018.6191C38.8841%2018.6737%2038.8282%2018.7276%2038.7717%2018.7809C38.5919%2018.5484%2038.4223%2018.3047%2038.263%2018.0498C37.4628%2016.6977%2037.1229%2015.0972%2037.1229%2013.2484L37.1229%2011.27C37.1238%2011.219%2037.1242%2011.1677%2037.1242%2011.1161C37.1242%2011.0635%2037.1238%2011.0113%2037.1229%2010.9593L37.1232%202.15129ZM18.9677%208.09644L22.4743%200.6061C21.5675%200.734183%2020.6989%200.978167%2019.8686%201.33805C18.6057%201.87019%2017.4876%202.62848%2016.5141%203.61292C15.5407%204.57076%2014.7777%205.68824%2014.2252%206.96536C13.6727%208.24249%2013.3965%209.62603%2013.3965%2011.116C13.3965%2012.5794%2013.6727%2013.9629%2014.2252%2015.2666C14.4375%2015.7573%2014.6808%2016.2243%2014.9552%2016.6678L18.8668%208.31197C18.899%208.23913%2018.9327%208.16729%2018.9677%208.09644Z'%20fill='%231BAF80'/%3e%3c/svg%3e";

const clockIcon = "data:image/svg+xml,%3csvg%20width='45'%20height='45'%20viewBox='0%200%2045%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='22.5'%20cy='22.5'%20r='22.5'%20fill='%23B3F4DD'/%3e%3ccircle%20opacity='0.8'%20cx='22.7492'%20cy='22.701'%20r='11.4169'%20fill='white'%20stroke='%23135848'%20stroke-width='0.992771'/%3e%3cpath%20d='M22.748%2016.9884V20.8619'%20stroke='%23135848'%20stroke-width='0.992771'%20stroke-linecap='square'/%3e%3cpath%20d='M22.8682%2013.4619V11.9796M27.5199%2014.7096L28.2602%2013.4259M13.5288%2017.3774L14.8111%2018.1186M31.0602%2027.432L32.2075%2027.9571M18.2164%2014.7096L17.4761%2013.4259M14.8111%2027.432L13.5288%2028.1731M32.2075%2017.3774L30.9252%2018.1186M13.5646%2022.7753H12.084M33.6523%2022.7753H32.1717M22.8682%2033.5709V32.0887M17.4761%2032.1244L18.2164%2030.8408'%20stroke='%231BCF96'%20stroke-width='0.992771'%20stroke-linecap='square'/%3e%3cpath%20d='M28.2346%2032.1572L27.4961%2031.0726'%20stroke='%231BCF96'%20stroke-width='0.992771'%20stroke-linecap='square'/%3e%3cpath%20d='M27.499%2022.7034H24.6211'%20stroke='%23135848'%20stroke-width='0.992771'%20stroke-linecap='square'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31.4624%2011.0514C32.3603%2011.7556%2033.1708%2012.5661%2033.8748%2013.4641L35.1717%2012.1672C35.5034%2011.8355%2035.5034%2011.2927%2035.1717%2010.9609L33.9654%209.75467C33.6337%209.42292%2033.0909%209.42292%2032.7591%209.75467L31.4624%2011.0514ZM11.6237%2013.4639C12.3278%2012.5661%2013.1383%2011.7556%2014.0363%2011.0515L12.7395%209.75467C12.4077%209.42292%2011.8649%209.42292%2011.5332%209.75467L10.3269%2010.961C9.99519%2011.2927%209.99519%2011.8355%2010.3269%2012.1673L11.6237%2013.4639Z'%20fill='%231BCF96'%20stroke='%23135848'%20stroke-width='0.992771'/%3e%3ccircle%20cx='22.7492'%20cy='22.701'%20r='11.4169'%20stroke='%23135848'%20stroke-width='0.992771'/%3e%3cmask%20id='path-9-inside-1_909_1654'%20fill='white'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.749%2037.5955C30.9734%2037.5955%2037.6405%2030.9283%2037.6405%2022.7039C37.6405%2014.4796%2030.9734%207.81238%2022.749%207.81238C14.5246%207.81238%207.85742%2014.4796%207.85742%2022.7039C7.85742%2030.9283%2014.5246%2037.5955%2022.749%2037.5955ZM22.7489%2033.6241C28.7801%2033.6241%2033.6694%2028.7348%2033.6694%2022.7036C33.6694%2016.6724%2028.7801%2011.7831%2022.7489%2011.7831C16.7177%2011.7831%2011.8284%2016.6724%2011.8284%2022.7036C11.8284%2028.7348%2016.7177%2033.6241%2022.7489%2033.6241Z'/%3e%3c/mask%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.749%2037.5955C30.9734%2037.5955%2037.6405%2030.9283%2037.6405%2022.7039C37.6405%2014.4796%2030.9734%207.81238%2022.749%207.81238C14.5246%207.81238%207.85742%2014.4796%207.85742%2022.7039C7.85742%2030.9283%2014.5246%2037.5955%2022.749%2037.5955ZM22.7489%2033.6241C28.7801%2033.6241%2033.6694%2028.7348%2033.6694%2022.7036C33.6694%2016.6724%2028.7801%2011.7831%2022.7489%2011.7831C16.7177%2011.7831%2011.8284%2016.6724%2011.8284%2022.7036C11.8284%2028.7348%2016.7177%2033.6241%2022.7489%2033.6241Z'%20fill='%23B3F4DD'/%3e%3cpath%20d='M36.6478%2022.7039C36.6478%2030.38%2030.4251%2036.6027%2022.749%2036.6027V38.5883C31.5217%2038.5883%2038.6333%2031.4766%2038.6333%2022.7039H36.6478ZM22.749%208.80515C30.4251%208.80515%2036.6478%2015.0278%2036.6478%2022.7039H38.6333C38.6333%2013.9313%2031.5217%206.81961%2022.749%206.81961V8.80515ZM8.85019%2022.7039C8.85019%2015.0278%2015.0729%208.80515%2022.749%208.80515V6.81961C13.9763%206.81961%206.86465%2013.9313%206.86465%2022.7039H8.85019ZM22.749%2036.6027C15.0729%2036.6027%208.85019%2030.38%208.85019%2022.7039H6.86465C6.86465%2031.4766%2013.9763%2038.5883%2022.749%2038.5883V36.6027ZM32.6766%2022.7036C32.6766%2028.1865%2028.2318%2032.6313%2022.7489%2032.6313V34.6169C29.3284%2034.6169%2034.6622%2029.2831%2034.6622%2022.7036H32.6766ZM22.7489%2012.7759C28.2318%2012.7759%2032.6766%2017.2207%2032.6766%2022.7036H34.6622C34.6622%2016.1241%2029.3284%2010.7904%2022.7489%2010.7904V12.7759ZM12.8212%2022.7036C12.8212%2017.2207%2017.266%2012.7759%2022.7489%2012.7759V10.7904C16.1694%2010.7904%2010.8357%2016.1241%2010.8357%2022.7036H12.8212ZM22.7489%2032.6313C17.266%2032.6313%2012.8212%2028.1865%2012.8212%2022.7036H10.8357C10.8357%2029.2831%2016.1694%2034.6169%2022.7489%2034.6169V32.6313Z'%20fill='%23135848'%20mask='url(%23path-9-inside-1_909_1654)'/%3e%3cpath%20d='M22.7494%2024.5255C23.7566%2024.5255%2024.5732%2023.7089%2024.5732%2022.7016C24.5732%2021.6943%2023.7566%2020.8778%2022.7494%2020.8778C21.7421%2020.8778%2020.9255%2021.6943%2020.9255%2022.7016C20.9255%2023.7089%2021.7421%2024.5255%2022.7494%2024.5255Z'%20fill='%231BCF96'%20stroke='%23135848'%20stroke-width='0.992771'/%3e%3c/svg%3e";

const overlayStyles = "@import url(\"https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap\");\n\n.vouch-processing {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100svh;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  padding: 16px;\n  backdrop-filter: blur(6px);\n  font-family:\n    \"Sora\",\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    Roboto,\n    sans-serif;\n}\n\n#vouch-processing-overlay {\n  user-select: none;\n}\n\n.vouch-processing .modal-container {\n  display: flex;\n  width: 100%;\n  max-width: 500px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  border-radius: 28px;\n  padding: 24px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n\n.vouch-processing .spinner {\n  width: 40px;\n  height: 40px;\n  border: 5px solid rgba(27, 175, 128, 0.2);\n  border-top-color: #1baf80;\n  border-radius: 50%;\n  animation: vouch-spin 1s linear infinite;\n}\n\n.vouch-processing .message-container {\n  margin-top: 20px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  gap: 6px;\n}\n\n#vouch-processing-message .vouch-processing .message-container {\n  flex-direction: column;\n  gap: 10px;\n}\n\n.vouch-processing .logo {\n  height: 13px;\n  width: auto;\n}\n\n.vouch-processing .message {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n}\n\n.vouch-processing .message-header {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n}\n\n#vouch-processing-message .vouch-processing .message-header {\n  font-size: 18px;\n}\n\n.vouch-processing .message-text {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.vouch-processing .info-box {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5faf9;\n  padding: 12px;\n}\n\n.vouch-processing .info-icon {\n  width: 45px;\n  height: 45px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.vouch-processing .info-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.vouch-processing .info-title {\n  font-weight: 700;\n  color: #3a4341;\n  font-size: 16px;\n  margin-bottom: 2px;\n}\n\n.vouch-processing .info-description {\n  font-size: 14px;\n  color: #3a4341;\n}\n\n.vouch-processing .modal-button {\n  background-color: rgb(19, 88, 72);\n  color: rgb(255, 255, 255);\n  min-width: 200px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 16px;\n  border-radius: 12px;\n  padding: 12px 40px;\n  border-width: initial;\n  border-style: none;\n  border-color: initial;\n  border-image: initial;\n  transition: 0.3s;\n}\n\n.vouch-processing .modal-button:hover {\n  transform: scale(1.1);\n}\n\n@keyframes vouch-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";

function div(attributes, ...child) {
  return appendChild("div", attributes, child);
}
function dialog(attributes, ...child) {
  return appendChild("dialog", attributes, child);
}
function form(attributes, ...child) {
  return appendChild("form", attributes, child);
}
function button(attributes) {
  return appendChild("button", attributes);
}
function img(attributes) {
  return appendChild("img", attributes);
}
function style(attributes) {
  return appendChild("style", attributes);
}
function appendChild(type, attributes, child = []) {
  const element = document.createElement(type);
  Object.entries(attributes).forEach(([key, value]) => {
    element[key] = value;
  });
  child.filter((c) => !!c).forEach((c) => element.appendChild(c));
  return element;
}
function injectCss(styleId) {
  if (!document.getElementById(styleId)) {
    document.head.appendChild(
      style({
        id: styleId,
        textContent: overlayStyles
      })
    );
  }
}

const OVERLAY_ID = "vouch-processing-overlay";
function createOverlay({
  text,
  withVouchLogo = false
} = {}) {
  if (document.getElementById(OVERLAY_ID)) {
    return;
  }
  injectCss(`${OVERLAY_ID}-style`);
  const overlay = div(
    { id: OVERLAY_ID, className: "vouch-processing" },
    div(
      { className: "modal-container" },
      div({ className: "spinner" }),
      div(
        { className: "message-container" },
        withVouchLogo && img({ className: "logo", alt: "Vouch", src: logo }),
        div({
          className: "message",
          textContent: text ?? "Please wait, fetching relevant information..."
        })
      ),
      div(
        { className: "info-box" },
        img({ className: "info-icon", alt: "Clock icon", src: clockIcon }),
        div(
          { className: "info-content" },
          div({ className: "info-title", textContent: "Keep this tab open." }),
          div({
            className: "info-description",
            textContent: "Your verification runs securely in the background."
          })
        )
      )
    )
  );
  document.body.appendChild(overlay);
}
function removeOverlay() {
  const overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

const MESSAGE_ID = "vouch-processing-message";
function showMessage({
  header,
  message,
  confirmation,
  withVouchLogo = false
}) {
  if (document.getElementById(MESSAGE_ID)) {
    return;
  }
  injectCss(`${MESSAGE_ID}-style`);
  const messageDialog = dialog(
    { id: MESSAGE_ID, open: true },
    div(
      { className: "vouch-processing" },
      div(
        { className: "modal-container" },
        withVouchLogo && img({ className: "logo", alt: "Vouch", src: logo }),
        div(
          { className: "message-container" },
          Boolean(header?.length) && div({
            className: "message-header",
            textContent: header
          }),
          div({
            className: "message-text",
            textContent: message
          })
        ),
        form(
          { method: "dialog" },
          button({
            className: "modal-button",
            textContent: confirmation ?? "OK"
          })
        )
      )
    )
  );
  document.body.appendChild(messageDialog);
}
function hideMessage() {
  const message = document.getElementById(MESSAGE_ID);
  if (message) {
    message.remove();
  }
}

async function waitQuerySelectorAll(selector, timeout = 5e3, interval = 100) {
  let counter = 0;
  while (counter++ < timeout / interval) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      return Array.from(elements);
    }
    await sleep(interval);
  }
  throw new Error(
    `Element with selector "${selector}" not found within ${timeout.toString()}ms`
  );
}
async function waitFor(predicate, timeout = 5e3, interval = 100) {
  const waitUntil = Date.now() + timeout;
  while (Date.now() < waitUntil) {
    if (await predicate()) {
      return;
    }
    await sleep(interval);
  }
  throw new Error(`Condition not met within ${timeout.toString()}ms`);
}
function reuploadAttachment(attachment) {
  const event = {
    type: "ReuploadAttachment",
    payload: attachment
  };
  window.sendEvent(event);
}
function openProcessingOverlay(options) {
  createOverlay(options);
}
function closeProcessingOverlay() {
  removeOverlay();
}
function displayMessage(options) {
  showMessage(options);
}
function closeMessage() {
  hideMessage();
}
function splitFirst(str, separator) {
  const index = str.indexOf(separator);
  if (index === -1) return [str];
  return [str.slice(0, index), str.slice(index + separator.length)];
}
function globToUrlPattern(globUrl) {
  const globWithoutProtocol = globUrl.replace(/^.*:\/\//, "").replace(/^www\./, "");
  const hostEnd = /[/#]/.exec(globWithoutProtocol)?.index ?? globWithoutProtocol.length;
  const hostname = `(www.)?${globWithoutProtocol.slice(0, hostEnd)}`;
  let pathname = globWithoutProtocol.slice(hostEnd) || void 0;
  if (!pathname && hostname.endsWith("*")) {
    pathname = "*";
  } else {
    pathname ??= "/";
  }
  let search;
  let hash;
  if (pathname) {
    [pathname, search] = splitFirst(pathname, "?");
  } else {
    [, search] = splitFirst(globWithoutProtocol, "?");
  }
  if (search) {
    [search, hash] = splitFirst(search, "#");
  } else if (pathname) {
    [pathname, hash] = splitFirst(pathname, "#");
  } else {
    [, hash] = splitFirst(globWithoutProtocol, "#");
  }
  return new URLPattern({
    hostname,
    pathname,
    search,
    hash
  });
}
async function within(urlGlobs, callback) {
  const isWithin = (typeof urlGlobs === "string" ? [urlGlobs] : urlGlobs).map(globToUrlPattern).some((pattern) => pattern.test(window.location.href));
  if (isWithin) {
    await callback();
    return true;
  }
  return false;
}

//
//  Listener.js
//  Vlayer
//
//  Created by Krzysztof Moczała on 04/02/2025.
//

var setCacheKeyHeader = function () {
  //function for Android request body matching
  //no-op for others
};

var xmlhttprequest_open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
  const [method, url] = arguments;
  this.method = method;
  this.requestURL = url;

  this.headers = [];
  return xmlhttprequest_open.apply(this, arguments);
};

var xmlhttprequest_setRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
XMLHttpRequest.prototype.setRequestHeader = function (...args) {
  this.headers.push(args);
  return xmlhttprequest_setRequestHeader.apply(this, args);
};

var xmlhttprequest_send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (...args) {
  const self = this;
  const startDateUTC = new Date().toUTCString();
  let url = self.requestURL;
  url = addHostIfMissing(url);
  const method = self.method;
  setCacheKeyHeader(self);
  var headers = self.headers;
  headers.push(["user-agent", navigator.userAgent]);
  try {
    headers.push(["origin", new URL(url).origin]);
  } catch (e) {
    // skip origin if URL parsing fails
  }
  headers.push(["accept-language", getAcceptLanguageHeader()]);
  var message = {
    type: "request_start",
    url: url,
    startDate: startDateUTC,
    method: method,
    arguments: args,
    headers: headers,
  };
  window.sendEvent(message);

  this.addEventListener("loadend", () => {
    const url = self.responseURL;
    const status = self.status;
    const response = self.response;
    const responseHeaders = self.getAllResponseHeaders();

    var message = {
      type: "request",
      status: status,
      url: url,
      startDate: startDateUTC,
      method: method,
      arguments: args,
      headers: headers,
      response: response,
      responseHeaders: parseResponseHeaders(responseHeaders),
    };
    window.sendEvent(message);
  });

  return xmlhttprequest_send.apply(this, args);
};

const originalFetch = window.fetch;
window.fetch = async function (input, init = {}) {
  const startDateUTC = new Date().toUTCString();
  let url = typeof input === "string" ? input : input.url;
  url = addHostIfMissing(url);
  let method = init.method || "GET";
  let headers = new Headers(init.headers || {});
  setCacheKeyHeader(headers);
  // Assign copy to avoid adding sniff-only headers
  init.headers = Object.fromEntries(headers.entries());

  headers.set("user-agent", navigator.userAgent);
  headers.set("accept-language", getAcceptLanguageHeader());
  try {
    headers.set("origin", new URL(url).origin);
  } catch (e) {
    // skip origin if URL parsing fails
  }

  let args = init && init.body ? [init.body] : [];
  var message = {
    type: "request_start",
    url: url,
    startDate: startDateUTC,
    method: method,
    arguments: args,
    headers: Array.from(headers.entries()),
  };
  window.sendEvent(message);

  try {
    const response = await originalFetch(input, init);
    const status = response.status;
    let responseHeaders = [];
    response.headers.forEach((value, key) => {
      responseHeaders.push([key, value]);
    });
    const cloned = response.clone();
    const respText = await cloned.text();

    var message = {
      type: "request",
      status: status,
      url: url,
      startDate: startDateUTC,
      method: method,
      arguments: args,
      headers: Array.from(headers.entries()),
      response: respText,
      responseHeaders: responseHeaders,
    };
    window.sendEvent(message);
    return response;
  } catch (error) {
    var message = {
      type: "request",
      status: 500,
      url: url,
      startDate: startDateUTC,
      method: method,
      arguments: args,
      headers: Array.from(headers.entries()),
      response: error.toString(),
      responseHeaders: [],
    };
    window.sendEvent(message);
    throw error;
  }
};

function getAcceptLanguageHeader() {
  const languages = navigator.languages;
  var header = "";
  var quality = 1;
  for (var i = 0; i < languages.length; i++) {
    const language = languages[i];
    if (i > 0) {
      header += ",";
    }
    header += language;
    if (quality < 1) {
      header += ";q=" + quality.toFixed(1);
    }
    quality -= 0.1;
    if (language.indexOf("-") > -1) {
      header += ",";
      header += language.split("-")[0];
      header += ";q=" + quality.toFixed(1);
      quality -= 0.1;
    }
  }
  return header;
}

function parseResponseHeaders(headers) {
  return headers.split("\r\n").map((header) => {
    const idx = header.indexOf(": ");
    if (idx === -1) {
      return ["", ""];
    }
    return [header.slice(0, idx), header.slice(idx + 2)];
  });
}

const original_websocket_send = WebSocket.prototype.send;
const NativeWebSocket = window.WebSocket;

window.WebSocket = function (...args) {
  const url = args[0];
  const messages = [];

  const nativeWebSocket = new NativeWebSocket(...args);

  nativeWebSocket.send = function (...args) {
    addMessage(true, args[0]);
    return original_websocket_send.apply(this, args);
  };

  nativeWebSocket.addEventListener("message", (message) => {
    addMessage(false, message.data);
  });

  nativeWebSocket.addEventListener("open", (_) => {
    sendMessageEvent();
  });

  nativeWebSocket.addEventListener("error", (error) => {
    console.log("WebSocket error:", error);
  });

  nativeWebSocket.addEventListener("close", (_) => {
    messages.push({ type: "close" });
    sendMessageEvent();
  });

  async function addMessage(isSent, data) {
    let type = getMessageType(isSent, data);

    if (data instanceof Blob) {
      messages.push({ type: type, data: await blobToBase64(data) });
    } else {
      messages.push({ type: type, data: data });
    }
    sendMessageEvent();
  }

  function getMessageType(isSent, data) {
    if (data instanceof Blob) {
      return isSent ? "sent_binary" : "received_binary";
    } else {
      return isSent ? "sent_text" : "received_text";
    }
  }

  function sendMessageEvent() {
    var message = {
      type: "websocket_message",
      url: url,
      messages: messages,
    };
    window.sendEvent(message);
  }

  return nativeWebSocket;
};

// Copy all static properties and methods from native WebSocket
Object.setPrototypeOf(window.WebSocket, NativeWebSocket);
window.WebSocket.prototype = NativeWebSocket.prototype;

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
    }
    return value;
  });
}

console.log = function (...args) {
  const logEvent = {
    type: "log",
    message: safeStringify(args),
  };
  window.sendEvent(logEvent);
};

function displayInstruction(body) {
  const event = {
    type: "instruction",
    message: body.message,
    imageUrl: body.imageUrl,
  };
  window.sendEvent(event);
}

document.addEventListener(
  "submit",
  function (event) {
    const form = event.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const formEvent = {
      type: "form_submit",
      action: form.action || window.location.href,
      method: (form.method || "GET").toUpperCase(),
      formId: form.id || null,
      formName: form.name || null,
      values: formValues,
      timestamp: new Date().toUTCString(),
    };

    window.sendEvent(formEvent);
  },
  true,
);

function addHostIfMissing(url) {
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) {
    return window.location.origin + (url.startsWith("/") ? "" : "/") + url;
  }
  return url;
}
