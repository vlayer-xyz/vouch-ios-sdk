'use strict';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const logo = "data:image/svg+xml,%3csvg%20width='101'%20height='22'%20viewBox='0%200%20101%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.61218%2021.6922L0%200.5H5.67663L11.2774%2014.1236L16.8782%200.5H22.5241L12.6032%2021.6922H9.61218ZM27.3368%2020.894C28.6259%2021.4261%2030.0072%2021.6922%2031.4805%2021.6922C32.9275%2021.6922%2034.2824%2021.4261%2035.5453%2020.894C36.8345%2020.3353%2037.9658%2019.577%2038.9392%2018.6191C39.939%2017.6613%2040.7019%2016.5438%2041.2281%2015.2667C41.7806%2013.963%2042.0569%2012.5794%2042.0569%2011.1161C42.0569%209.62609%2041.7806%208.24254%2041.2281%206.96542C40.7019%205.6883%2039.939%204.57082%2038.9392%203.61298C37.9658%202.62853%2036.8345%201.87024%2035.5453%201.33811C34.2824%200.77937%2032.9275%200.5%2031.4805%200.5C30.0072%200.5%2028.6259%200.77937%2027.3368%201.33811C26.0739%201.87024%2024.9558%202.62853%2023.9823%203.61298C23.0089%204.57082%2022.2459%205.6883%2021.6934%206.96542C21.1409%208.24254%2020.8647%209.62609%2020.8647%2011.1161C20.8647%2012.5794%2021.1409%2013.963%2021.6934%2015.2667C22.2459%2016.5438%2023.0089%2017.6613%2023.9823%2018.6191C24.9558%2019.577%2026.0739%2020.3353%2027.3368%2020.894ZM34.3219%2016.4241C33.48%2016.903%2032.5329%2017.1425%2031.4805%2017.1425C30.4544%2017.1425%2029.5073%2016.903%2028.6391%2016.4241C27.7709%2015.9186%2027.0737%2015.2135%2026.5475%2014.3089C26.0476%2013.4042%2025.7977%2012.34%2025.7977%2011.1161C25.7977%209.86555%2026.0476%208.78798%2026.5475%207.88335C27.0737%206.97872%2027.7709%206.28695%2028.6391%205.80803C29.5073%205.3025%2030.4544%205.04974%2031.4805%205.04974C32.5329%205.04974%2033.48%205.3025%2034.3219%205.80803C35.1901%206.28695%2035.8742%206.97872%2036.374%207.88335C36.8739%208.78798%2037.1239%209.86555%2037.1239%2011.1161C37.1239%2012.34%2036.8739%2013.4042%2036.374%2014.3089C35.8742%2015.2135%2035.1901%2015.9186%2034.3219%2016.4241ZM69.8997%2020.8541C71.1898%2021.4128%2072.6009%2021.6922%2074.133%2021.6922C75.6651%2021.6922%2076.9149%2021.4794%2077.8825%2021.0537C78.877%2020.6013%2079.6296%2020.149%2080.1403%2019.6967V15.3066C79.4414%2015.8121%2078.6485%2016.2512%2077.7616%2016.6236C76.8746%2016.9695%2075.786%2017.1425%2074.4958%2017.1425C73.3401%2017.1425%2072.3053%2016.8764%2071.3914%2016.3443C70.5044%2015.8121%2069.8056%2015.0938%2069.2949%2014.1891C68.7842%2013.2845%2068.5289%2012.2735%2068.5289%2011.156C68.5289%2010.0119%2068.7842%208.98753%2069.2949%208.0829C69.8325%207.17828%2070.5582%206.45989%2071.4721%205.92776C72.3859%205.39563%2073.3938%205.12956%2074.4958%205.12956C75.786%205.12956%2076.8746%205.31581%2077.7616%205.6883C78.6485%206.03419%2079.4414%206.4599%2080.1403%206.96542V2.57532C79.6296%202.14961%2078.877%201.6973%2077.8825%201.21838C76.9149%200.73946%2075.6651%200.5%2074.133%200.5C72.6009%200.5%2071.1898%200.792673%2069.8997%201.37802C68.6095%201.93676%2067.4807%202.72166%2066.513%203.73271C65.5454%204.71716%2064.7928%205.84794%2064.2553%207.12506C63.7446%208.40218%2063.4892%209.74582%2063.4892%2011.156C63.4892%2012.5661%2063.7446%2013.9098%2064.2553%2015.1869C64.7928%2016.4374%2065.5454%2017.5549%2066.513%2018.5393C67.4807%2019.5238%2068.6095%2020.2954%2069.8997%2020.8541ZM81.6528%200.5V21.6922H86.537V14.1236H96.0784V21.6922H100.963V0.5H96.0784V9.58238H86.537V0.5H81.6528ZM52.7769%2021.7013C50.9832%2021.7013%2049.3828%2021.5053%2047.9755%2020.7878C46.5958%2020.0704%2045.492%2019.0494%2044.6642%2017.7249C43.864%2016.3728%2043.5241%2014.7723%2043.5241%2012.9235L43.5244%200.5H48.4308V12.1785C48.4308%2013.8065%2048.8447%2015.0483%2049.6725%2015.9037C50.5003%2016.7315%2051.5351%2017.1454%2052.7769%2017.1454C54.0186%2017.1454%2055.0396%2016.7315%2055.8398%2015.9037C56.6676%2015.0483%2057.0815%2013.8065%2057.0815%2012.1785V0.5H62.1887V12.9235C62.1887%2014.7723%2061.6759%2016.3728%2060.8481%2017.7249C60.0479%2019.0494%2058.9441%2020.0704%2057.5368%2020.7878C56.1295%2021.5053%2054.5429%2021.7013%2052.7769%2021.7013Z'%20fill='%231BAF80'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.963%200.5H96.0884L100.963%2011.2465V0.5ZM80.1356%202.57102V3.89407L80.1408%203.88729V6.96543L80.1356%206.96169C79.438%206.4578%2078.6469%206.03334%2077.7621%205.68831C77.0538%205.39084%2076.2169%205.21215%2075.2515%205.15224V0.546803C76.2852%200.637841%2077.1624%200.861702%2077.883%201.21838C78.8742%201.69569%2079.625%202.14657%2080.1356%202.57102ZM80.1356%2015.3104V19.7013C79.625%2020.1521%2078.8742%2020.6029%2077.883%2021.0537C77.1624%2021.3707%2076.2852%2021.5697%2075.2515%2021.6506V17.1214C76.2169%2017.0658%2077.0538%2016.8999%2077.7621%2016.6236C78.6469%2016.2521%2079.438%2015.8143%2080.1356%2015.3104ZM62.1889%2010.2137V12.9356C62.1867%2014.7793%2061.6743%2016.3757%2060.8483%2017.7249C60.6535%2018.0473%2060.4408%2018.3516%2060.21%2018.6381C60.1771%2018.6054%2060.1443%2018.5725%2060.1117%2018.5393C59.1441%2017.5549%2058.3915%2016.4374%2057.854%2015.1869C57.3433%2013.9098%2057.0879%2012.5661%2057.0879%2011.156C57.0879%209.74582%2057.3433%208.40218%2057.854%207.12506C58.3915%205.84794%2059.1441%204.71716%2060.1117%203.73271C60.7368%203.07956%2061.4292%202.52079%2062.1889%202.0564V10.2137ZM37.1232%202.15129C37.7798%202.56519%2038.3853%203.05242%2038.9396%203.61297C39.9394%204.57081%2040.7023%205.68829%2041.2285%206.96541C41.781%208.24253%2042.0573%209.62608%2042.0573%2011.1161C42.0573%2012.5794%2041.781%2013.963%2041.2285%2015.2667C40.7023%2016.5438%2039.9394%2017.6613%2038.9396%2018.6191C38.8841%2018.6737%2038.8282%2018.7276%2038.7717%2018.7809C38.5919%2018.5484%2038.4223%2018.3047%2038.263%2018.0498C37.4628%2016.6977%2037.1229%2015.0972%2037.1229%2013.2484L37.1229%2011.27C37.1238%2011.219%2037.1242%2011.1677%2037.1242%2011.1161C37.1242%2011.0635%2037.1238%2011.0113%2037.1229%2010.9593L37.1232%202.15129ZM18.9677%208.09644L22.4743%200.6061C21.5675%200.734183%2020.6989%200.978167%2019.8686%201.33805C18.6057%201.87019%2017.4876%202.62848%2016.5141%203.61292C15.5407%204.57076%2014.7777%205.68824%2014.2252%206.96536C13.6727%208.24249%2013.3965%209.62603%2013.3965%2011.116C13.3965%2012.5794%2013.6727%2013.9629%2014.2252%2015.2666C14.4375%2015.7573%2014.6808%2016.2243%2014.9552%2016.6678L18.8668%208.31197C18.899%208.23913%2018.9327%208.16729%2018.9677%208.09644Z'%20fill='%231BAF80'/%3e%3c/svg%3e";

