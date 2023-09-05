/* eslint-disable react/jsx-filename-extension */
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const LazyImage = ({ effect = 'blur', ...rest }) => (
  <LazyLoadImage effect={effect} {...rest} />
)

export default LazyImage
