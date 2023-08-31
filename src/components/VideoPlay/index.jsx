/* eslint-disable react/jsx-filename-extension */
import { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoPlayer = ({ wrapperClassName, width = '100%', height = '100%', controls = true, url, ...rest }, ref) => {
  return (
    <div className={classnames('videoPlayer', wrapperClassName)}>
      <ReactPlayer
        ref={ref}
        url={url}
        width={width}
        height={height}
        controls={controls}
        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        {...rest}
      />
    </div>
  );
};

export default forwardRef(VideoPlayer);