const overlayStyles = "@import url(\"https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap\");\n\n.vouch-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100svh;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  padding: 16px;\n  backdrop-filter: blur(6px);\n  font-family:\n    \"Sora\",\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    Roboto,\n    sans-serif;\n  user-select: none;\n}\n\n.vouch-overlay .vouch-modal-container {\n  display: flex;\n  width: 100%;\n  max-width: 500px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  border-radius: 28px;\n  padding: 24px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n\n.vouch-overlay .vouch-modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n\n.vouch-overlay .vouch-modal-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vouch-overlay .vouch-modal-icon img {\n  width: 70px;\n  height: 65px;\n}\n\n.vouch-overlay .vouch-modal-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n}\n\n.vouch-overlay .vouch-modal-title-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n}\n\n.vouch-overlay .vouch-logo {\n  height: 13px;\n  width: auto;\n}\n\n.vouch-overlay .vouch-modal-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n}\n\n.vouch-overlay .vouch-modal-subtitle {\n  font-size: 14px;\n  font-weight: 400;\n  color: #5a706c;\n  line-height: 1.5;\n}\n\n.vouch-overlay .vouch-modal-bottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.vouch-overlay .vouch-modal-button {\n  background-color: var(--vouch-customer-brand, #1baf80);\n  color: var(--vouch-customer-brand-text, #ffffff);\n  min-width: 200px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 12px 40px;\n  border: none;\n  transition: 0.3s;\n}\n\n.vouch-overlay .vouch-modal-button:hover {\n  transform: scale(1.05);\n}\n\n.vouch-overlay .vouch-button-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n}\n\n.vouch-overlay .vouch-button-container .vouch-modal-button {\n  width: 100%;\n}\n\n.vouch-overlay .vouch-progress-text-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 56px;\n  line-height: 120%;\n  font-weight: 700;\n}\n\n.vouch-overlay .vouch-progress-text-background {\n  color: #d4d4d4;\n}\n\n.vouch-overlay .vouch-progress-text-fill {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  line-height: 120%;\n  color: var(--vouch-customer-brand, #1baf80);\n  transition: clip-path 0.3s ease;\n  clip-path: inset(90% 0 0 0);\n}\n\n.vouch-overlay .vouch-info-box {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  background-color: #f5faf9;\n  padding: 12px;\n}\n\n.vouch-overlay .vouch-info-icon {\n  width: 45px;\n  height: 45px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.vouch-overlay .vouch-info-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.vouch-overlay .vouch-info-title {\n  font-weight: 700;\n  color: #3a4341;\n  font-size: 16px;\n  margin-bottom: 2px;\n}\n\n.vouch-overlay .vouch-info-description {\n  font-size: 14px;\n  color: #3a4341;\n}\n\n.vouch-overlay .vouch-hint {\n  font-size: 12px;\n  color: #5a706c;\n  text-align: center;\n  margin-top: 16px;\n}\n";

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

