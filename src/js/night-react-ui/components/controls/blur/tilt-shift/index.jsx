/*
 * Photo Editor SDK - photoeditorsdk.com
 * Copyright (c) 2013-2015 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

import { Vector2 } from '../../../../globals'
import TiltShiftControlsComponent from './tilt-shift-controls-component'
import TiltShiftCanvasControlsComponent from './tilt-shift-canvas-controls-component'

export default {
  canvasControls: TiltShiftCanvasControlsComponent,
  controls: TiltShiftControlsComponent,
  identifier: 'tilt-shift',
  getInitialSharedState: (context) => {
    return {
      operationExistedBefore: context.ui.operationExists('tilt-shift'),
      operation: context.ui.getOrCreateOperation('tilt-shift', {
        start: new Vector2(0.49, 0.5),
        end: new Vector2(0.51, 0.5)
      })
    }
  },
  isSelectable: (ui) => {
    return ui.isOperationSelected('tilt-shift')
  }
}