import "normalize.css";
import '../css/app.scss';
import '../css/foundation/_variable.scss';
import '../css/foundation/_mixin.scss';
import '../css/foundation/_base.scss';
import '../css/layout/_index.scss';
import '../css/object/component/_index.scss';
import '../css/object/project/_index.scss';
import '../css/object/utility/_index.scss';
import loading from "./loading";
import marquee from "./marquee";
import executionSwiper from "./plugin";
import scrollAnim from "./scrollAnim";
import showAnim from "./showAnim";
import modal from "./modal";

loading();
marquee();
executionSwiper();
scrollAnim();
showAnim();
modal();