const uploadIconRaw = "<svg width=\"70\" height=\"65\" viewBox=\"0 0 70 65\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"48\" height=\"48\" rx=\"6\" fill=\"#1BAF80\"/>\n<foreignObject x=\"13\" y=\"8\" width=\"64\" height=\"64\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(3.5px);clip-path:url(#bgblur_0_5542_1770_clip_path);height:100%;width:100%\"></div></foreignObject><g filter=\"url(#filter0_ii_5542_1770)\" data-figma-bg-blur-radius=\"7\">\n<circle cx=\"45\" cy=\"40\" r=\"25\" fill=\"url(#paint0_linear_5542_1770)\" fill-opacity=\"0.3\"/>\n</g>\n<path d=\"M54 43V47C54 47.5304 53.7893 48.0391 53.4142 48.4142C53.0391 48.7893 52.5304 49 52 49H38C37.4696 49 36.9609 48.7893 36.5858 48.4142C36.2107 48.0391 36 47.5304 36 47V43M50 36L45 31M45 31L40 36M45 31V43\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<foreignObject x=\"-10\" y=\"-15\" width=\"110\" height=\"110\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(15px);height:100%;width:100%\"></div></foreignObject><circle data-figma-bg-blur-radius=\"30\" cx=\"45\" cy=\"40\" r=\"24.75\" stroke=\"url(#paint1_linear_5542_1770)\" stroke-opacity=\"0.3\" stroke-width=\"0.5\"/>\n<defs>\n<filter id=\"filter0_ii_5542_1770\" x=\"13\" y=\"8\" width=\"64\" height=\"64\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-2\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow_5542_1770\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"1\"/>\n<feGaussianBlur stdDeviation=\"0.5\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"/>\n<feBlend mode=\"normal\" in2=\"effect1_innerShadow_5542_1770\" result=\"effect2_innerShadow_5542_1770\"/>\n</filter>\n<clipPath id=\"bgblur_0_5542_1770_clip_path\" transform=\"translate(-13 -8)\"><circle cx=\"45\" cy=\"40\" r=\"25\"/>\n</clipPath><linearGradient id=\"paint0_linear_5542_1770\" x1=\"25.6452\" y1=\"25.5581\" x2=\"59.8793\" y2=\"53.9208\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#9CFDFF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#56B0FF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E66FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_5542_1770\" x1=\"25.3506\" y1=\"19.6131\" x2=\"79.3189\" y2=\"47.5572\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5A81FF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#567DFF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E78FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n</defs>\n</svg>\n";

