import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import './Chat.css';

function Chat() {
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    {/* <p>Crime reducer chat</p>  */}
                </div>
                <div className="logout-tab" onClick="handleLogout">
                    {/* Logout */}
                </div>
            </div>

            {/* <ChatEngine
            height="calc(100vh - 66px)"
            projectId="c843a8c3-dc90-48da-9ffb-df44d25392b7"
            userName="Nishath"
            userSecret="123123"
            /> */}
            <ChatEngine
			height="calc(100vh - 66px)"
			userName='Nishath'
			userSecret='123123'
			projectID='c843a8c3-dc90-48da-9ffb-df44d25392b7'
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
		/>
        </div>
    );
}

export default Chat;
