"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_plugin_app_review.Acts = {
        Requestreview()
        {
            const self = this;
            if (typeof window['cordova'] == 'undefined')
            {
                return;
            }
            else
            {
                window['cordova'].plugins.AppReview.requestReview().
                catch (function()
                {
                    return window['cordova'].plugins.AppReview.openStoreScreen();
                });

            }
        },

        Requestreview2()
        {
            const self = this;
            if (typeof window['cordova'] == 'undefined')
            {
                return;
            }
            else
            {

                window['cordova'].plugins.AppReview.requestReview();

            }
        },

        Packagename(pk)
        {
            const self = this;
            if (typeof window['cordova'] == 'undefined')
            {
                return;
            }
            else
            {

                window['cordova'].plugins.AppReview.openStoreScreen(pk);

            }
        }
    };
}