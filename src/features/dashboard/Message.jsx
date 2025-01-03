import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaUserAlt, FaCalendarCheck, FaFileAlt, FaEnvelope } from "react-icons/fa";
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
  const [selectedMessage, setSelectedMessage] = useState(null); // Tracks the message being replied to
  const [replyText, setReplyText] = useState(''); // Stores the reply text
  const [sentReplies, setSentReplies] = useState([]); // Stores all sent replies

  // Handle reply button click
  const handleReplyClick = (message) => {
    setSelectedMessage(message);
    setReplyText('');
  };

  // Handle sending the reply
  const handleSendReply = () => {
    if (replyText.trim() === '') return;

    // Save the reply
    setSentReplies((prevReplies) => [
      ...prevReplies,
      { messageId: selectedMessage.id, reply: replyText },
    ]);
    setSelectedMessage(null); // Close reply box
    setReplyText('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="text-lg hover:text-gray-400">Dashboard</Link>
            </li>
            {/* Manage Clients Link */}
            <li>
              <Link
                to="/dashboard/manage-clients"
                className="flex items-center p-2 hover:bg-gray-700 rounded mb-4"
              >
                <FaUserAlt className="mr-2" /> Manage Clients
              </Link>
            </li>
            {/* Manage Appointments Link */}
            <li>
              <Link
                to="/dashboard/appointments"
                className="flex items-center p-2 hover:bg-gray-700 rounded mb-4"
              >
                <FaCalendarCheck className="mr-2" /> Manage Appointments
              </Link>
            </li>
            {/* Generate Reports Link */}
            <li>
              <Link
                to="/dashboard/reports"
                className="flex items-center p-2 hover:bg-gray-700 rounded mb-4"
              >
                <FaFileAlt className="mr-2" /> Generate Reports
              </Link>
            </li>
            {/* Messages Link */}
            <li>
              <Link
                to="/dashboard/messages"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <FaEnvelope className="mr-2" /> Messages
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    <div className="flex-1 p-6 bg-gray-100">
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
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">{message.time}</span>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleReplyClick(message)}
                  >
                    Reply
                  </button>
                </div>
              </div>

              {/* Display Sent Replies for this Message */}
              <div className="mt-2">
                {sentReplies
                  .filter((reply) => reply.messageId === message.id)
                  .map((reply, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 text-gray-700 text-sm p-2 rounded-md mt-1"
                    >
                      {reply.reply}
                    </div>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Reply Box */}
      {selectedMessage && (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            Replying to {selectedMessage.sender}
          </h3>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="Type your reply here..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              onClick={() => setSelectedMessage(null)}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={handleSendReply}
            >
              Send Reply
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Message;
