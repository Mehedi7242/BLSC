import React from 'react';

// Dummy data for messages
const messages = [
  {
    id: 1,
    sender: 'John Doe',
    content: 'Hey, I need some help with my recent order.',
    time: '2 hours ago',
  },
  {
    id: 2,
    sender: 'Sarah Lee',
    content: 'Can you provide an update on the delivery status?',
    time: '4 hours ago',
  },
  {
    id: 3,
    sender: 'Michael Smith',
    content: 'I would like to change my appointment time.',
    time: '6 hours ago',
  },
  {
    id: 4,
    sender: 'Anna Johnson',
    content: 'Thank you for the great service, I’m very satisfied!',
    time: '1 day ago',
  },
];

const Message = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>

      {/* Messages List */}
      <div className="bg-white shadow-lg rounded-lg">
        <ul className="p-4">
          {messages.map((message) => (
            <li key={message.id} className="border-b last:border-b-0 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">{message.sender}</span>
                  <p className="text-sm text-gray-500">{message.content}</p>
                </div>
                <span className="text-sm text-gray-400">{message.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Message;
