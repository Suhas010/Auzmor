import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';

export const GRAPH_SCALE = {
    YEAR: 1,
    MONTH: 2,
    WEEK: 3
}
let strings = new LocalizedStrings({

    EN:{
        year: "year",
        month: "Month",
        week: "Week",
    },

    MR: {
        year: "year",
        month: "Month",
        week: "Week",
    }
});

strings.setLanguage(config.lang);

export default strings;