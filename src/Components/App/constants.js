import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';

let strings = new LocalizedStrings({

    EN:{
   
    },

    MR: {
    }
});

strings.setLanguage(config.lang);

export default strings;