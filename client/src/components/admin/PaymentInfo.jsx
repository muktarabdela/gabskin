import React, { useEffect, useState } from 'react';
import { updatePaymentStatus } from '../../api/userApi';

const PaymentInfo = ({ users }) => {
  console.log(users[2]?.totalPrice)

  const [paymentStatus, setPaymentStatus] = useState({});
  const handleUpdatePaymentStatus = async (userId) => {
    try {
      const response = await updatePaymentStatus(userId, paymentStatus);
      if (response.status === 200) {
        alert('Payment status updated successfully!');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };
  const handleStatusChange = (userId, newStatus) => {
    setPaymentStatus((prevStatus) => ({
      ...prevStatus,
      [userId]: newStatus,
    }));
  };

  const reversedUsers = users?.slice().reverse();

  return (
    <div className="mb-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">payment</h2>

      {Array.isArray(reversedUsers) &&
        reversedUsers.map((user) => (
          <div key={user._id} className="mb-4 md:flex lg:flex justify-between bg-gray-100 rounded-md p-4">
            <div>

              <p className="text-gray-600 mb-2"><strong>User Name:</strong>  {(user?.deliveryInfo && user?.deliveryInfo?.firstName) || 'N/A'}</p>
              <p className="text-gray-600 mb-2"><strong>User Phone:</strong>  {(user.phone || (user?.deliveryInfo && user?.deliveryInfo?.phone)) || 'N/A'}</p>
              <p className="text-gray-600 mb-2"><strong>User email:</strong> {user?.email}</p>
              <p className="text-gray-600 mb-2"><strong>paymentMethod:</strong> {user?.paymentMethod}</p>
            </div>
            <div className="mt-6">
              <p className="text-black font-bold">
                Total Price: {user?.totalPrice} ETB
              </p>
            </div>
            <div className="mt-6">
              <p className="text-black font-bold">
                Initial Price: {user?.totalPrice / 5} ETB
              </p>
              <p className="text-black font-bold mt-2">
                unpaid Price: {user?.totalPrice - user?.totalPrice / 5} ETB
              </p>
            </div>
            <div className=''>
              <img
                src={user?.receiptScreenshot}
                alt=""
                className="w-[20em] h-auto rounded-md"
              />
            </div>

            <td className="py-2 px-4 border-b">
              <select
                className="text-black w-full px-2 py-1 rounded-md border border-gray-300 focus:outline-none"
                value={paymentStatus[user._id] || ''}
                onChange={(e) => handleStatusChange(user._id, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Failed">Failed</option>
              </select>
            </td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => handleUpdatePaymentStatus(user._id)}
                className="bg-blue-500 text-white px-2 py-1 rounded-md"
              >
                Update
              </button>
            </td>
          </div>
        ))}
      {reversedUsers.length === 0 && <p className="text-gray-500">
        No users found.</p>}
    </div>
  );
};

export default PaymentInfo;