const errorIconRaw = "<svg width=\"70\" height=\"65\" viewBox=\"0 0 70 65\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<foreignObject x=\"-7.17188\" y=\"-7.17114\" width=\"62.3438\" height=\"62.3423\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(4px);clip-path:url(#bgblur_0_5542_1771_clip_path);height:100%;width:100%\"></div></foreignObject><g filter=\"url(#filter0_ii_5542_1771)\" data-figma-bg-blur-radius=\"8\">\n<path d=\"M1.41363 8.97368C0.632843 9.7547 0.632868 11.0207 1.41368 11.8017L12.2027 22.5932C12.9835 23.3742 12.9835 24.6402 12.2028 25.4212L1.42792 36.1993C0.647153 36.9803 0.647152 38.2463 1.42792 39.0273L8.98352 46.5851C9.76462 47.3665 11.0313 47.3665 11.8124 46.5852L22.5856 35.8087C23.3667 35.0274 24.6333 35.0274 25.4144 35.8087L36.1876 46.5852C36.9687 47.3665 38.2354 47.3665 39.0165 46.5852L46.5721 39.0272C47.3529 38.2463 47.3529 36.9803 46.5722 36.1993L35.7981 25.4212C35.0174 24.6402 35.0174 23.3742 35.7982 22.5932L46.5864 11.8017C47.3672 11.0207 47.3672 9.75474 46.5864 8.97374L39.0298 1.41485C38.2487 0.633516 36.982 0.633517 36.2009 1.41485L25.4144 12.2046C24.6333 12.9859 23.3667 12.9859 22.5856 12.2046L11.7991 1.41485C11.018 0.633515 9.75131 0.633517 8.97021 1.41485L1.41363 8.97368Z\" fill=\"#1BAF80\"/>\n</g>\n<foreignObject x=\"-29.1719\" y=\"-29.1711\" width=\"106.344\" height=\"106.342\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(15px);clip-path:url(#bgblur_1_5542_1771_clip_path);height:100%;width:100%\"></div></foreignObject><path data-figma-bg-blur-radius=\"30\" d=\"M1.41363 8.97368C0.632843 9.7547 0.632868 11.0207 1.41368 11.8017L12.2027 22.5932C12.9835 23.3742 12.9835 24.6402 12.2028 25.4212L1.42792 36.1993C0.647153 36.9803 0.647152 38.2463 1.42792 39.0273L8.98352 46.5851C9.76462 47.3665 11.0313 47.3665 11.8124 46.5852L22.5856 35.8087C23.3667 35.0274 24.6333 35.0274 25.4144 35.8087L36.1876 46.5852C36.9687 47.3665 38.2354 47.3665 39.0165 46.5852L46.5721 39.0272C47.3529 38.2463 47.3529 36.9803 46.5722 36.1993L35.7981 25.4212C35.0174 24.6402 35.0174 23.3742 35.7982 22.5932L46.5864 11.8017C47.3672 11.0207 47.3672 9.75474 46.5864 8.97374L39.0298 1.41485C38.2487 0.633516 36.982 0.633517 36.2009 1.41485L25.4144 12.2046C24.6333 12.9859 23.3667 12.9859 22.5856 12.2046L11.7991 1.41485C11.018 0.633515 9.75131 0.633517 8.97021 1.41485L1.41363 8.97368Z\" fill=\"#1BAF80\"/>\n<foreignObject x=\"13\" y=\"8\" width=\"64\" height=\"64\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(3.5px);clip-path:url(#bgblur_2_5542_1771_clip_path);height:100%;width:100%\"></div></foreignObject><g filter=\"url(#filter2_ii_5542_1771)\" data-figma-bg-blur-radius=\"7\">\n<circle cx=\"45\" cy=\"40\" r=\"25\" fill=\"url(#paint0_linear_5542_1771)\" fill-opacity=\"0.3\"/>\n</g>\n<path d=\"M54 43V47C54 47.5304 53.7893 48.0391 53.4142 48.4142C53.0391 48.7893 52.5304 49 52 49H38C37.4696 49 36.9609 48.7893 36.5858 48.4142C36.2107 48.0391 36 47.5304 36 47V43M50 36L45 31M45 31L40 36M45 31V43\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<foreignObject x=\"-10\" y=\"-15\" width=\"110\" height=\"110\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(15px);height:100%;width:100%\"></div></foreignObject><circle data-figma-bg-blur-radius=\"30\" cx=\"45\" cy=\"40\" r=\"24.75\" stroke=\"url(#paint1_linear_5542_1771)\" stroke-opacity=\"0.3\" stroke-width=\"0.5\"/>\n<defs>\n<filter id=\"filter0_ii_5542_1771\" x=\"-7.17188\" y=\"-7.17114\" width=\"62.3438\" height=\"62.3423\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-2\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow_5542_1771\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"1\"/>\n<feGaussianBlur stdDeviation=\"0.5\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"/>\n<feBlend mode=\"normal\" in2=\"effect1_innerShadow_5542_1771\" result=\"effect2_innerShadow_5542_1771\"/>\n</filter>\n<clipPath id=\"bgblur_0_5542_1771_clip_path\" transform=\"translate(7.17188 7.17114)\"><path d=\"M1.41363 8.97368C0.632843 9.7547 0.632868 11.0207 1.41368 11.8017L12.2027 22.5932C12.9835 23.3742 12.9835 24.6402 12.2028 25.4212L1.42792 36.1993C0.647153 36.9803 0.647152 38.2463 1.42792 39.0273L8.98352 46.5851C9.76462 47.3665 11.0313 47.3665 11.8124 46.5852L22.5856 35.8087C23.3667 35.0274 24.6333 35.0274 25.4144 35.8087L36.1876 46.5852C36.9687 47.3665 38.2354 47.3665 39.0165 46.5852L46.5721 39.0272C47.3529 38.2463 47.3529 36.9803 46.5722 36.1993L35.7981 25.4212C35.0174 24.6402 35.0174 23.3742 35.7982 22.5932L46.5864 11.8017C47.3672 11.0207 47.3672 9.75474 46.5864 8.97374L39.0298 1.41485C38.2487 0.633516 36.982 0.633517 36.2009 1.41485L25.4144 12.2046C24.6333 12.9859 23.3667 12.9859 22.5856 12.2046L11.7991 1.41485C11.018 0.633515 9.75131 0.633517 8.97021 1.41485L1.41363 8.97368Z\"/>\n</clipPath><clipPath id=\"bgblur_1_5542_1771_clip_path\" transform=\"translate(29.1719 29.1711)\"><path d=\"M1.41363 8.97368C0.632843 9.7547 0.632868 11.0207 1.41368 11.8017L12.2027 22.5932C12.9835 23.3742 12.9835 24.6402 12.2028 25.4212L1.42792 36.1993C0.647153 36.9803 0.647152 38.2463 1.42792 39.0273L8.98352 46.5851C9.76462 47.3665 11.0313 47.3665 11.8124 46.5852L22.5856 35.8087C23.3667 35.0274 24.6333 35.0274 25.4144 35.8087L36.1876 46.5852C36.9687 47.3665 38.2354 47.3665 39.0165 46.5852L46.5721 39.0272C47.3529 38.2463 47.3529 36.9803 46.5722 36.1993L35.7981 25.4212C35.0174 24.6402 35.0174 23.3742 35.7982 22.5932L46.5864 11.8017C47.3672 11.0207 47.3672 9.75474 46.5864 8.97374L39.0298 1.41485C38.2487 0.633516 36.982 0.633517 36.2009 1.41485L25.4144 12.2046C24.6333 12.9859 23.3667 12.9859 22.5856 12.2046L11.7991 1.41485C11.018 0.633515 9.75131 0.633517 8.97021 1.41485L1.41363 8.97368Z\"/>\n</clipPath><filter id=\"filter2_ii_5542_1771\" x=\"13\" y=\"8\" width=\"64\" height=\"64\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-2\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow_5542_1771\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"1\"/>\n<feGaussianBlur stdDeviation=\"0.5\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"/>\n<feBlend mode=\"normal\" in2=\"effect1_innerShadow_5542_1771\" result=\"effect2_innerShadow_5542_1771\"/>\n</filter>\n<clipPath id=\"bgblur_2_5542_1771_clip_path\" transform=\"translate(-13 -8)\"><circle cx=\"45\" cy=\"40\" r=\"25\"/>\n</clipPath><linearGradient id=\"paint0_linear_5542_1771\" x1=\"25.6452\" y1=\"25.5581\" x2=\"59.8793\" y2=\"53.9208\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#9CFDFF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#56B0FF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E66FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_5542_1771\" x1=\"25.3506\" y1=\"19.6131\" x2=\"79.3189\" y2=\"47.5572\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5A81FF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#567DFF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E78FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n</defs>\n</svg>\n";

