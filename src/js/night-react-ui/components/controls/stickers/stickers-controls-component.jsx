/** @jsx ReactBEM.createElement **/
/*
 * Photo Editor SDK - photoeditorsdk.com
 * Copyright (c) 2013-2015 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

import { ReactBEM, BaseChildComponent } from '../../../globals'
import ScrollbarComponent from '../../scrollbar-component'

export default class StickersControlsComponent extends BaseChildComponent {
  constructor (...args) {
    super(...args)

    this._bindAll('_onBackClick')
    this._operation = this.context.ui.getOrCreateOperation('stickers')
    this._stickers = this._operation.getStickers()
  }

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */
  _onBackClick (e) {
    this.props.onSwitchControls('back')
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  renderWithBEM () {
    const ui = this.context.ui

    const listItems = this._stickers.map((identifier) => {
      return (<li
        bem='e:item'
        key={identifier}>
        <bem specifier='$b:controls'>
          <div bem='$e:button m:withLabel'>
            <img bem='e:icon' src={ui.getHelpers().assetPath(`stickers/${identifier}.png`)} />
          </div>
        </bem>
      </li>)
    })

    return (<div bem='$b:controls e:table'>
      <div bem='e:cell m:button m:withBorderRight'>
        <div bem='$e:button' onClick={this._onBackClick}>
          <img bem='e:icon' src={ui.getHelpers().assetPath(`controls/back@2x.png`, true)} />
        </div>
      </div>
      <div bem='e:cell m:list'>
        <ScrollbarComponent>
          <ul bem='$e:list'>
            {listItems}
          </ul>
        </ScrollbarComponent>
      </div>
    </div>)
  }
}
