import React, { useState } from 'react';
import { Snackbar } from '@pomelo-la/paradis';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as Icons from '..';
import ButtonIcon from '../ButtonIcon';

const IconGrid = () => {
  const [message, setMessage] = useState({
    visible: false,
    text: '',
  });

  return (
    <div className="grid grid-cols-6 gap-y-16 gap-x-16">
      {Object.keys(Icons).map((k: string) => {
        // @ts-ignore
        const Icon = Icons[k];
        const text = `<${k} />`;
        return (
          <CopyToClipboard text={text}>
            <div className="flex justify-center items-center cursor-pointer">
              <ButtonIcon onClick={() => setMessage({ visible: true, text: `Copiado! ${text}` })}>
                <Icon key={k} />
              </ButtonIcon>
            </div>
          </CopyToClipboard>
        );
      })}
      <Snackbar
        status="info"
        show={message.visible}
        onHide={() => setMessage({ ...message, visible: false })}
        message={message.text}
      />
    </div>
  );
};

export default IconGrid;