const UploadEvents = {
  Start: "UploadStart",
  Progress: "UploadProgress",
  Complete: "UploadComplete",
  Error: "UploadError"
};
const UPLOAD_OVERLAY_ID = "vouch-upload-overlay";
const UPLOAD_TITLE = "Uploading your content";
const UPLOAD_SUBTITLE = "Please keep this tab open.";
const ERROR_TITLE = "Upload interrupted";
const ERROR_SUBTITLE = "We couldn't complete the upload. This is often caused by a temporary network issue.";
const ERROR_HINT = "Make sure you have a stable internet connection.";
function getUploadIcon() {
  return colorizeSvg(uploadIconRaw);
}
function getErrorIcon() {
  return colorizeSvg(errorIconRaw);
}
function createUploadOverlay() {
  removeProcessingOverlay();
  if (document.getElementById(UPLOAD_OVERLAY_ID)) {
    removeUploadOverlay();
  }
  injectCss(`${UPLOAD_OVERLAY_ID}-style`);
  const overlay = div(
    { id: UPLOAD_OVERLAY_ID, className: "vouch-overlay" },
    div(
      { className: "vouch-modal-container" },
      div(
        { className: "vouch-modal-content" },
        div(
          { className: "vouch-modal-icon" },
          img({
            alt: "Upload",
            src: getUploadIcon()
          })
        ),
        div(
          { className: "vouch-modal-text" },
          div({
            className: "vouch-modal-title",
            textContent: UPLOAD_TITLE
          }),
          div({
            className: "vouch-modal-subtitle",
            textContent: UPLOAD_SUBTITLE
          })
        ),
        div(
          { className: "vouch-modal-bottom" },
          div(
            { className: "vouch-progress-text-container" },
            div({
              className: "vouch-progress-text-background",
              textContent: "0%"
            }),
            div({ className: "vouch-progress-text-fill", textContent: "0%" })
          )
        )
      )
    )
  );
  document.body.appendChild(overlay);
}
function updateUploadProgress(progress) {
  const progressBackground = document.querySelector(
    `#${UPLOAD_OVERLAY_ID} .vouch-progress-text-background`
  );
  const progressFill = document.querySelector(
    `#${UPLOAD_OVERLAY_ID} .vouch-progress-text-fill`
  );
  const displayText = `${Math.round(progress).toString()}%`;
  const clipInset = 90 - progress * 0.8;
  if (progressBackground) {
    progressBackground.textContent = displayText;
  }
  if (progressFill) {
    progressFill.textContent = displayText;
    progressFill.style.clipPath = `inset(${clipInset.toString()}% 0 0 0)`;
  }
}
function removeUploadOverlay() {
  document.getElementById(UPLOAD_OVERLAY_ID)?.remove();
}
function transformUploadToErrorState() {
  const overlay = document.getElementById(UPLOAD_OVERLAY_ID);
  if (!overlay) return;
  const modalContainer = overlay.querySelector(".vouch-modal-container");
  if (!modalContainer) return;
  const errorContent = div(
    { className: "vouch-modal-container" },
    div(
      { className: "vouch-modal-content" },
      div(
        { className: "vouch-modal-icon" },
        img({
          alt: "Error",
          src: getErrorIcon()
        })
      ),
      div(
        { className: "vouch-modal-text" },
        div({
          className: "vouch-modal-title",
          textContent: ERROR_TITLE
        }),
        div({
          className: "vouch-modal-subtitle",
          textContent: ERROR_SUBTITLE
        })
      ),
      div(
        { className: "vouch-modal-bottom" },
        div(
          { className: "vouch-button-container" },
          createRetryButton("reupload")
        ),
        div({
          className: "vouch-hint",
          textContent: ERROR_HINT
        })
      )
    )
  );
  modalContainer.replaceWith(errorContent);
}
function setupUploadEventListeners() {
  window.addEventListener(UploadEvents.Start, (() => {
    createUploadOverlay();
  }));
  window.addEventListener(UploadEvents.Progress, ((e) => {
    updateUploadProgress(e.detail.progress);
  }));
  window.addEventListener(UploadEvents.Complete, (() => {
    removeUploadOverlay();
  }));
  window.addEventListener(UploadEvents.Error, (() => {
    transformUploadToErrorState();
  }));
}

