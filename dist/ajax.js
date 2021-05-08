;(function (window) {

    if (!window.Web136Ajax) {
        /**@constructor*/
        window.Web136Ajax = function () {
            return new function () {

                this.xhr = new XMLHttpRequest();

                this.options = {
                    method: 'get',
                    url: '', //url  может быть как строкой так и объектом URL.  Последний позволяет кодировать параметры
                    withCredentials: false,
                    async: true,
                    timeout: 1000,
                    responseType: "",
                    data: {}
                };

                /**
                 * @param options {Object}
                 * @return {Promise}
                 * */
                this.request = function (options) {

                    let that = this;
                    this.extendsOptions(options);

                    return new Promise(function (resolve, reject) {

                        that.xhr.responseType = that.options.responseType;
                        that.xhr.withCredentials = that.options.withCredentials;
                        that.xhr.open(that.options.method, that.options.url, that.options.async);

                        that.xhr.onload = function () {
                            if (that.xhr.status >= 400) {
                                reject(that.xhr.statusText, that.xhr);
                            }
                            else {
                                resolve(that.xhr.response, that.xhr);
                            }
                        };
                        that.xhr.onerror = function () {
                            reject(that.xhr.statusText, that.xhr);
                        };
                        that.xhr.ontimeout = function () {
                            reject('Timeout ended', that.xhr);
                        };

                        that.xhr.send(that.options.data);
                    });
                };

                this.extendsOptions = function (options) {
                    this.options = Object.assign({}, this.options, options);
                };

                this.getXhr = function () {
                    return this.xhr;
                };

            };
        }
    }

})(window);
