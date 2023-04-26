import React from 'react';


// при работе с массивами, реакт прорисовывает только элем с ложным значением,
//  если пишем перед логическим оператором - undefined, 0, false, null
const Mailbox = ({ unreadMessages }) => {
    return (
      <div className="mailbox">
        <span className="mailbox__text">Messages</span>
        {unreadMessages.length > 0 && (
          <span className="mailbox__count">{unreadMessages.length}</span>
        )}
      </div>
    );
};
export default Mailbox;