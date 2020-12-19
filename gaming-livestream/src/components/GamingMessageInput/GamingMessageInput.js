import React, { useContext } from 'react';
import { ChatAutoComplete, ChannelContext, useMessageInput } from 'stream-chat-react';

import SendIcon from '../../assets/icons/SendIcon';
import StarIcon from '../../assets/icons/StarIcon';

import './GamingMessageInput.scss';

export const GamingMessageInput = (props) => {
  const { setShowUpgrade } = props;

  const { typing } = useContext(ChannelContext);
  const messageInput = useMessageInput(props);

  return (
    <div className='channel-footer'>
      <ChatAutoComplete
        commands={messageInput.getCommands()}
        innerRef={messageInput.textareaRef}
        handleSubmit={messageInput.handleSubmit}
        onSelectItem={messageInput.onSelectItem}
        value={messageInput.text}
        maxRows={props.maxRows}
        placeholder='Say something'
        onChange={messageInput.handleChange}
        onPaste={messageInput.onPaste}
        triggers={props.autocompleteTriggers}
        grow={props.grow}
        disabled={props.disabled}
        additionalTextareaProps={props.additionalTextareaProps}
      />
      <div className='channel-footer-separator'>
        <div onClick={() => setShowUpgrade(true)} className='watcher-count'>
          <StarIcon />
          <p>68</p>
        </div>
        {!!Object.keys(typing).length && (
          <div className='typing-indicators'>
            <div className='indicators'>
              {[1, 2, 3].map((item, i) => (
                <div className='dot' style={{ animationDelay: i * 0.2 + 's' }}></div>
              ))}
            </div>
            <p>a member is typing</p>
          </div>
        )}
        <button className={messageInput.text ? 'text' : ''} onClick={messageInput.handleSubmit}>
          <SendIcon text={messageInput.text} />
        </button>
      </div>
    </div>
  );
};