function createRetryButton(type) {
  const btn = button({
    className: "vouch-modal-button",
    textContent: "Retry",
    type: "button"
  });
  btn.addEventListener("click", () => {
    window.sendEvent({
      type: type === "proving" ? "RetryProcessing" : "RetryReupload"
    });
    if (type === "proving") {
      removeProcessingOverlay();
    } else {
      removeUploadOverlay();
    }
  });
  return btn;
}
function createCancelButton() {
  const btn = button({
    className: "vouch-modal-button",
    textContent: "Cancel",
    type: "button"
  });
  btn.addEventListener("click", () => {
    window.sendEvent({
      type: "CancelProcessing"
    });
    removeProcessingOverlay();
  });
  return btn;
}
function getBrandColor() {
  return getComputedStyle(document.documentElement).getPropertyValue("--vouch-customer-brand").trim() || void 0;
}
function colorizeSvg(svg) {
  const color = getBrandColor();
  const coloredSvg = color ? svg.replace(/#1baf80/gi, color) : svg;
  return `data:image/svg+xml,${encodeURIComponent(coloredSvg)}`;
}

const timeoutIconRaw = "<svg width=\"69\" height=\"64\" viewBox=\"0 0 69 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M43.9698 0C45.0744 0 46.0075 0.89601 45.9169 1.99686C44.918 14.132 35.0392 27 23 27C10.9608 27 1.08201 14.132 0.0831156 1.99686C-0.00750014 0.896013 0.949357 0 2.05393 0C44.0624 0 18.0243 0 43.9698 0Z\" fill=\"#1BAF80\"/>\n<path d=\"M36.9892 10C38.0938 10 39.0157 10.9057 38.7599 11.9803C37.4452 17.5021 30.8894 23 23 23C15.1106 23 8.55483 17.5021 7.24013 11.9803C6.98429 10.9057 7.9267 10 9.03127 10C37.079 10 20.062 10 36.9892 10Z\" fill=\"#EBFFF7\"/>\n<path d=\"M2.03019 54C0.925625 54 -0.00749969 53.104 0.0831146 52.0031C1.08201 39.868 10.9608 27 23 27C35.0392 27 44.918 39.868 45.9169 52.0031C46.0075 53.104 45.0506 54 43.9461 54C1.93761 54 27.9757 54 2.03019 54Z\" fill=\"#1BAF80\"/>\n<path d=\"M9.01081 51C7.90623 51 7.09289 50.0452 7.85866 49.2492C10.0126 47.0102 15.978 45 23 45C30.022 45 35.9874 47.0102 38.1413 49.2492C38.9071 50.0452 38.0733 51 36.9687 51C8.92096 51 25.938 51 9.01081 51Z\" fill=\"#EBFFF7\"/>\n<foreignObject x=\"12\" y=\"7\" width=\"64\" height=\"64\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(3.5px);clip-path:url(#bgblur_0_5542_1769_clip_path);height:100%;width:100%\"></div></foreignObject><g filter=\"url(#filter0_ii_5542_1769)\" data-figma-bg-blur-radius=\"7\">\n<circle cx=\"44\" cy=\"39\" r=\"25\" fill=\"url(#paint0_linear_5542_1769)\" fill-opacity=\"0.3\"/>\n</g>\n<path d=\"M44.0005 36V40M44.0005 44H44.0105M53.7304 45.0002L45.7304 31.0002C45.556 30.6924 45.303 30.4364 44.9973 30.2583C44.6917 30.0802 44.3442 29.9863 43.9904 29.9863C43.6366 29.9863 43.2892 30.0802 42.9835 30.2583C42.6778 30.4364 42.4249 30.6924 42.2504 31.0002L34.2504 45.0002C34.0741 45.3056 33.9816 45.6521 33.9824 46.0047C33.9832 46.3573 34.0772 46.7035 34.2549 47.008C34.4325 47.3126 34.6876 47.5648 34.9941 47.7391C35.3007 47.9133 35.6478 48.0034 36.0004 48.0002H52.0004C52.3513 47.9999 52.6959 47.9072 52.9997 47.7315C53.3035 47.5558 53.5556 47.3033 53.7309 46.9993C53.9062 46.6954 53.9985 46.3506 53.9984 45.9997C53.9983 45.6488 53.9059 45.3041 53.7304 45.0002Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<foreignObject x=\"-11\" y=\"-16\" width=\"110\" height=\"110\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(15px);height:100%;width:100%\"></div></foreignObject><circle data-figma-bg-blur-radius=\"30\" cx=\"44\" cy=\"39\" r=\"24.75\" stroke=\"url(#paint1_linear_5542_1769)\" stroke-opacity=\"0.3\" stroke-width=\"0.5\"/>\n<defs>\n<filter id=\"filter0_ii_5542_1769\" x=\"12\" y=\"7\" width=\"64\" height=\"64\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-2\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow_5542_1769\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"1\"/>\n<feGaussianBlur stdDeviation=\"0.5\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"/>\n<feBlend mode=\"normal\" in2=\"effect1_innerShadow_5542_1769\" result=\"effect2_innerShadow_5542_1769\"/>\n</filter>\n<clipPath id=\"bgblur_0_5542_1769_clip_path\" transform=\"translate(-12 -7)\"><circle cx=\"44\" cy=\"39\" r=\"25\"/>\n</clipPath><linearGradient id=\"paint0_linear_5542_1769\" x1=\"24.6452\" y1=\"24.5581\" x2=\"58.8793\" y2=\"52.9208\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#9CFDFF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#56B0FF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E66FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_5542_1769\" x1=\"24.3506\" y1=\"18.6131\" x2=\"78.3189\" y2=\"46.5572\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5A81FF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#567DFF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E78FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n</defs>\n</svg>\n";

const processingIconRaw = "<svg width=\"70\" height=\"65\" viewBox=\"0 0 70 65\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"48\" height=\"48\" rx=\"6\" fill=\"#1BAF80\"/>\n<rect x=\"4.5\" y=\"10.5\" width=\"39\" height=\"33\" rx=\"3.5\" stroke=\"white\"/>\n<foreignObject x=\"13\" y=\"8\" width=\"64\" height=\"64\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(3.5px);clip-path:url(#bgblur_0_5541_1768_clip_path);height:100%;width:100%\"></div></foreignObject><g filter=\"url(#filter0_ii_5541_1768)\" data-figma-bg-blur-radius=\"7\">\n<circle cx=\"45\" cy=\"40\" r=\"25\" fill=\"url(#paint0_linear_5541_1768)\" fill-opacity=\"0.3\"/>\n</g>\n<path d=\"M54 40C53.9999 41.9005 53.3981 43.7523 52.2809 45.2899C51.1637 46.8274 49.5885 47.9719 47.7809 48.5591C45.9733 49.1464 44.0262 49.1463 42.2186 48.559C40.4111 47.9716 38.8359 46.8271 37.7188 45.2895C36.6017 43.7518 36 41.9 36 39.9994C36 38.0989 36.6017 36.2471 37.7188 34.7095C38.836 33.1718 40.4112 32.0274 42.2188 31.44C44.0263 30.8527 45.9734 30.8527 47.781 31.44\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<foreignObject x=\"-10\" y=\"-15\" width=\"110\" height=\"110\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(15px);height:100%;width:100%\"></div></foreignObject><circle data-figma-bg-blur-radius=\"30\" cx=\"45\" cy=\"40\" r=\"24.75\" stroke=\"url(#paint1_linear_5541_1768)\" stroke-opacity=\"0.3\" stroke-width=\"0.5\"/>\n<circle cx=\"6\" cy=\"5\" r=\"2\" fill=\"white\"/>\n<circle cx=\"11\" cy=\"5\" r=\"2\" fill=\"white\"/>\n<circle cx=\"16\" cy=\"5\" r=\"2\" fill=\"white\"/>\n<defs>\n<filter id=\"filter0_ii_5541_1768\" x=\"13\" y=\"8\" width=\"64\" height=\"64\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-2\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow_5541_1768\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"1\"/>\n<feGaussianBlur stdDeviation=\"0.5\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"/>\n<feBlend mode=\"normal\" in2=\"effect1_innerShadow_5541_1768\" result=\"effect2_innerShadow_5541_1768\"/>\n</filter>\n<clipPath id=\"bgblur_0_5541_1768_clip_path\" transform=\"translate(-13 -8)\"><circle cx=\"45\" cy=\"40\" r=\"25\"/>\n</clipPath><linearGradient id=\"paint0_linear_5541_1768\" x1=\"25.6452\" y1=\"25.5581\" x2=\"59.8793\" y2=\"53.9208\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#9CFDFF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#56B0FF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E66FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_5541_1768\" x1=\"25.3506\" y1=\"19.6131\" x2=\"79.3189\" y2=\"47.5572\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5A81FF\" stop-opacity=\"0.9\"/>\n<stop offset=\"0.447036\" stop-color=\"#567DFF\" stop-opacity=\"0.955296\"/>\n<stop offset=\"1\" stop-color=\"#4E78FF\" stop-opacity=\"0.9\"/>\n</linearGradient>\n</defs>\n</svg>\n";

const shieldIconRaw = "<svg width=\"44\" height=\"44\" viewBox=\"0 0 44 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle opacity=\"0.2\" cx=\"22\" cy=\"22\" r=\"22\" fill=\"#1BAF80\"/>\n<path d=\"M30 23C30 28 26.5 30.5 22.34 31.95C22.1222 32.0238 21.8855 32.0202 21.67 31.94C17.5 30.5 14 28 14 23V16C14 15.7347 14.1054 15.4804 14.2929 15.2929C14.4804 15.1053 14.7348 15 15 15C17 15 19.5 13.8 21.24 12.28C21.4519 12.099 21.7214 11.9995 22 11.9995C22.2786 11.9995 22.5481 12.099 22.76 12.28C24.51 13.81 27 15 29 15C29.2652 15 29.5196 15.1053 29.7071 15.2929C29.8946 15.4804 30 15.7347 30 16V23Z\" stroke=\"#1BAF80\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";

function getTimeoutIcon() {
  return colorizeSvg(timeoutIconRaw);
}
function getProcessingIcon() {
  return colorizeSvg(processingIconRaw);
}
function getShieldIcon() {
  return colorizeSvg(shieldIconRaw);
}
function shouldShowCancelButton() {
  return window.__VOUCH_MOBILE__ === true;
}
const OVERLAY_ID = "vouch-processing-overlay";
const PROCESSING_TITLE = "Please wait";
const PROCESSING_SUBTITLE = "Fetching relevant information...";
const TIMEOUT_TITLE = "Processing timed out";
const TIMEOUT_SUBTITLE = "The operation took longer than expected. You can send diagnostic information to help us investigate and retry.";
function createProcessingOverlay({
  text,
  withVouchLogo = false,
  timeout = 3e4
} = {}) {
  if (document.getElementById(OVERLAY_ID)) {
    return;
  }
  clearOverlayTimeout();
  injectCss(`${OVERLAY_ID}-style`);
  const overlay = div(
    { id: OVERLAY_ID, className: "vouch-overlay" },
    div(
      { className: "vouch-modal-container" },
      div(
        { className: "vouch-modal-content" },
        div(
          { className: "vouch-modal-icon" },
          img({
            alt: "Processing",
            src: getProcessingIcon()
          })
        ),
        div(
          { className: "vouch-modal-text" },
          div(
            { className: "vouch-modal-title-row" },
            withVouchLogo && img({ className: "vouch-logo", alt: "Vouch", src: logo }),
            div({
              className: "vouch-modal-title",
              textContent: text ?? PROCESSING_TITLE
            })
          ),
          div({
            className: "vouch-modal-subtitle",
            textContent: PROCESSING_SUBTITLE
          })
        ),
        div(
          { className: "vouch-modal-bottom" },
          div(
            { className: "vouch-info-box" },
            img({
              className: "vouch-info-icon",
              alt: "shield icon",
              src: getShieldIcon()
            }),
            div(
              { className: "vouch-info-content" },
              div({
                className: "vouch-info-title",
                textContent: "Keep this tab open."
              }),
              div({
                className: "vouch-info-description",
                textContent: "Your verification runs securely in the background."
              })
            )
          )
        )
      )
    )
  );
  document.body.appendChild(overlay);
  if (timeout > 0) {
    timeoutId = setTimeout(() => {
      handleTimeout();
    }, timeout);
  }
}
function removeProcessingOverlay() {
  clearOverlayTimeout();
  const overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function handleTimeout() {
  window.sendEvent({
    type: "Telemetry",
    payload: {
      event: "PROCESSING_TIMEOUT"
    }
  });
  transformToErrorState();
  console.error("Processing timeout");
  requestAnimationFrame(() => {
    window.sendEvent({
      type: "SendLogs"
    });
  });
}
function transformToErrorState() {
  const overlay = document.getElementById(OVERLAY_ID);
  if (!overlay) return;
  const modalContainer = overlay.querySelector(".vouch-modal-container");
  if (!modalContainer) return;
  const errorContent = div(
    { className: "vouch-modal-container" },
    div(
      { className: "vouch-modal-content" },
      div(
        { className: "vouch-modal-icon" },
        img({
          alt: "Timeout",
          src: getTimeoutIcon()
        })
      ),
      div(
        { className: "vouch-modal-text" },
        div({
          className: "vouch-modal-title",
          textContent: TIMEOUT_TITLE
        }),
        div({
          className: "vouch-modal-subtitle",
          textContent: TIMEOUT_SUBTITLE
        })
      ),
      div(
        { className: "vouch-modal-bottom" },
        div(
          { className: "vouch-button-container" },
          createRetryButton("proving"),
          shouldShowCancelButton() && createCancelButton()
        )
      )
    )
  );
  modalContainer.replaceWith(errorContent);
}
let timeoutId = null;
function clearOverlayTimeout() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
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
  createProcessingOverlay(options);
}
function closeProcessingOverlay() {
  removeProcessingOverlay();
}
function displayMessage(options) {
  showMessage(options);
}
function closeMessage() {
  hideMessage();
}
function sendTelemetry(message) {
  window.sendEvent({
    type: "Telemetry",
    payload: {
      event: "PROCESSING_LOG",
      metadata: { message }
    }
  });
}

window.__VOUCH_MOBILE__ = true;

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

var xmlhttprequest_getResponseHeader =
  XMLHttpRequest.prototype.getResponseHeader;
XMLHttpRequest.prototype.getResponseHeader = function () {
  const [headerName] = arguments;
  if (headerName == "redirect-count") {
    return null;
  } else {
    return xmlhttprequest_getResponseHeader.apply(this, arguments);
  }
};

var xmlhttprequest_getAllResponseHeaders =
  XMLHttpRequest.prototype.getAllResponseHeaders;
XMLHttpRequest.prototype.getAllResponseHeaders = function () {
  const originalHeaders = xmlhttprequest_getAllResponseHeaders.apply(
    this,
    arguments,
  );
  return removeXmlHttpRequestHeader(originalHeaders, "redirect-count");
};

function removeXmlHttpRequestHeader(headers, headerToRemove) {
  return headers
    .split("\r\n")
    .filter((line) => !line.startsWith(headerToRemove))
    .join("\r\n");
}

const originalFetch = window.fetch;
window.fetch = async function (input, init = {}) {
  const startDateUTC = new Date().toUTCString();
  let url = (input.url ?? input).toString();
  url = addHostIfMissing(url);
  let method = init.method || (input instanceof Request ? input.method : "GET");

  let headers;
  let requestBody;
  if (input instanceof Request) {
    headers = new Headers(input.headers);
    setCacheKeyHeader(headers);

    if (input.body) {
      const [readStream, passStream] = input.body.tee();
      requestBody = [await readableStreamToString(readStream)];
      input = new Request(input, {
        duplex: "half",
        body: passStream,
        headers: headers,
      });
    } else {
      requestBody = [];
      input = new Request(input, { headers: headers });
    }
  } else {
    if (init && init.body !== undefined) {
      if (init.body instanceof ReadableStream) {
        const [readStream, passStream] = init.body.tee();
        requestBody = [await readableStreamToString(readStream)];
        init.body = passStream;
      } else {
        requestBody = [await bodyToText(init.body)];
      }
    } else {
      requestBody = [];
    }

    headers = new Headers(init.headers || {});
    setCacheKeyHeader(headers);
    init.headers = Object.fromEntries(headers.entries());
  }

  headers.set("user-agent", navigator.userAgent);
  headers.set("accept-language", getAcceptLanguageHeader());

  try {
    headers.set("origin", new URL(url).origin);
  } catch (e) {
    // skip origin if URL parsing fails
  }

  var message = {
    type: "request_start",
    url: url,
    startDate: startDateUTC,
    method: method,
    arguments: requestBody,
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
      arguments: requestBody,
      headers: Array.from(headers.entries()),
      response: respText,
      responseHeaders: responseHeaders,
    };
    window.sendEvent(message);

    Object.defineProperty(response, "redirected", {
      value: isRedirect(response),
      writable: false,
      configurable: false,
    });

    const filteredHeaders = new Headers(response.headers);
    filteredHeaders.delete("redirect-count");

    Object.defineProperty(response, "headers", {
      value: filteredHeaders,
      writable: false,
      configurable: false,
    });

    return response;
  } catch (error) {
    var message = {
      type: "request",
      status: 500,
      url: url,
      startDate: startDateUTC,
      method: method,
      arguments: requestBody,
      headers: Array.from(headers.entries()),
      response: error.toString(),
      responseHeaders: [],
    };

    window.sendEvent(message);
    throw error;
  }
};

