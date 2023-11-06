import { Injectable } from "@angular/core";
import { WokeValues } from "../reference/enums/woke-values.enum";

@Injectable({
    providedIn: 'root',
})
export class WokeValuesTooltipService {    
    
    public tooltipByWokeValue(wokeValue: WokeValues): string{

        switch (wokeValue) {
            case WokeValues.ANTI_FAMILY:                
                return "Promotes values against the nuclear family (man and woman)";
        
            case WokeValues.FEMINISM:                
                return "Promotes hate against man and traditional values";

            case WokeValues.CHILDREN_SEXUALIZER:                
                return "Promotes via culture the sexualization of children.";

            case WokeValues.GENDER_IDEOLOGY:                
                return "Promotes confusion about gender in schools.";

            case WokeValues.HATE_COUNTRY:
                return "Promotes hate against the home country";

            case WokeValues.HATE_GOD:                
                return "Promotes hate agains the only one God";

            case WokeValues.RACE_HUSTLER:                
                return "Uses race as a mean to be seem as a victim to win arguments.";

            case WokeValues.TERRORISM:                
                return "Afiliates to groups that uses violences as a political means.";

            default:
                return "Invalid tooltip.";
                
        }
    }
}