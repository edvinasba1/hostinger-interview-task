import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faTable,
    faMousePointer,
    faBars,
    faLongArrowAltDown,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleRight,
    faAngleLeft,
    faEllipsisV,
    faHistory,
    faEye,
    faTimes,
    faExclamation,
    faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faTable,
    faMousePointer,
    faBars,
    faLongArrowAltDown,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleRight,
    faAngleLeft,
    faEllipsisV,
    faHistory,
    faEye,
    faTimes,
    faExclamation,
    faHashtag
);

Vue.component('font-awesome-icon', FontAwesomeIcon);