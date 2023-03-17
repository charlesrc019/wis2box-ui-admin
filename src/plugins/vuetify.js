import { createVuetify } from 'vuetify';
//import { aliases, fa } from 'vuetify/lib/iconsets/fa';
//import { mdi } from 'vuetify/lib/iconsets/mdi';
import * as styles from 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    defaults: styles
});

export default vuetify;