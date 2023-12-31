import { Order } from "@/services/getOrders";
import './styles.css'
import { LogoBG } from '@/assets';

interface TableRowProps {
    item: string;
    quantity: string;
    subtotal: string;
}

function TableRow({ item, quantity, subtotal }: TableRowProps) {
    return (
        <tr className="service">
            <td className="tableitem"><p className="itemtext">{item}</p></td>
            <td className="tableitem"><p className="itemtext">{quantity}</p></td>
            <td className="tableitem"><p className="itemtext">{subtotal}</p></td>
        </tr>
    );
}

export const Receipt = ({ order, innerRef, className }: {
    order: Order
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    innerRef: any
    className?: string
}) => {
    return (
        <div className={className} id="invoice-POS" ref={innerRef}>
            <center id="top">
                <img className="logo" src={LogoBG} />
                <div className="info">
                    <p className='mt-2'>طلباتك</p>
                </div>
            </center>
            <div id="mid">
                <div className="info">
                    <h2>معلومات التوصيل</h2>
                    <p>
                        العنوان : {order.area.name}<br />
                        الهاتف: {order.phone}<br />
                        الاجمالي: {order.total}<br />
                        {order.shipping && <>
                            <span>قيمة التوصيل: {order.shipping}</span>
                            <br />
                        </>}
                    </p>
                </div>
            </div>
            <div id="table">
                <table>
                    <thead>
                        <tr className="tabletitle">
                            <td className="item"><p className='text-4xl'>الاسم</p></td>
                            <td className="Hours"><p className='text-2xl'>العدد</p></td>
                            <td className="Rate"><p className='text-2xl'>الاجمالي</p></td>
                        </tr>
                    </thead>
                    <tbody>
                        {order.cart_products?.map((product) => (
                            <TableRow
                                key={product.id}
                                item={product.product.title}
                                quantity={product.quantity.toString()}
                                subtotal={product.total.toString()}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}