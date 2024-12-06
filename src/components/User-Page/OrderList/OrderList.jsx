import { getMyOrders } from "@/actions/actions";
import { formatDate, formatPrice } from "@/libs/formatLibrary";
import { InfoRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const OrderList = async ({ data }) => {
  const myOrders = await getMyOrders(data._id);
  return (
    <div className={`table-responsive overflow-y-scroll`}>
      <table className="table table-hover table-bordered">
        <thead className={`thead-dark`}>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Date & Time</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {myOrders.length > 0 ? (
            myOrders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order._id}</td>

                <td>{formatDate(order.createdAt)}</td>
                <td>{formatPrice(order.totalAmount)}</td>
                <td className="d-flex">
                  <Link
                    className="btn d-flex align-items-center btn-primary me-2"
                    href={`my-order/${order._id}`}
                    passHref
                  >
                    <InfoRounded className="me-1" />
                    Details
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No order found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
