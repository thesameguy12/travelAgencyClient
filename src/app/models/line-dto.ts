import { CityDto } from "./city-dto";

export interface LineResponseDto{
     id:number | null;
     cityIdTo:number;
     cityIdFrom:number;
     oneWayTicketPrice:number;
     twoWayTicketPrice:number;
     time:string;
}
export interface LineRequestDto{
    id:number;
    cityIdTo:CityDto;
    cityIdFrom:CityDto;
    oneWayTicketPrice:number;
    twoWayTicketPrice:number;
    time:string;
}