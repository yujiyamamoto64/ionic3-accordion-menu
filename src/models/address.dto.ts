import { CityDTO } from "./city.dto";

export interface AddressDTO {
    id : string;
    publicPace : string;
    number : string;
    complement : string;
    district : string;
    cep : string;
    city : CityDTO;
}