async function readableStreamToString(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
    }
    result += decoder.decode(); // flush
    return result;
  } catch (error) {
    throw new Error(
      `Failed to read ReadableStream: ${error?.message || error}`,
    );
  } finally {
    reader.releaseLock();
  }
}

async function bodyToText(body) {
  if (body == null) return "";

  // string
  if (typeof body === "string") return body;

  // URLSearchParams
  if (body instanceof URLSearchParams) return body.toString();

  // Blob or File
  if (body instanceof Blob) return await body.text();

  // FormData
  if (body instanceof FormData) {
    // No single “correct” textual representation; common choice is debug output:
    const entries = [];
    for (const [k, v] of body.entries()) {
      entries.push([
        k,
        v instanceof File ? `File(${v.name}, ${v.type}, ${v.size})` : String(v),
      ]);
    }
    return JSON.stringify(entries);
  }

  // ArrayBuffer
  if (body instanceof ArrayBuffer) {
    return new TextDecoder().decode(new Uint8Array(body));
  }

  // TypedArray (Uint8Array, etc.) or DataView
  if (ArrayBuffer.isView(body)) {
    return new TextDecoder().decode(
      new Uint8Array(body.buffer, body.byteOffset, body.byteLength),
    );
  }

  return String(body);
}

function isRedirect(response) {
  let redirectCountHeaderValue = Number(response.headers.get("redirect-count"));
  return response.redirected || redirectCountHeaderValue > 0;
}

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
