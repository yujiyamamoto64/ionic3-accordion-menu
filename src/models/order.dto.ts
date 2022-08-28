import { orderItemDTO } from "./order.item.dto";
import { paymentDTO } from "./payment.dto";
import { refDTO } from "./ref.dto";

export interface OrderDTO {
    client : refDTO;
    shipAddress: refDTO;
    payment:  paymentDTO;
    items: orderItemDTO[];
}