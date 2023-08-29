import React from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useGestures } from '../hooks/useGestures';
import { useImageLayout } from '../hooks/useImageLayout';

import type { ImageZoomProps } from '../types';

const ImageZoom: React.FC<ImageZoomProps> = ({
  uri = '',
  minScale,
  maxScale,
  minPanPointers,
  maxPanPointers,
  isPanEnabled,
  isPinchEnabled,
  onInteractionStart,
  onInteractionEnd,
  onPinchStart,
  onPinchEnd,
  onPanStart,
  onPanEnd,
  onLayout,
  style,
  ...props
}) => {
  const { center, onImageLayout } = useImageLayout({ onLayout });
  const { animatedStyle, gestures } = useGestures({
    center,
    minScale,
    maxScale,
    minPanPointers,
    maxPanPointers,
    isPanEnabled,
    isPinchEnabled,
    onInteractionStart,
    onInteractionEnd,
    onPinchStart,
    onPinchEnd,
    onPanStart,
    onPanEnd,
  });

  return (
    <GestureDetector gesture={gestures}>
      <Animated.Image
        style={[style, animatedStyle]}
        source={{ uri }}
        resizeMode="contain"
        onLayout={onImageLayout}
        {...props}
      />
    </GestureDetector>
  );
};

export default ImageZoom;
