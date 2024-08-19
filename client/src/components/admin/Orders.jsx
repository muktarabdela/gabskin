import React from 'react';

const Orders = ({ users }) => {
    const reversedUsers = users.slice().reverse();
    return (
        <div className="mb-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Orders</h2>
            {reversedUsers.map((user, userIndex) => (
                <div key={userIndex} className="mb-4 bg-gray-100 rounded-md p-4">
                    <p className="text-gray-600 mb-2"><strong>User Name:</strong> {user?.name || user?.deliveryInfo
                        ?.firstName}</p>
                    <p className="text-gray-600 mb-2"><strong>User Phone:</strong>  {(user?.phone || (user?.deliveryInfo && user?.deliveryInfo?.phone)) || 'N/A'}</p>
                    {user.orders.map((order, orderIndex) => (
                        <div key={orderIndex} className="mb-4">
                            <ul>
                                {order?.stickers.map((sticker, stickerIndex) => (
                                    <li key={stickerIndex} className="text-gray-600 mb-2 border-b pb-2">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p><strong>Category:</strong> {sticker.category}</p>
                                                <p><strong>Size:</strong> {sticker.size}</p>
                                                <p><strong>Quantity:</strong> {sticker.quantity}</p>
                                            </div>
                                            <div>
                                                <p><strong>Price:</strong> {sticker.price} ETB</p>
                                                {/* Add other sticker information here */}
                                                <img
                                                    src={sticker.imageUrl}
                                                    alt={`Sticker ${stickerIndex + 1}`}
                                                    className="mt-4 w-[10em] h-[10"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            ))}
            {reversedUsers.length === 0 && <p className="text-gray-500">
                No orders found.</p>}
        </div>
    );
};

export default Orders;
