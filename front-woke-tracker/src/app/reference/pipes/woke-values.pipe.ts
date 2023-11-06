import { PipeTransform, Pipe } from "@angular/core";
import { WokeValues } from "../enums/woke-values.enum";

@Pipe({
    name: 'wokeValues'
  })
export class WokeValuesPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {

        switch (value) {
            case WokeValues.ANTI_FAMILY:
                return "Anti Family";

            case WokeValues.FEMINISM:
                return "Feminism";    

            case WokeValues.CHILDREN_SEXUALIZER:
                return "Children Sexualizer";

            case WokeValues.GENDER_IDEOLOGY:
                return "Gender Ideology";

            case WokeValues.HATE_COUNTRY:
                return "Anti Patriotic";

            case WokeValues.HATE_GOD:
                return "Anti Religious";

            case WokeValues.RACE_HUSTLER:
                return "Race Hustler";

            case WokeValues.TERRORISM:
                return "Terrorism";     

            default:
                return "Invalid Value";
        }
    }

}