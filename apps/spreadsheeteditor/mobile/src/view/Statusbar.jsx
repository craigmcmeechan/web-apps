import React, { Fragment } from 'react';
import { View, Toolbar, Link, Icon, Popover, List, ListButton, Actions, ActionsGroup, ActionsButton } from 'framework7-react';
import { observer, inject } from "mobx-react";
import { useTranslation } from 'react-i18next';
import { Device } from '../../../../common/mobile/utils/device';

const viewStyle = {
    height: 30
};

const StatusbarView = inject('sheets')(observer(props => {
    const { t } = useTranslation();
    const _t = t('Statusbar', {returnObjects: true});
    const isAndroid = Device.android;
    const isPhone = Device.isPhone;
    const { sheets } = props;
    const hiddenSheets = sheets.hiddensheets;
    const getTabClassList = model => `tab ${model.active ? 'active' : ''} ${model.locked ? 'locked' : ''}`;
    const $boxTabs = $$('.sheet-tabs');
    // $boxTabs.css('position', 'absolute');

    $boxTabs.on('touchstart', onTouchStart);
    $boxTabs.on('touchmove', onTouchMove);
    $boxTabs.on('touchend', onTouchEnd);

    let touch = {};

    function hasInvisible() {
        let _left_bound_ = $boxTabs.offset().left,
            _right_bound_ = _left_bound_ + $boxTabs.width();
        
        // console.log(_left_bound_);
        // console.log(_right_bound_);

        let tab = $$('.sheet-tabs li')[0];
        let rect = tab.getBoundingClientRect();

        if (!(rect.left < _left_bound_)) {
            tab = $$('.sheet-tabs li')[$$('.sheet-tabs li').length - 1];
            rect = tab.getBoundingClientRect();
       
            if (!(rect.right > _right_bound_))
                return false;
        }

        return true;
    }

    function onTouchStart(e) {
        if (hasInvisible()) {
            // console.log(e);
            let touches = e.changedTouches;
            touch.startx = touches[0].clientX;
            touch.scrollx = $boxTabs.scrollLeft();
            // console.log(touch.scrollx);
            
            touch.timer = setTimeout(function () {
                // touch.longtouch = true;
            }, 500);
            // e.preventDefault();
        }
    }

    function onTouchMove(e) {
        if (touch.startx !== undefined) {
            // console.log(e);
            let touches = e.changedTouches;

            if (touch.longtouch) {}
            else {
                if (touch.timer) clearTimeout(touch.timer), delete touch.timer;
                let valueLeft = touch.scrollx + (touch.startx - touches[0].clientX);
                // console.log(valueLeft);
                $boxTabs.scrollLeft(valueLeft);
            }

            // e.preventDefault();
        }
    }

    function onTouchEnd(e) {
        if (touch.startx !== undefined) {
            // console.log(e);
            touch.longtouch = false;
            delete touch.startx;
            // e.preventDefault();
        }
    }

    return  (
        <Fragment>
            <View id="idx-statusbar" className="statusbar" style={viewStyle}>
                <div id="idx-box-add-tab">
                    <Link href="false" id="idx-btn-addtab" className="tab" onClick={e => props.onAddTabClicked()}>
                        <Icon className="icon icon-plus" />
                    </Link>
                </div>
                <div className="statusbar--box-tabs">
                    <ul className="sheet-tabs bottom">
                        {sheets.sheets.map((model,i) =>
                            model.hidden ? null :
                                <li className={getTabClassList(model)} key={i} onClick={(e) => props.onTabClick(i, e.target)}>
                                    <a /* onClick={e => props.onTabClicked(i)} */>{model.name}</a>
                                </li>
                        )}
                    </ul>
                </div>
            </View>
            <Popover id="idx-tab-context-menu-popover"
                className="document-menu"
                backdrop={false}
                closeByBackdropClick={false}
                closeByOutsideClick={false}
            >
                <List className="list-block">
                    <ListButton title={_t.textDuplicate} onClick={() => props.onTabMenu('copy')} />
                    <ListButton title={_t.textDelete} onClick={() => props.onTabMenu('del')} />
                    {isPhone || isAndroid ? (
                        <ListButton title={_t.textMore} onClick={() => props.onTabMenu('showMore')} /> 
                    ) : (
                        <Fragment>
                            <ListButton title={_t.textRename} onClick={() => props.onTabMenu('ren')} />
                            <ListButton title={_t.textHide} onClick={() => props.onTabMenu('hide')} />
                            {hiddenSheets.length ? (
                                <ListButton title={_t.textUnhide} onClick={() => props.onTabMenu('unhide')} />
                            ): null}
                        </Fragment>
                    )}
                </List>
            </Popover>
            {isPhone || isAndroid ? (
                <Actions id="idx-tab-menu-actions" backdrop={true} closeByBackdropClick={true}>
                    <ActionsGroup>
                        <ActionsButton onClick={() => props.onTabMenu('ren')}>{_t.textRename}</ActionsButton>
                        <ActionsButton onClick={() => props.onTabMenu('hide')}>{_t.textHide}</ActionsButton>
                        <ActionsButton onClick={() => props.onTabMenu('unhide')}>{_t.textUnhide}</ActionsButton>
                    </ActionsGroup>
                    <ActionsGroup>
                        <ActionsButton>{_t.textCancel}</ActionsButton>
                    </ActionsGroup>
                </Actions>
            ) : null}
            {hiddenSheets.length ? (
                <Popover id="idx-hidden-sheets-popover"
                    className="document-menu"
                    backdrop={false}
                    closeByBackdropClick={false}
                    closeByOutsideClick={false}
                >
                    <List className="list-block">
                        {hiddenSheets.map(sheet => {
                            return (
                                <ListButton key={sheet.index} data-event={`reveal:${sheet.index}`} title={sheet.name} 
                                    onClick={() => props.onTabMenu(`reveal:${sheet.index}`)} />
                            )
                        })}
                    </List>
                </Popover>
            ) : null}
        </Fragment>
    )
}));

export {StatusbarView};
