import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

// Import Navbar
import NavbarUser from '../../components/NavbarUser';
import Chat from '../../components/MessageChat';

const MessageChat = ({ location }) => {

    useEffect(() => {
        // const { name, room } = queryString.parse(location.search)
        // console.log(name, room)
        // console.log(location.search)
    })

    return (
        <div>
            <NavbarUser/>
            <div>You have joined</div>
            <Chat />
        </div>
    );
}

export default MessageChat;