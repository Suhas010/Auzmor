
import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';

export const GRAPH_TYPE = {
    BAR: 1,
    LINE: 2,
    PIE: 3,
    
}

export const GRAPH_SCALE = {
    YEAR: 1,
    MONTH: 2,
    WEEK: 3
}


let strings = new LocalizedStrings({
    
        EN:{
            bar: "Bar",
            line: "Line",
            pie: "pie",
            rev : "Your Todays Revenue",
            NetworkFailure: "Seems Like Internet connection is not available, Check your wifi cable or restart router",
    
        },
    
        MR: {
            how:"Come vuoi il tuo uovo oggi?",
            boiledEgg:"Uovo sodo",
            softBoiledEgg:"Uovo alla coque",
            choice:"Come scegliere l'uovo"
        }
    });
    
    strings.setLanguage(config.lang);
    
    export default strings;